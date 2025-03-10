"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import DataWrapper from "./datawrapper";
import useSWR from "swr";
import ScrollPrompt from "./scrollprompt";

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

  const fetcher = (str: string, data?: RequestInit) =>
    fetch(str, data).then((res) => res.json());
  const { data, isLoading } = useSWR<{ battery: number }>(
    "/api/battery",
    fetcher,
    {
      refreshInterval: 10000,
    },
  );

  // const { data: tasks, isLoading: isLoadingTasks } = useSWR<number>(
  //   "/api/tasks",
  //   fetcher,
  //   {
  //     refreshInterval: 10000,
  //   },
  // );

  const { data: currentlyPlaying, isLoading: isLoadingPlaying } = useSWR<{
    title: string;
    artist: string;
    currentlyPlaying: boolean;
  }>("/api/spotify", fetcher, {
    refreshInterval: 10000,
  });

  return (
    <section className="container relative mx-auto flex min-h-[90vh] flex-col gap-4 px-8 py-12 md:flex-row lg:h-[80vh] lg:items-center lg:gap-16 lg:px-16">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="font-display text-8xl lg:text-[10rem]">
          Ayush
          <br />
          Paul.
        </h1>
        <h2 className="text-4xl lg:text-5xl">a student from north carolina</h2>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="grid max-w-[400px] flex-1 grid-cols-2 grid-rows-2 gap-4 md:max-h-[344px] md:max-w-none lg:max-h-full xl:aspect-square">
          <Card className=" h-full bg-lightPurple">
            has <DataWrapper>{isLoading ? 100 : data?.battery}%</DataWrapper>{" "}
            battery left
          </Card>
          <Card className=" h-full bg-lightBlue">
            {isLoadingPlaying
              ? "is"
              : currentlyPlaying?.currentlyPlaying
                ? "is"
                : "was"}{" "}
            listening to{" "}
            <DataWrapper>
              {isLoadingPlaying ? "nothing" : currentlyPlaying?.title}
            </DataWrapper>
          </Card>
          <Card className="col-span-2 h-full bg-lightNavy">
            is <DataWrapper>{secondsSinceBirth}</DataWrapper>
            seconds old! My next solar orbit is in{" "}
            <DataWrapper>{daysTillNextBirthday}</DataWrapper> days
          </Card>
        </div>
      </div>
      <ScrollPrompt />
    </section>
  );
}
