import { Test, TestingModule } from '@nestjs/testing';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

describe('PersonsController', () => {
  let personsController: PersonsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PersonsController],
      providers: [PersonsService],
    }).compile();

    personsController = app.get<PersonsController>(PersonsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(personsController.getHello()).toBe('Hello World!');
    });
  });
});
