import {
  UserRole
}
from "./role";

export interface Invitation {

  id: string;

  email: string;

  role: UserRole;

  status:
    | "PENDING"
    | "ACCEPTED";

}