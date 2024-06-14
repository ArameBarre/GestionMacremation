"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import TemplatePage from "@/components/templatePage/TemplatePage";

const VinDetails = async () => {
  const params = useParams();
  const vinId = params.vinId;

  const getData = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${Number(id)}`
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    return res.json();
  };

  const data = await getData(motifId);

  return (
    <div style={{ fontSize: "2rem", padding: "2rem" }}>
      {data ? (
        <>
          <TemplatePage
            key={data.id}
            title={data.titre}
            description={data.description}
          />
        </>
      ) : (
        <div>Vin non trouvé !</div>
      )}
    </div>
  );
};

export default VinDetails;
