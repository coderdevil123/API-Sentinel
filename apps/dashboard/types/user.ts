export type UserRole =
  | "ADMIN"
  | "ANALYST"
  | "VIEWER";

export interface AppUser {
  id: string;
  email: string;
  name: string;

  role: UserRole;
}