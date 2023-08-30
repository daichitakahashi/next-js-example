import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (
  req: Request,
  { params }: { params: { name: string } }
) => {
  // sleep 1sec
  await new Promise((s) => setTimeout(s, 1000));

  const cookieStore = cookies();
  cookieStore.set(params.name, new Date().toTimeString(), {
    expires: (() => {
      const d = new Date();
      d.setSeconds(d.getSeconds() + 30);
      return d;
    })(),
    httpOnly: false,
  });

  return NextResponse.json({});
};
