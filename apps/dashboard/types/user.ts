import {
  UserRole
} from "./role";

export interface UserContext {

  id: string;

  email: string;

  name: string;

  picture?: string;

  role: UserRole;

  organizationId: string;
}