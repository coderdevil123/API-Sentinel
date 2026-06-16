import {
  UserRole
} from "@/types/role";

export function hasRole(
  role: UserRole,
  allowedRoles: UserRole[]
) {

  return allowedRoles.includes(
    role
  );

}

export function canAccessReports(
  role: UserRole
) {

  return [
    "ADMIN",
    "ANALYST"
  ].includes(role);

}

export function canExport(
  role: UserRole
) {

  return role === "ADMIN";

}

export function canManageUsers(
  role: UserRole
) {

  return role === "ADMIN";

}