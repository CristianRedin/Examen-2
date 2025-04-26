// src/evento/evento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosService } from './evento.service';
import { EventosController } from './evento.controller';
import { Evento } from './evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  providers: [EventosService],
  controllers: [EventosController],
  exports: [TypeOrmModule], // Asegúrate de exportar el TypeOrmModule
})
export class EventoModule {}
