// src/participante/entities/participante.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Evento } from 'src/evento/evento.entity';
import { Inscripcion } from 'src/inscripcion/inscripcion.entity';

@Entity()
export class Participante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @ManyToMany(() => Evento, (evento) => evento.participantes)
  eventos: Evento[];

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.participante)
  inscripciones: Inscripcion[];
}
