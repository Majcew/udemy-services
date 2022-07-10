export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  UNKNOWN = 'unknown',
}

export interface UpdateAccount {
  id: number;
  newStatus: Status;
}

export interface Account {
  name: string;
  status: Status;
}
