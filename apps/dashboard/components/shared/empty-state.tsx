export default function EmptyState({
  title,
  description
}: {
  title: string;
  description: string;
}) {

  return (

    <div
      className="
      py-20
      text-center
      "
    >

      <h3
        className="
        text-xl
        font-semibold
        "
      >
        {title}
      </h3>

      <p
        className="
        text-zinc-500
        mt-2
        "
      >
        {description}
      </p>

    </div>

  );
}