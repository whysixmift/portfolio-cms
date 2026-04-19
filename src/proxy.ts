import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

export default NextAuth(authConfig).auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/admin", req.nextUrl));
    }
    return null;
  }

  if (isAdminRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
