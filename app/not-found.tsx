import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Page not found
      </h1>
      <p className="text-slate-400 text-lg max-w-md mb-10">
        This page doesn&apos;t exist or has been moved. Let&apos;s get you back
        on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-7 py-3 rounded-full hover:bg-green-300 transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
