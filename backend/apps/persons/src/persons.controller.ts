import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDTO } from 'libs/common/src/database/models/dtos/person/CreatePerson.dto';

@Controller()
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  getStatus(): string {
    return `It's working!`;
  }

  @Post()
  createPerson(@Body() payload: CreatePersonDTO) {
    return this.personsService.createPerson(payload);
  }
}
