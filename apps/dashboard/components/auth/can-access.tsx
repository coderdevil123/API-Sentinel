import {
  ReactNode
}
from "react";

import {
  Permission
}
from "@/types/permission";

import {
  UserRole
}
from "@/types/role";

import {
  can
}
from "@/lib/can";

export default function
CanAccess({

  role,

  permission,

  children

}: {

  role: UserRole;

  permission: Permission;

  children: ReactNode;

}) {

  if (
    !can(
      role,
      permission
    )
  ) {
    return null;
  }

  return children;

}