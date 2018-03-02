import {HumanName} from './human.name';
import {Encounter} from './encounter';

export class Patient {
  id: string;
  active: boolean;
  gender: string;
  birthDate: Date;
  deceasedBoolean: boolean;
  name: HumanName[];
  encounters: Encounter[];
}
