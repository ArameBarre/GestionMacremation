import mongoose from "mongoose";

const motifSchema = new mongoose.Schema(
  {
    titre: String,
    description: String,
    difficulte: String,
    prix: String,
    srcImg: String,
    altText: String,
  },
  { timestamps: true }
);

// Check if the 'Motif' model is already defined
const modelExists = mongoose.modelNames().includes("Motif");

// If the model doesn't exist, define it
export const Motif = modelExists
  ? mongoose.models.Motif // Use existing model if it exists
  : mongoose.model("Motif", motifSchema); // Define new model otherwise
