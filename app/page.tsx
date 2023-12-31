import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Home</h1>
      <h2>Hello {session && <span>{session.user!.name}</span>}</h2>
      <div>
        <Link href="/users">Users</Link>
        <ProductCard />
      </div>
    </main>
  );
}
