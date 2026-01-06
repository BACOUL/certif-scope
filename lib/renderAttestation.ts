import fs from 'fs';
import path from 'path';

export function renderAttestationHTML(data: Record<string, string>) {
  const templatePath = path.join(
    process.cwd(),
    'templates/pdf/certif-scope-attestation.v3.en.html'
  );

  let html = fs.readFileSync(templatePath, 'utf8');

  for (const [key, value] of Object.entries(data)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }

  return html;
}
