import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [LoginPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Tu primer enunciado el cual debe de asegurar que el formulario sea invalido cuando ingrese dato erroneos

  //TODO: Patron AAA = Arrange, Act, Assert

  it('🔴 Deberia de retornar "invalido" el formulario', () => {

    //TODO: Arrange
    // se escrben cosas que NO pasen la validación
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '1111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email') // captura el email q esta en el form component
    const passwordForm: any = component.formLogin.get('password') // captura la password q esta en el form component

    //TODO: Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert

    expect(component.formLogin.invalid).toEqual(true);
  });

  it('✔✔ Deberia de retornar "valido" el formulario', () => {

    //TODO: Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert

    expect(component.formLogin.invalid).toEqual(false);
  });


  // TEST: btn iniciar sesión
  it('👍 El boton deberia de tener la palabra "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText // captura el innerTesxt

    expect(getInnerText).toEqual('Iniciar sesión') // InnerText debe ser igual a iniciar sesión

  })

});
