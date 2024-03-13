import prismadb from "@/lib/prismadb";
import React from "react";
import CompanionForm from "./components/companion-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

async function CompanionIdPage({ params }: CompanionIdPageProps) {
  const { userId } = auth();
  // Check subscription later..

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    // attempt to fetch companion based on id from current url
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
}

export default CompanionIdPage;
