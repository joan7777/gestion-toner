import { Controller, Post, Body, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { mail: string; password: string }) {
    return this.authService.register(body.mail, body.password);
  }

  @Post('login')
  async login(@Body() body: { mail: string; password: string }) {
    const user = await this.authService.validateUser(body.mail, body.password);
    if (!user) return { message: 'Invalid credentials' };
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
