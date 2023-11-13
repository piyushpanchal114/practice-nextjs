"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();
  return (
    <div>
      <p>NewUser</p>
      <button
        onClick={() => router.push("/users")}
        className="btn btn-secondary"
      >
        Create
      </button>
    </div>
  );
};

export default NewUser;
