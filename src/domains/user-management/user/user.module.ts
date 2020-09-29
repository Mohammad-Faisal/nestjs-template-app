import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository ])],
    controllers: [UserController],
    providers: [UserService ],
    exports : [UserService]

})

export class UserModule {

}
