export interface Subscription {

  plan:
    | "FREE"
    | "PRO"
    | "ENTERPRISE";

  expiresAt: string;

  seats: number;

  usedSeats: number;

}