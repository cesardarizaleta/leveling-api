import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  findAll(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  findOne(id: number): Promise<Character | null> {
    return this.characterRepository.findOneBy({ id });
  }
}
