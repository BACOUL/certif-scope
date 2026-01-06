type AttestationData = {
  COMPANY_NAME: string;
  BUSINESS_SECTOR: string;
  COUNTRY: string;
  ASSESSMENT_PERIOD: string;

  SCOPE_1: string;
  SCOPE_2: string;
  SCOPE_3: string;
  TOTAL: string;

  ATTESTATION_ID: string;
  ISSUE_DATE_UTC: string;
  GENERATION_TIMESTAMP: string;
  METHODOLOGY_VERSION: string;
};

export function renderAttestationHTML(data: AttestationData): string {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Carbon Footprint Attestation — Certif-Scope</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
`;

  // Injection simple et contrôlée
  for (const [key, value] of Object.entries(data)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }

  // ⚠️ IMPORTANT
  // On charge ici le template HTML V3
  // Tu peux soit :
  // - le coller directement ici
  // - soit le charger depuis un fichier plus tard

  html += `
  <p><strong>Company:</strong> {{COMPANY_NAME}}</p>
  <p><strong>Total emissions:</strong> {{TOTAL}} tCO₂e</p>
</body>
</html>
`;

  return html;
}
