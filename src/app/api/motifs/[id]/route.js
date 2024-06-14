import { connectToDb } from "@/libs/connectToDb";
import { Motif } from "@/libs/models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  connectToDb();
  const motif = await Motif.findOne({ _id: id });
  return NextResponse.json({ motif }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { titre, description, difficulte, prix, srcImg, altText } =
    await request.json();
  connectToDb();
  await Motif.findByIdAndUpdate(id, {
    titre,
    description,
    difficulte,
    prix,
    srcImg,
    altText,
  });
  return NextResponse.json({ message: "Motif updated" }, { status: 200 });
}
