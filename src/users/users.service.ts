import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByMail(mail: string): Promise<User | null> {
    return this.userModel.findOne({ mail });
  }

  async create(mail: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ mail, password: hashedPassword });
    return newUser.save();
  }

  async validateUser(mail: string, password: string): Promise<User | null> {
    const user = await this.findByMail(mail);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }
}
