import {
  ReactNode
} from "react";

import {
  UserRole
} from "@/types/role";

export default function PermissionGate({
  role,
  allowedRoles,
  children
}: {
  role: UserRole;

  allowedRoles: UserRole[];

  children: ReactNode;
}) {

  if (
    !allowedRoles.includes(role)
  ) {

    return null;

  }

  return children;
}