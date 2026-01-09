import type { NextPage } from "next";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Instant Certified Carbon Attestation for SMEs
        </h1>

        <p className="text-lg mb-4">
          Scope 1 · Scope 2 · Scope 3 emissions
        </p>

        <p className="text-md mb-10">
          Trusted for financing, procurement and insurance compliance.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/generate"
            className="px-6 py-3 bg-teal-600 text-white rounded-md font-semibold"
          >
            Generate Attestation
          </a>

          <a
            href="/verify"
            className="px-6 py-3 bg-gray-900 text-white rounded-md font-semibold"
          >
            Verify Attestation
          </a>
        </div>
      </section>
    </main>
  );
}
