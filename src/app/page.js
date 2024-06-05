import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-base-100 p-5"> 
      Landing Page
      <div>
        <Link href="/main" className="btn btn-primary">Goto main page</Link>
      </div>
    </div>
  );
}
