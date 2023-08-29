import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  req.headers;
  // sleep 1sec
  await new Promise((s) => setTimeout(s, 1000));

  return NextResponse.json({
    list: ["one", "two", "three"],
  });
};
