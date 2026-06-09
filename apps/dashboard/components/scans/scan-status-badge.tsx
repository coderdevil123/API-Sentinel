export default function ScanStatusBadge({
  status
}: {
  status: string;
}) {

  const styles = {

    COMPLETED:
      "bg-green-500/20 text-green-400",

    RUNNING:
      "bg-blue-500/20 text-blue-400",

    PENDING:
      "bg-yellow-500/20 text-yellow-400",

    FAILED:
      "bg-red-500/20 text-red-400"
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
          styles[
            status as keyof typeof styles
          ] ||
          "bg-zinc-700 text-zinc-300"
        }
      `}
    >
      {status}
    </span>

  );
}