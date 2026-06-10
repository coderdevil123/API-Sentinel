import {
  getRiskClasses
}
from "@/lib/risk-colors";

export default function RiskBadge({
  risk
}: {
  risk: string;
}) {

  const color =
  getRiskClasses(risk);

  return (

    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        ${color}
      `}
    >
      {risk}
    </span>

  );
}