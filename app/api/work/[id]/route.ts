import { NextResponse } from "next/server";

// Read a specific message

export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = params;
    console.log({ id });
    return new NextResponse(
      "Jackpot! Get Request successfull to dynamic route",
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = params;
    console.log({ id });
    return new NextResponse("Jackpot! Put Request Successful", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = params;
    console.log({ id });
    return new NextResponse("Jackpot! Delete  Request", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
