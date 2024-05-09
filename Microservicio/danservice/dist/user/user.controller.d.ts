import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<boolean>;
    findOne(id: number): Promise<User | string>;
    update(updateUserDto: UpdateUserDto): Promise<boolean>;
    remove(id: number): Promise<any>;
}
