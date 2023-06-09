import { AuthModule } from "./../auth/auth.module";
import { RolesModule } from "./../roles/roles.module";
import { UserRoles } from "./../roles/user-roles.model";
import { Role } from "./../roles/roles.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module, forwardRef } from "@nestjs/common";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from "./users.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]),forwardRef(()=> AuthModule), RolesModule],
  exports:[UsersService]
})
export class UsersModule {}
