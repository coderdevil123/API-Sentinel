"use client";

export default function Pagination({
  page,
  setPage,
  totalPages
}: any) {

  return (

    <div
      className="
      flex
      gap-4
      justify-end
      mt-6
      "
    >

      <button
        onClick={() =>
          setPage(
            Math.max(
              1,
              page - 1
            )
          )
        }
      >
        Previous
      </button>

      <span>

        {page}
        /
        {totalPages}

      </span>

      <button
        onClick={() =>
          setPage(
            Math.min(
              totalPages,
              page + 1
            )
          )
        }
      >
        Next
      </button>

    </div>
  );
}