import {
  Injectable,
  Inject,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { IUsersService } from '../users/interfaces/Iuser.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/user.entity';
import { JwtPayload } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @Inject(IUsersService)
    private readonly usersService: IUsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(
    registerDto: RegisterDto,
  ): Promise<{ message: string; user: User }> {
    const existing = await this.usersService.findByEmail(registerDto.email);

    if (existing) {
      throw new ConflictException('El email ya está en uso');
    }

    const saltRounds = parseInt(
      this.configService.get<string>('BCRYPT_SALT_ROUNDS', '10'),
    );
    const hashedPassword = await bcrypt.hash(registerDto.password, saltRounds);

    const user = await this.usersService.createUser({
      ...registerDto,
      password: hashedPassword,
    });

    return { message: 'Usuario creado correctamente', user };
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.usersService.findByEmail(loginDto.email);

    const passwordToCompare =
      user?.password ?? '$2b$10$invalidhashusedastimingprotection';

    const isMatch = await bcrypt.compare(loginDto.password, passwordToCompare);

    if (!user || !isMatch) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload: JwtPayload = { id: user.id, email: user.email };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
