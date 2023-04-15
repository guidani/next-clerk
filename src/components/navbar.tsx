import { SignIn, UserButton, useSession } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn, session } = useSession();
  return (
    <div className="flex gap-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/another"}>another</Link>
      <Link href={"/protected"}>Protected</Link>
      {!session ? <SignIn /> : <UserButton />}
    </div>
  );
}
