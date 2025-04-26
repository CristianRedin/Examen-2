import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class UpdateParticipanteDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

 
}
