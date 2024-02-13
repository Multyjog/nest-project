import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {}
  signup() {
    return { msg: 'Signed up!' };
  }
  signin() {
    return 'Signing in';
  }
}
