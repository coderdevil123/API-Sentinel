export interface Organization {

  id: string;

  name: string;

  plan:
    | "FREE"
    | "PRO"
    | "ENTERPRISE";

  scansUsed: number;

  scanLimit: number;
}