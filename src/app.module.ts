import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoModule } from './evento/evento.module';
import { ParticipanteModule } from './participante/participante.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'Eventos',
      entities: [],
      retryDelay: 3000,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
}),
    
    
    EventoModule, ParticipanteModule, InscripcionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
