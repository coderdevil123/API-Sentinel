import {
  ReactNode
}
from "react";

import {
  hasRole
}
from "@/lib/rbac";

import {
  UserRole
}
from "@/types/role";

export default function Protected({
  role,
  allow,
  children
}: {
  role: UserRole;
  allow: UserRole[];
  children: ReactNode;
}) {

  if (
    !hasRole(
      role,
      allow
    )
  ) {
    return null;
  }

  return children;
}