import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateUserDto {
    @ApiProperty({example:'user@mail.ru', description: "Почта"})
    readonly email: string;

    @ApiProperty({example:'user12345', description: "Пороль"})
    readonly password: string;
}