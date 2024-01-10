"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import DataWrapper from "./datawrapper";

export default function Hero() {
  const birthDate = new Date(2006, 5, 16);
  const [secondsSinceBirth, setSecondsSinceBirth] = useState(() => {
    const now = new Date();
    const differenceInSeconds = Math.floor(
      (now.getTime() - birthDate.getTime()) / 1000,
    );
    return differenceInSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsSinceBirth((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [daysTillNextBirthday, setDaysTillNextBirthday] = useState(() => {
    const now = new Date();
    const nextBirthDate = new Date(
      now.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate(),
    );
    if (now > nextBirthDate) {
      nextBirthDate.setFullYear(now.getFullYear() + 1);
    }
    const differenceInDays = Math.ceil(
      (nextBirthDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
    );
    return differenceInDays;
  });

  useEffect(() => {
    const updateDays = () => {
      const now = new Date();
      const nextBirthDate = new Date(
        now.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate(),
      );
      if (now > nextBirthDate) {
        nextBirthDate.setFullYear(now.getFullYear() + 1);
      }
      const differenceInDays = Math.ceil(
        (nextBirthDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
      );
      setDaysTillNextBirthday(differenceInDays);
    };

    const timeout = setTimeout(
      updateDays,
      (24 - new Date().getHours()) * 60 * 60 * 1000,
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex h-[90vh] flex-col px-8 py-12 lg:h-[80vh] lg:flex-row lg:items-center lg:gap-16 lg:px-16">
      <div>
        <h1 className="font-display text-8xl lg:text-[10rem]">
          Ayush
          <br />
          Paul.
        </h1>
        <h2 className="text-4xl lg:text-5xl">a student from north carolina</h2>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Card className="aspect-square bg-lightPurple">
            has <DataWrapper>43%</DataWrapper> battery left
          </Card>
          <Card className="aspect-square bg-lightBlue">
            is currently <DataWrapper>sitting in class</DataWrapper>
          </Card>
          <Card className="col-span-2 bg-lightNavy">
            is <DataWrapper>{secondsSinceBirth}</DataWrapper>
            seconds old! Next solar orbit in{" "}
            <DataWrapper>{daysTillNextBirthday}</DataWrapper> days
          </Card>
        </div>
      </div>
    </section>
  );
}
