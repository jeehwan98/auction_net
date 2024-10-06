"use client";

// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

interface UserProfileProps {
  params: {
    userId: string
  }
}

export default function UserPage({ params }: UserProfileProps) {

  const userId = params.userId;
  console.log('❗️', userId);

  if (!userId) {
    notFound();
  }

  return (
    <main className="p-20 text-black bg-gray-50">
      <div>{userId}&apos;s Profile Page</div>
    </main>
  )
}