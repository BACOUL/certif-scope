import { generateDynamicSections } from "./dynamicAttestation";

export function renderAttestation(data) {
  const { rows, charts } = generateDynamicSections(data.scopes);

  let html = attestationTemplate
    .replace("{{DYNAMIC_SCOPE_ROWS}}", rows)
    .replace("{{DYNAMIC_CHARTS}}", charts);

  // Remplace les champs généraux
  for (const key of Object.keys(data)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    html = html.replace(regex, data[key]);
  }

  return html;
}
