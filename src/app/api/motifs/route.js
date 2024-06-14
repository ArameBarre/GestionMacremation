import { connectToDb } from "@/libs/connectToDb";
import { Motif } from "@/libs/models";
import { NextResponse } from "next/server";
import React from "react";

export async function GET() {
  connectToDb();
  const motifs = await Motif.find();
  return NextResponse.json({
    motifs,
  });
}

export async function POST(request, res) {
  if (request.method === "POST") {
    await connectToDb();
    try {
      const { titre, description, difficulte, prix, srcImg, altText } =
        await request.json();
      //const event = new Event({ title, description, date, place, img, alt });
      //await event.save();
      await Motif.create({
        titre,
        description,
        difficulte,
        prix,
        srcImg,
        altText,
      });
      return NextResponse.json({ message: "Motif created" }, { status: 201 });
    } catch (error) {
      console.log("Erreur lors du post d'un motif", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la creation d'un motif" });
    }
  } else {
    res
      .status(405)
      .json({ message: "Seule les requests POST sont autorisees" });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  connectToDb();
  await Motif.findByIdAndDelete(id);
  return NextResponse.json({ message: "Motif deleted" }, { status: 200 });
}
