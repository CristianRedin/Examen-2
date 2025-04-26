// src/evento/dto/update-evento.dto.ts

import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class UpdateEventoDto {
  @IsString()
  @IsOptional() // Hacemos que este campo sea opcional al actualizar
  @IsNotEmpty()
  nombre?: string;

  @IsDateString()
  @IsOptional()
  fecha?: string;
}
