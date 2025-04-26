import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Evento } from 'src/evento/evento.entity';
import { Participante } from 'src/participante/participante.entity';

export enum EstadoInscripcion {
  PENDIENTE = 'pendiente',
  CONFIRMADO = 'confirmado',
  CANCELADO = 'cancelado',
}

@Entity()
export class Inscripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Evento, (evento) => evento.inscripciones, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'evento_id' })
  evento: Evento;

  @ManyToOne(() => Participante, (participante) => participante.inscripciones, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'participante_id' })
  participante: Participante;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaInscripcion: Date;

  @Column({ type: 'enum', enum: EstadoInscripcion, default: EstadoInscripcion.PENDIENTE })
  estado: EstadoInscripcion;
}
