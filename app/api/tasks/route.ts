import { TodoistApi } from "@doist/todoist-api-typescript";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (process.env.TODOIST_API_KEY === undefined) {
    return NextResponse.json(
      { error: "TODOIST_API_KEY is required" },
      { status: 500 },
    );
  }
  const api = new TodoistApi(process.env.TODOIST_API_KEY);
  const data = await api.getTasks();
  return NextResponse.json(data.length);
}
