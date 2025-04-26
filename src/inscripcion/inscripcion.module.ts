// src/inscripcion/inscripcion.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { Inscripcion } from './inscripcion.entity';
import { EventoModule } from 'src/evento/evento.module'; // Importamos el EventoModule
import { ParticipanteModule } from 'src/participante/participante.module'; // Asegúrate de importar el módulo de Participante también

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscripcion]), // Aquí importamos solo la entidad Inscripcion
    EventoModule, // Importamos el EventoModule
    ParticipanteModule,
  ],
  providers: [InscripcionService],
  controllers: [InscripcionController],
})
export class InscripcionModule {}
