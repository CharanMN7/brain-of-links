"use client";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

const MySpace = () => {
  const user = useAuth();

  if (!user) {
    return <Link href="/login">Login first</Link>;
  }

  return <div>MySpace</div>;
};
export default MySpace;
