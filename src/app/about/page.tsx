import Link from "next/link";
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="prose">
        <h1 className="text-lg font-bold">About</h1>
        <p>Some stuff about the course.</p>
      </div>
      <div>
        <Link href="/" className="p-4 border-2 rounded-md bg-slate-200">
          Home
        </Link>
      </div>
    </main>
  );
}
