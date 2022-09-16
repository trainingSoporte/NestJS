import { Body, Controller, Delete, Get, Patch, Post} from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(
        private readonly userService:UsersService
    ){}

    @Get()
    findAll(){
        return 'findAll';
    }

    @Get(':id')
    findById(){
        return 'findById';
    }

    @Post()
    create(){
        return 'create';
    }

    @Patch()
    update(){
        return 'update'
    }

    @Delete()
    delete(){
        return 'delete'
    }
}
