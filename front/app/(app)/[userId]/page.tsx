"use client";

// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

interface UserProfileProps {
  params: {
    userId: string
  }
}

// interface UserProfile {
//   id: number;
//   userId: string;
//   name: string;
//   email: string;
//   role: string;
//   imageUrl: string | StaticImport | undefined;
//   userStatus: string;
// }

export default function UserPage({ params }: UserProfileProps) {
  const userId = params.userId;
  const router = useRouter();
  const { username } = router.query;
  console.log('passed on username: ', username);
  if (!username) {
    notFound();
  }

  return (
    <main className="p-20 text-black bg-gray-50">
      <div>{userId}&apos;s Profile Page</div>
    </main>
  )
}