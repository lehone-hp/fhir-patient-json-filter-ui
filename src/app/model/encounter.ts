import {Observation} from './observation';

export class Encounter {
  id: number;
  status: string;
  observations: Observation[];
}
