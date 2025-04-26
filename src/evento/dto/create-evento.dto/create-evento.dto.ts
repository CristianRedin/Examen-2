import { IsString, IsDateString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fecha: string;  // Usar string aquí, porque la fecha será enviada como cadena en formato ISO 8601
}
