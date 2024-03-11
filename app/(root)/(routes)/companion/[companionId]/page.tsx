import prismadb from "@/lib/prismadb";
import React from "react";
import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

async function CompanionIdPage({ params }: CompanionIdPageProps) {
  // Check subscription later..

  const companion = await prismadb.companion.findUnique({
    // attempt to fetch companion based on id from current url
    where: {
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany()

  return (
    <CompanionForm initialData={companion} categories={categories}/>
  )
}

export default CompanionIdPage;
