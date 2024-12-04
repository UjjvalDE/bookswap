import prisma from '@/lib/prisma';  // Importing the Prisma Client instance
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Fetching all books from the database
    const res = await prisma.books.findMany();  // Prisma Client method to fetch books

    // Returning the response with the fetched books data
    return NextResponse.json(
      {
        data: res,
      },
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    // Handling error case and returning error response
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: error.message,  // Sending the error message in the response
        },
        {
          status: 400,
        },
      );
    } else {
      return NextResponse.json(
        {
          error: 'An unknown error occurred',  // Fallback error message
        },
        {
          status: 400,
        },
      );
    }
  }
}

export async function POST(request: Request) {
  // Reading the request body
  const body = await request.json();

  // Destructuring fields from the request body
  const {
    name,
    author,
    image,
    price,
    contact,
    email,
    audience,
    genre,
    theme,
    tone,
  } = body as {
    name: string;
    author: string;
    image: string;
    price: number;
    contact: string;
    email: string;
    audience: string;
    genre: string;
    theme: string;
    tone: string;
  };

  // Checking for missing fields
  if (
    !name ||
    !author ||
    !image ||
    !price ||
    !contact ||
    !audience ||
    !genre ||
    !theme ||
    !tone
  ) {
    return NextResponse.json(
      {
        error: 'Missing mandatory fields. Try again',
      },
      {
        status: 400,
      },
    );
  }

  try {
    // Creating a new book entry in the database
    const res = await prisma.books.create({
      data: {
        name,
        author,
        contact,
        price: typeof price === 'string' ? parseInt(price) : price,
        image,
        audience,
        genre,
        theme,
        tone,
        user: {
          connect: {
            email,  // Associating the book with the user using the email field
          },
        },
      },
    });

    // Returning a successful response with the created book data
    return NextResponse.json({ res }, { status: 200 });
  } catch (error: unknown) {
    // Handling error during book creation and sending error response
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: error.message,  // Sending the error message in the response
        },
        {
          status: 400,
        },
      );
    } else {
      return NextResponse.json(
        {
          error: 'An unknown error occurred',  // Fallback error message
        },
        {
          status: 400,
        },
      );
    }
  }
}
