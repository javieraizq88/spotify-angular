import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    // service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Prueba del sendCredentials

  it('Debe de retornar un objecto con "data" y "tokenSession"',
    (done: DoneFn) => {

      //TODO: Arrange

      const user: any = mockUser.userOk // se va a usar el usuario con datos correctos
      const mockResponse = { // al ejecutarlo, debe resultar el valor
        data: {},
        tokenSession: '0x0x0x'
      }

      httpClientSpy.post.and.returnValue(
        of(mockResponse) //TODO: ✔✔✔ ya es observable
      )

      //TODO: Act
      service.sendCredentials(user.email, user.password)
        .subscribe(responseApi => {//TODO respuesta de la API ['data','tokenSession']
          const getProperties = Object.keys(responseApi)
          expect(getProperties).toContain('data') // se espera el valor data
          expect(getProperties).toContain('tokenSession') // se espera el valor tokenSession
          done() // TODO fin de la peticion 
        })

    })


  it('TEST de suma de 2 + 3', () => {

    const a = 2
    const b = 3


    const c = service.suma(a, b)


    expect(c).toEqual(5)

  })

});
