import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url =
    "https://home.ayush.digital/api/states/sensor.ayushs_iphone_battery_level";

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.HASS_TOKEN,
    },
    cache: "no-store",
  });
  const data = await response.json();
  const number = parseInt(data.state);

  return NextResponse.json({ battery: number });
}
