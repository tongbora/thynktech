"use client";
import React from "react";
import Image from "next/image";

// ✅ Define the prop types
interface ProfileProps {
  avatar: string;
  userName: string;
}

// ✅ Use destructuring with type annotation
export default function Profile({ avatar, userName }: ProfileProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={avatar}
        alt={userName}
        width={45}
        height={45}
        unoptimized
        className="rounded-full"
      />
    </div>
  );
}
