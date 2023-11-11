import { NextResponse } from "next/server";

// CREATE MESSAGE
export async function POST(request: Request) {
  try {
    return NextResponse.json(
      { message: "Post request successfull" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function GET(request: Request) {
  try {
    return NextResponse.json(
      { message: "Get request successfull" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
