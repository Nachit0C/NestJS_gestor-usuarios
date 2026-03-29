import { User } from '../user.entity';

export abstract class IUsersService {
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: number): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract createUser(dto: any): Promise<User>;
  abstract remove(id: number): Promise<void>;
}
