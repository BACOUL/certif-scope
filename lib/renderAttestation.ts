// lib/renderAttestation.ts

import { attestationTemplate } from "./attestationTemplate";

interface ScopeData {
  scope1: number;
  scope2: number;
  scope3: number;
  total: number;
}

interface AttestationData {
  attestationId: string;
  companyName: string;
  sector: string;
  country: string;
  period: string;
  issueDate: string;
  preparedOn: string;
  methodologyVersion: string;
  hash: string;
  qrCodeUrl: string;
  scope1: number;
  scope2: number;
  scope3: number;
  total: number;
}

/**
 * Génère le HTML final prêt pour Puppeteer
 * avec les valeurs injectées automatiquement.
 */
export function renderAttestation(data: AttestationData): string {
  const total = Number(data.total || 0);
  const s1 = Number(data.scope1 || 0);
  const s2 = Number(data.scope2 || 0);
  const s3 = Number(data.scope3 || 0);

  const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0";
  const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0";
  const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0";

  const hash = String(data.hash || "PENDING");
  const hashShort = hash.substring(0, 8);

  // Map de remplacement
  const map = {
    ATTESTATION_ID: data.attestationId,
    COMPANY_NAME: data.companyName,
    BUSINESS_SECTOR: data.sector,
    COUNTRY: data.country,
    ASSESSMENT_PERIOD: data.period,
    ISSUE_DATE_UTC: data.issueDate,
    PREPARED_ON: data.preparedOn,
    METHODOLOGY_VERSION: data.methodologyVersion,

    SCOPE_1: s1.toFixed(2),
    SCOPE_2: s2.toFixed(2),
    SCOPE_3: s3.toFixed(2),
    TOTAL: total.toFixed(2),

    SCOPE_1_PERCENT: pct1,
    SCOPE_2_PERCENT: pct2,
    SCOPE_3_PERCENT: pct3,

    HASH: hash,
    HASH_SHORT: hashShort,

    QR_CODE: data.qrCodeUrl
      ? `<img src="${data.qrCodeUrl}" width="120" height="120" alt="QR Code" />`
      : "",
  };

  let html = attestationTemplate;

  // Remplacements simples
  for (const key in map) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), String(map[key]));
  }

  return html;
}
