// src/evento/evento.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EventosService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto/update-evento.dto';
import { Evento } from './evento.entity';


@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  @Get()
  findAll() {
    return this.eventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosService.findOne(+id);
  }

  
  @Put(':id')
update(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
  const parsedId = +id; // Convierte el id de string a número usando el operador +
  return this.eventosService.update(parsedId, updateEventoDto);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosService.remove(+id);
  }
}
