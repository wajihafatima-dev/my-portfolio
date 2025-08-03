import {NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import Contact from "../../../model/userModel"; // Make sure you have this model

export async function POST(NextRequest) {
  try {
    await connectDb();

    const { name, email, message } = await NextRequest.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { isSuccessful: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    return NextResponse.json({
      isSuccessful: true,
      message: "Message received. Thank you!",
    });
  } catch (error) {
    console.error("Error saving contact message:", error.message);
    return NextResponse.json(
      { isSuccessful: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
