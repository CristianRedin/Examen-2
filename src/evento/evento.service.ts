// src/evento/eventos.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from 'src/evento/evento.entity';
import { CreateEventoDto } from './dto/create-evento.dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto/update-evento.dto';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  create(createEventoDto: CreateEventoDto) {
    const evento = this.eventoRepository.create(createEventoDto);
    return this.eventoRepository.save(evento);
  }

  findAll() {
    return this.eventoRepository.find();
  }

  async findOne(id: number) {
    const evento = await this.eventoRepository.findOne({
      where: { id }, // Aquí pasas el id dentro de un objeto "where"
    });
  
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    
    return evento;
  }
  

  async update(id: number, updateEventoDto: UpdateEventoDto) {
    const evento = await this.findOne(id);
    Object.assign(evento, updateEventoDto);
    return this.eventoRepository.save(evento);
  }

  async remove(id: number) {
    const evento = await this.findOne(id);
    return this.eventoRepository.remove(evento);
  }
}
