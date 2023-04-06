import { Profile } from './profile';
import { Ivoice } from './ivoice';
import { Order } from './order';
import { Payment } from './payment';

export class User {
  id: number;
  username: string;
  password: strng;
  isAdmin: boolean;
  profile: Profile;
  invoice: Ivoice[];
  orders: Order[];
  payments: Payment[];
}
