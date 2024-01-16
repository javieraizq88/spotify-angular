import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { sessionGuard } from './session.guard';

//TODO:🔴🔴 Es el nombre de la prueba "Examen del Session Guard"
describe('Testing of Session Guard 👍', () => {
  let guard: sessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(sessionGuard);
  });

  //TODO La primera pregunta de ese gran examen!
  it('should be created', () => {
    expect(guard).toBeTruthy(); //TODO 🤬🤬🤬
  });

});
