import { Profile } from './profile';

export class Cart {
  id: number = 0;
  profile: Profile = new Profile();
  cartItemId: number | undefined;
}
