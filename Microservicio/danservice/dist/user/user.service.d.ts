import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User | null>;
    update(updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: number): Promise<void>;
    findAll(): Promise<User[]>;
}
