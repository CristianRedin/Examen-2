import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participante } from './participante.entity';
import { CreateParticipanteDto } from './dto/create-participante.dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto/update-participante.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ParticipantesService {
  constructor(
    @InjectRepository(Participante)
    private participanteRepository: Repository<Participante>,
  ) {}

  async create(createParticipanteDto: CreateParticipanteDto): Promise<Participante> {
    const participante = this.participanteRepository.create(createParticipanteDto);
    return await this.participanteRepository.save(participante);
  }

  async update(id: number, updateParticipanteDto: UpdateParticipanteDto): Promise<Participante> {
    const participante = await this.findOne(id); // Verifica que el participante exista
  
    // Actualiza las propiedades del participante con los datos del DTO
    Object.assign(participante, updateParticipanteDto);
  
    // Guarda el participante actualizado
    return this.participanteRepository.save(participante); // Esto actualizará el participante
  }

  async findOne(id: number): Promise<Participante> {
    const participante = await this.participanteRepository.findOne({ where: { id } });
    if (!participante) {
      throw new NotFoundException(`Participante con ID ${id} no encontrado`);
    }
    return participante;
  }

  async findAll(): Promise<Participante[]> {
    return this.participanteRepository.find();
  }

  async remove(id: number): Promise<void> {
    const participante = await this.findOne(id);
    await this.participanteRepository.remove(participante);
  }
}
