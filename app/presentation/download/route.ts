import { readFile } from "fs/promises";
import path from "path";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  hasValidPresentationSession,
  presentationCookie,
} from "../../../lib/presentation-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fileName = "final-hrv_jul_29_26.pptx";
const presentationPath = path.join(process.cwd(), "presentation-assets", fileName);

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const hasAccess = hasValidPresentationSession(
    cookieStore.get(presentationCookie.name)?.value,
  );

  if (!hasAccess) {
    return NextResponse.redirect(new URL("/presentation", request.url), 302);
  }

  try {
    const file = await readFile(presentationPath);
    return new Response(file, {
      headers: {
        "Cache-Control": "private, no-store",
        "Content-Disposition": `attachment; filename=\"${fileName}\"`,
        "Content-Length": String(file.byteLength),
        "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Presentation file is not available yet.", { status: 404 });
  }
}
