import { Injectable } from '@nestjs/common';

const users = [
    {
        id:1,
        username:'Adrian',
        fullname:'Ojeda',
        email:'aojeda@claro.com.ar',
        password:'1234'

    },
    {
        id:2,
        username:'Adr2',
        fullname:'Ojeda',
        email:'aojeda@claro.com.ar',
        password:'1234'

    },
    {
        id:3,
        username:'Adr3',
        fullname:'Ojeda',
        email:'aojeda@claro.com.ar',
        password:'1234'

    },
]


@Injectable()
export class UsersService {

    findAll(){
    }

    findById(){

    }

    create(){

    }

    update(){

    }

    delete(){
        
    }
}
