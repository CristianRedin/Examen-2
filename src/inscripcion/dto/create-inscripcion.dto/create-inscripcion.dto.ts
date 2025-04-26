import { IsInt, IsEnum, IsOptional } from 'class-validator';
import { EstadoInscripcion } from 'src/inscripcion/inscripcion.entity'; // Asegúrate de que la ruta sea correcta

export class CreateInscripcionDto {
  @IsInt()
  eventoId: number; // Aquí debe estar el nombre correcto de la propiedad

  @IsInt()
  participanteId: number;

  @IsOptional()
  @IsEnum(EstadoInscripcion)
  estado: EstadoInscripcion;
}
