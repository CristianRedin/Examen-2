import { IsString, IsEmail } from 'class-validator';

export class CreateParticipanteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;
}
