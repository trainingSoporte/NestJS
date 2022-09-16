import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService:UsersService
    ){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id',ParseIntPipe) id:number){
        return this.userService.findById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto);
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
