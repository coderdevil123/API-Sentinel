import {
  User
}
from "../interfaces/user.interface";

export class AuthService {

  validateUser(
    user: User
  ) {

    return Boolean(
      user.email
    );
  }

  isAdmin(
    user: User
  ) {

    return (
      user.role ===
      "ADMIN"
    );
  }

  isOwner(
    user: User
  ) {

    return (
      user.role ===
      "OWNER"
    );
  }
}