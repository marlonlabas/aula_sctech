export interface IClients {
  id?: number;           // ← importante ser opcional
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}