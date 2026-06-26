import {
  UserRole
}
from "./role";

export interface Invitation {

  id: string;

  email: string;

  role: UserRole;

  invitedBy: string;

  invitedAt: string;

  status:
    | "PENDING"
    | "ACCEPTED"
    | "EXPIRED";

  organizationId: string;

}