import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const linksPath = path.join(process.cwd(), "data", "links.json");

function isSafeDestination(value: unknown): value is string {
  if (typeof value !== "string") return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;

  try {
    const links: Record<string, unknown> = JSON.parse(
      await readFile(linksPath, "utf8"),
    );
    const destination = links[slug];

    if (!isSafeDestination(destination)) {
      return new NextResponse("Link not found.", { status: 404 });
    }

    return NextResponse.redirect(destination, 302);
  } catch {
    return new NextResponse("Links are unavailable.", { status: 500 });
  }
}
