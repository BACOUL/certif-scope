import { attestationTemplate } from "../../lib/attestationTemplate";

const filled = attestationTemplate
  .replace("[[ATTESTATION_ID]]", report.id)
  .replace("[[ISSUE_DATE]]", new Date().toISOString())
  .replace("[[COMPANY_NAME]]", report.companyName)
  .replace("[[BUSINESS_SECTOR]]", report.sector)
  .replace("[[COUNTRY]]", "France")
  .replace("[[PERIOD]]", "FY2024")
  .replace("[[SCOPE1]]", report.scope1)
  .replace("[[SCOPE2]]", report.scope2)
  .replace("[[SCOPE3]]", report.scope3)
  .replace("[[TOTAL]]", report.total)
  .replace("[[GENERATED_AT]]", new Date().toISOString());
