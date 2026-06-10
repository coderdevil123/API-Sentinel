export interface Subscription {

  plan:
    | "FREE"
    | "PRO"
    | "ENTERPRISE";

  active: boolean;

  renewalDate: string;
}