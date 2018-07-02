import {EventEmitter, Injectable} from '@angular/core';
import {Country} from '../model/country';

@Injectable()
export class EventService {

  countryEmitter = new EventEmitter<Country>(true);

  emit(value: Country) {
    this.countryEmitter.emit(value);
  }

  receive() {
    return this.countryEmitter;
  }
}
