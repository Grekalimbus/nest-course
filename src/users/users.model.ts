import { UserRoles } from "./../roles/user-roles.model";
import { Role } from "./../roles/roles.model";
import { DataTypes } from "sequelize";
import { Model, Table,Column, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist";


interface UserCreationAttrs {
    email:string,
    password: string
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs>{
    @ApiProperty({example:'1', description: "Уникальный идентификатор"})
    @Column({type:DataTypes.INTEGER, unique: true, autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'user@mail.ru', description: "Email пользователя"})
    @Column({type:DataTypes.STRING, unique: true, allowNull:false})
    email: string;

    @ApiProperty({example:'user12345', description: "Пороль пользователя"})
    @Column({type:DataTypes.STRING, allowNull:false})
    password: string;

    @ApiProperty({example:'true', description: "Забанен или нет"})
    @Column({type:DataTypes.BOOLEAN,  defaultValue:false})
    banned: boolean;

    @ApiProperty({example:'За хулиганство', description: "Причина бана"})
    @Column({type:DataTypes.STRING, allowNull:true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}