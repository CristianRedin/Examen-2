import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto/update-inscripcion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inscripcion } from './inscripcion.entity';
import { Evento } from 'src/evento/evento.entity';
import { Participante } from 'src/participante/participante.entity';

@Injectable()
export class InscripcionService {
  constructor(
    @InjectRepository(Inscripcion)
    private readonly inscripcionRepository: Repository<Inscripcion>,
    
    @InjectRepository(Evento) // Inyectamos el EventoRepository
    private readonly eventoRepository: Repository<Evento>, // Asegúrate de que el EventoRepository está correctamente inyectado

    @InjectRepository(Participante)
    private readonly participanteRepository: Repository<Participante>, // Inyectamos el ParticipanteRepository
  ) {}

  
  async create(createInscripcionDto: CreateInscripcionDto): Promise<Inscripcion> {
    const evento = await this.eventoRepository.findOne({ where: { id: createInscripcionDto.eventoId } });
    if (!evento) {
      throw new NotFoundException('Evento no encontrado');
    }

    const participante = await this.participanteRepository.findOne({ where: { id: createInscripcionDto.participanteId } });
    if (!participante) {
      throw new NotFoundException('Participante no encontrado');
    }

    const inscripcion = this.inscripcionRepository.create({
      evento,
      participante,
      estado: createInscripcionDto.estado,
    });

    return this.inscripcionRepository.save(inscripcion);
  }

  async findAll(): Promise<Inscripcion[]> {
    return this.inscripcionRepository.find();
  }

  async findOne(id: number): Promise<Inscripcion> {
    const inscripcion = await this.inscripcionRepository.findOne({ where: { id } });
    if (!inscripcion) {
      throw new NotFoundException('Inscripción no encontrada');
    }
    return inscripcion;
  }

  async remove(id: number): Promise<void> {
    await this.inscripcionRepository.delete(id);
  }
}
