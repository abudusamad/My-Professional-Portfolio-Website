// src/middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Check if the user is authenticated
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Check if the user has the "ADMIN" role
  if (token.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/auth/error', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};