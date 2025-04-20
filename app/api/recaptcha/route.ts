import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { token } = data;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return NextResponse.json(
      { message: "Token not found" },
      { status: 400 }
    );
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey || '');
    formData.append('response', token);

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Failed to verify", errorCodes: result['error-codes'] }, { status: 403 });
    }
  } catch (error) {
    return NextResponse.json({ message: `Internal Server Error`, error }, { status: 500 });
  }
}
