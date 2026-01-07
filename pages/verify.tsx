import { useState } from "react";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);

  async function handleVerify() {
    const res = await fetch(
      "https://raw.githubusercontent.com/BACOUL/certif-scope/main/attestations.json"
    );

    const data = await res.json();
    const match = data.attestations.find(
      (item: any) => item.id === id && item.hash === hash
    );

    if (match) {
      setResult({ valid: true, item: match });
    } else {
      setResult({ valid: false });
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Verify Attestation</h1>

      <input
        placeholder="Attestation ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        placeholder="SHA-256 Hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleVerify}>Verify</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          {result.valid ? (
            <p style={{ color: "green" }}>VALID ✓</p>
          ) : (
            <p style={{ color: "red" }}>INVALID ✗</p>
          )}
        </div>
      )}
    </div>
  );
}
