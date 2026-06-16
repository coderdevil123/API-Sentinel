import {
  UserRole
} from "@/types/role";

export async function getUserRole()
: Promise<UserRole> {

  return "ADMIN";

}