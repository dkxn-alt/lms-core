import { IsString, IsEmail } from 'class-validator';

export class AddMemberDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
