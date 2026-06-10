export function getRiskClasses(
  risk: string
) {

  switch (risk) {

    case "CRITICAL":
      return `
        bg-red-950
        text-red-500
      `;

    case "HIGH":
      return `
        bg-orange-950
        text-orange-500
      `;

    case "MEDIUM":
      return `
        bg-yellow-950
        text-yellow-500
      `;

    default:
      return `
        bg-green-950
        text-green-500
      `;
  }
}