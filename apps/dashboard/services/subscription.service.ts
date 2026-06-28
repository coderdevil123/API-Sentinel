import {
  Subscription
}
from "@/types/subscription";

export async function
getSubscription()
: Promise<Subscription>{

  return {

    plan:
      "ENTERPRISE",

    expiresAt:
      "2027-01-01",

    seats:
      25,

    usedSeats:
      3

  };

}