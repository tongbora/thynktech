"use client";
import { useState, useEffect } from "react";
import { getUserProfile } from "@/services/auth";
import Image from "next/image";
import { UserProfile } from "@/types/user";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token).then(setProfile).catch(console.error);
    }
  }, []);

  if (!profile)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center rounded-full">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={50}
        height={50}
        unoptimized
        className="rounded-full"
      />
    </div>
  );
}
