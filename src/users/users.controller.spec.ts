import { Test, TestingModule } from "@nestjs/testing";
import { ModuleMocker, MockFunctionMetadata } from "jest-mock";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

const moduleMocker = new ModuleMocker(global);

describe("UsersController", () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => jest.clearAllMocks());

  it("should be defined", () => expect(controller).toBeDefined());

  const _id = "000000000000000000000001";
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    age: 30,
  };
  describe("create an user data", () => {
    it("should create a new user", async () => {
      const mockUser = { _id, ...userData };

      mockUserService.create.mockResolvedValue(mockUser);

      const result = await controller.create(userData);

      expect(result).toEqual(mockUser);
      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(userData);
    });
  });

  describe("find users data", () => {
    it("should return all users data", async () => {
      const mockUser = [{ _id, ...userData }];

      mockUserService.findAll.mockResolvedValue(mockUser);

      const result = await controller.findAll();

      expect(result).toEqual(mockUser);
      expect(service.findAll).toHaveBeenCalledTimes(1);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe("find an user data", () => {
    it("should return an user data by id", async () => {
      const mockUser = { _id, ...userData };

      mockUserService.findOne.mockResolvedValue(mockUser);

      const result = await controller.findOne(_id);

      expect(result).toEqual(mockUser);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(service.findOne).toHaveBeenCalledWith(_id);
    });
  });

  describe("update an user data", () => {
    it("should update and return an user data", async () => {
      const updateData = { age: 30 };
      const mockUser = { _id, ...userData, ...updateData };
      mockUserService.update.mockResolvedValue(mockUser);

      const result = await controller.update(_id, updateData);

      expect(result).toEqual(mockUser);
      expect(service.update).toHaveBeenCalledTimes(1);
      expect(service.update).toHaveBeenCalledWith(_id, updateData);
    });
  });

  describe("delete an user data", () => {
    it("should delete and return an user data", async () => {
      const mockUser = { _id, ...userData };
      mockUserService.remove.mockResolvedValue(mockUser);

      const result = await controller.remove(_id);

      expect(result).toEqual(mockUser);
      expect(service.remove).toHaveBeenCalledTimes(1);
      expect(service.remove).toHaveBeenCalledWith(_id);
    });
  });
});
