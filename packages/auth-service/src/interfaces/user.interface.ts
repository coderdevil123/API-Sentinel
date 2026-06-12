export interface User {

  id: string;

  email: string;

  name: string;

  picture?: string;

  role:
    | "OWNER"
    | "ADMIN"
    | "MEMBER";

  organizationId?: string;

  createdAt?: string;
}