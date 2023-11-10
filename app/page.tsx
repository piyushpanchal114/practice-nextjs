import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h2>
        Home
        <div>
          <Link href="/users">Users</Link>
          <ProductCard />
        </div>
      </h2>
    </main>
  );
}
