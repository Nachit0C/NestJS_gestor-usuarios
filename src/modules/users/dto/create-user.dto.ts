import { IUser } from '../interface/users.interface';

export class CreateUserDto implements IUser {
  name: string;
  email: string;
  password: string;
}
