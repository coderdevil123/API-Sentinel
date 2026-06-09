export default function RiskBadge({
  risk
}: {
  risk: string;
}) {

  const colors = {

    CRITICAL:
      "bg-red-500/20 text-red-400",

    HIGH:
      "bg-orange-500/20 text-orange-400",

    MEDIUM:
      "bg-yellow-500/20 text-yellow-400",

    LOW:
      "bg-green-500/20 text-green-400"
  };

  return (

    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${
          colors[
            risk as keyof typeof colors
          ]
        }
      `}
    >
      {risk}
    </span>

  );
}