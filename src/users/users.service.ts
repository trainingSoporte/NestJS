import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { CreateUserDto, UpdateUserDto } from '../dto/';






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

    findAll() {
        return users;
    }

    findById(id: number) {

        const user = users.find(user => user.id === id);

        if (!user) throw new NotFoundException(`El user id: ${id} no existe..`);

        return user;
    }

    create(createUserDto: CreateUserDto) {
        const _user: User = {
            id: 4,
            ...createUserDto
        }

        users.push(_user);

        return _user;
    }

    update(id: number, updateUserDto: UpdateUserDto) {

        let _user: User = this.findById(id);

        users = users.map(user => {
            if (user.id === id) {
                _user = { ..._user, ...updateUserDto, id };
                return _user;
            }

            return user;
        })

        return _user;

    }

    delete() {

    }
}
