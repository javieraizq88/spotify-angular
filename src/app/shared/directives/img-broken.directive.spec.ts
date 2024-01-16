import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { after } from 'node:test';

// componente de prueba

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})
class TestComponent {
  public srcMock: any = null
}

// TODO: la prueba de img broken es la siguiente
describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges() // detecta los cambios en la directiva
  })

  //TODO: deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef("")
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  //TODO: deberia instanciar correctamente
  it('testComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  });

  //TODO: deberia instanciar correctamente
  it('directiva deberia cambiar la imagen por un base 64', (done: DoneFn) => {
    // Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src // url antes de ser cambiada por la directiva
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src // url despues de ser cambiada por la directiva

      // expect(afterImgElement).toEqual("https://fastly.picsum.photos/id/573/200/300.jpg?blur=2&hmac=r50TUpMK1Y2-iE0tZO0Zr8QCdPzXz64-9JfdM2fNTeA")
      expect(afterImgElement).toMatch(/\bdata:image\b/) // cuando una cadena de texto que tenga bdata:image ---> prueba exitosa
      done() // fin del test
    }, 3000);

    
  });

})
