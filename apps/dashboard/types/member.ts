import {
  UserRole
}
from "./role";

export interface Member {

  id: string;

  email: string;

  name: string;

  role: UserRole;

}