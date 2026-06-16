import {
  Permission
}
from "@/types/permission";

import {
  UserRole
}
from "@/types/role";

import {
  ROLE_PERMISSIONS
}
from "./permissions";

export function can(
  role: UserRole,
  permission: Permission
) {

  return ROLE_PERMISSIONS[
    role
  ].includes(
    permission
  );

}