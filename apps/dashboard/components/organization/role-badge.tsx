import {
  UserRole
}
from "@/types/role";

export default function RoleBadge({
  role
}: {
  role: UserRole;
}) {

  const colors = {

    ADMIN:
      "bg-red-500/20 text-red-400",

    ANALYST:
      "bg-yellow-500/20 text-yellow-400",

    VIEWER:
      "bg-blue-500/20 text-blue-400"

  };

  return (

    <span
      className={`
        px-2
        py-1
        rounded-md
        text-xs
        font-medium
        ${colors[role]}
      `}
    >
      {role}
    </span>

  );

}