import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';


// TODO: la prueba de img broken es la siguiente
describe('ImgBrokenDirective', () => {

  //TODO: deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef("")
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
