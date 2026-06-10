"use client";

export default function TableSort({
  value,
  onChange
}: any) {

  return (

    <select
      value={value}
      onChange={
        e =>
          onChange(
            e.target.value
          )
      }
      className="
      bg-zinc-950
      border
      border-zinc-800
      rounded-lg
      px-3
      py-2
      "
    >

      <option value="latest">
        Latest
      </option>

      <option value="oldest">
        Oldest
      </option>

      <option value="risk">
        Highest Risk
      </option>

    </select>

  );
}