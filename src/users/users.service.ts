import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const result = await this.userModel.create(createUserDto);

    return result;
  }

  async findAll(): Promise<User[]> {
    const result = await this.userModel.find();

    return result;
  }

  async findOne(id: string): Promise<User> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException(`Invalid ID format ${id}`);

    const result = await this.userModel.findById(id);

    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException(`Invalid ID format ${id}`);

    const result = await this.userModel.findByIdAndUpdate(id, updateUserDto);

    if (!result) throw new NotFoundException('User not found');

    return result;
  }

  async remove(id: string): Promise<User> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException(`Invalid ID format ${id}`);

    const result = await this.userModel.findByIdAndDelete(id);

    if (!result) throw new NotFoundException('User not found');

    return result;
  }
}
