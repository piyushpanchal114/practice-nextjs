import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>
        Home
        <div>
          <Link href="/users">Users</Link>
        </div>
      </h2>
    </main>
  );
}
