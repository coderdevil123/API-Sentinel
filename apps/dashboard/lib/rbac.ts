import {
  UserRole
}
from "@/types/user";

export function hasRole(
  role: UserRole,
  allowed: UserRole[]
) {

  return allowed.includes(
    role
  );
}