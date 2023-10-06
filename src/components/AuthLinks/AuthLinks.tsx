"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = ({className}:any) => {
  const [state, setState] = useState("notAuthenticated");
  return (
    <>
      {state == "notAuthenticated" ? (
        <Link className={className}  href={"/login"}>Login</Link>
      ) : (
        <>
          <Link className={className}  href={"/Logout"}>Logout</Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
