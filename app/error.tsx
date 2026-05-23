"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-4">
        Something went wrong
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Unexpected error
      </h1>
      <p className="text-slate-400 text-lg max-w-md mb-10">
        We hit an unexpected snag. Try refreshing, or reach out at{" "}
        <a
          href="mailto:hello@ignitly.com"
          className="text-green-400 hover:underline"
        >
          hello@ignitly.com
        </a>{" "}
        if it keeps happening.
      </p>
      <button
        onClick={unstable_retry}
        className="inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-7 py-3 rounded-full hover:bg-green-300 transition-colors"
      >
        Try again
      </button>
    </main>
  );
}
