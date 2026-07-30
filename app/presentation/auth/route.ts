import { NextResponse } from "next/server";
import {
  createPresentationSession,
  passwordIsValid,
  presentationCookie,
} from "../../../lib/presentation-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");

  if (typeof password !== "string" || !passwordIsValid(password)) {
    return NextResponse.redirect(new URL("/presentation?error=invalid", request.url), 303);
  }

  const session = createPresentationSession();
  if (!session) {
    return NextResponse.redirect(new URL("/presentation", request.url), 303);
  }

  const response = NextResponse.redirect(
    new URL("/presentation/download", request.url),
    303,
  );
  response.cookies.set(presentationCookie.name, session, {
    httpOnly: true,
    maxAge: presentationCookie.maxAge,
    path: "/presentation",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
