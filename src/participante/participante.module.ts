// src/participante/participante.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantesService } from './participante.service';
import { ParticipantesController } from './participante.controller';
import { Participante } from './participante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participante])],
  providers: [ParticipantesService],
  controllers: [ParticipantesController],
  exports: [TypeOrmModule], // Asegúrate de exportar TypeOrmModule
})
export class ParticipanteModule {}
