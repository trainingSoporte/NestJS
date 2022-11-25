import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/';
import { User } from './entities/user.entity';






let users: User[] = [
    {
        id: 1,
        username: 'Adrian',
        fullname: 'Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '1234'

    },
    {
        id: 2,
        username: 'Adr2',
        fullname: 'Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '1234'

    },
    {
        id: 3,
        username: 'Adr3',
        fullname: 'Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '1234'

    },
]


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    findAll() {
        return this.userRepository.find();
    }

    findById(id: number) {

        return this.userRepository.findOneBy({id});
    }

    async create(createUserDto: CreateUserDto) {
     
        try {

            const user = this.userRepository.create(createUserDto);
            await this.userRepository.save(user);

            return user;
            
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException(error);    
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {

        const user = await this.userRepository.preload({
            id:id,
            ...updateUserDto
        });

        if(user)throw new NotFoundException(`El User con Id: ${id} no existe`);

        await this.userRepository.save(user);

        return user;
        
    }

    delete(id: number) {

        users =  users.filter((user:User) => user.id !== id);

        return users;

    }
}
