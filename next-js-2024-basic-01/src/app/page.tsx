  'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  const handleNavigate = () => {
    router.push('products')
  }
  
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next JS - 2024</h1>
      <Link href={'products'}>Navigate to Product page</Link>
      <Link href={'account'}>Navigate to Account page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative way of naviagte</h2>
      <button onClick={handleNavigate}>Navigate to Product page</button>
      <button>Navigate to Account page</button>

    </main>
  );
}
