// src/evento/entities/evento.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Participante } from 'src/participante/participante.entity';
import { Inscripcion } from 'src/inscripcion/inscripcion.entity';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fecha: Date;

  @ManyToMany(() => Participante)
  @JoinTable()
  participantes: Participante[];

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.evento)
  inscripciones: Inscripcion[];
}

