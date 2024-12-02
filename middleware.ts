// middleware.js
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "./lib/supabaseClient";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const { data: session } = await supabase.auth.getSession(
    req.headers.get("Authorization"),
  );

  if (!session && req.nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}
