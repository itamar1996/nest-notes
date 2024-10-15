import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    @MinLength(6, { message: "Password must be at least 6 characters long." })
    password: string;

    @IsEmail({}, { message: "Invalid email address." })
    email: string;
}
