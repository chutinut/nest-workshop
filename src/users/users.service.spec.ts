import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

describe('UsersService', () => {
  let service: UsersService;

  const mockUserModel = {
    create: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => expect(service).toBeDefined());
  const _id = '000000000000000000000001';
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
  };
  describe('create an user data', () => {
    it('should create a new user', async () => {
      const mockUser = { _id, ...userData };

      mockUserModel.create.mockResolvedValue(mockUser);

      const result = await service.create(userData);

      expect(result).toEqual(mockUser);
      expect(mockUserModel.create).toHaveBeenCalledTimes(1);
      expect(mockUserModel.create).toHaveBeenCalledWith(userData);
    });
  });

  describe('find users data', () => {
    it('should return all users data', async () => {
      const mockUser = [{ _id, ...userData }];

      mockUserModel.find.mockResolvedValue(mockUser);

      const result = await service.findAll();

      expect(result).toEqual(mockUser);
      expect(mockUserModel.find).toHaveBeenCalledTimes(1);
      expect(mockUserModel.find).toHaveBeenCalled();
    });
  });

  describe('find an user data', () => {
    it('should return an user data by id', async () => {
      const mockUser = { _id, ...userData };

      mockUserModel.findById.mockResolvedValue(mockUser);

      const result = await service.findOne(_id);

      expect(result).toEqual(mockUser);
      expect(mockUserModel.findById).toHaveBeenCalledTimes(1);
      expect(mockUserModel.findById).toHaveBeenCalledWith(_id);
    });
  });

  describe('update an user data', () => {
    it('should update and return an user data', async () => {
      const updateData = { age: 30 };
      const mockUser = { _id, ...userData, ...updateData };
      mockUserModel.findByIdAndUpdate.mockResolvedValue(mockUser);

      const result = await service.update(_id, updateData);

      expect(result).toEqual(mockUser);
      expect(mockUserModel.findByIdAndUpdate).toHaveBeenCalledTimes(1);
      expect(mockUserModel.findByIdAndUpdate).toHaveBeenCalledWith(
        _id,
        updateData,
      );
    });
  });

  describe('delete an user data', () => {
    it('should delete and return an user data', async () => {
      const mockUser = { _id, ...userData };
      mockUserModel.findByIdAndDelete.mockResolvedValue(mockUser);

      const result = await service.remove(_id);

      expect(result).toEqual(mockUser);
      expect(mockUserModel.findByIdAndDelete).toHaveBeenCalledTimes(1);
      expect(mockUserModel.findByIdAndDelete).toHaveBeenCalledWith(_id);
    });
  });
});
