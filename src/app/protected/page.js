"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/");
    return null;
  }

  return <h1>Welcome, {session.user?.name}!</h1>;
}
