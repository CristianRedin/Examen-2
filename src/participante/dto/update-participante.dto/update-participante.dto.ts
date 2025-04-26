import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class UpdateParticipanteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

 
}
