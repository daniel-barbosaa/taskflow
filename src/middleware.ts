import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get("token");
  const token = tokenCookie ? tokenCookie.value : null;

  const signInUrl = new URL("/", req.url);

  if (!token) {
    return NextResponse.redirect(signInUrl);
  }

  try {
    const response = await fetch(`${req.nextUrl.origin}/api/getUserUid`, {
      headers: {
        Cookie: `token=${token}`, // Envia o cookie de autenticação.
      },
    });
    const data = await response.json();
    
    if (data.uid) {
      return NextResponse.next();
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/projects", "/tasks"],
};
