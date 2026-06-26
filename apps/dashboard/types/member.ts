import {
  UserRole
}
from "./role";

export interface Member {

  id:
    string;

  name:
    string;

  email:
    string;

  role:
    UserRole;

  joinedAt:
    string;

}