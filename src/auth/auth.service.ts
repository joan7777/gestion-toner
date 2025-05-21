import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(mail: string, password: string) {
    return this.usersService.validateUser(mail, password);
  }

  async login(user: any) {
    const payload = { mail: user.mail, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(mail: string, password: string) {
    return this.usersService.create(mail, password);
  }
}
