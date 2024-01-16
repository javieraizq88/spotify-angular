import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagen revento -->', this.elHost);

    if (this.customImg) {
      elNative.src = this.customImg
    } else {
      // opcion 1 ---> agregar img en el proyecto
      // elNative.src = "../.."

      //opcion 2 ---> agregar una img desde una pag web
      // elNative.src = "https://fastly.picsum.photos/id/573/200/300.jpg?blur=2&hmac=r50TUpMK1Y2-iE0tZO0Zr8QCdPzXz64-9JfdM2fNTeA"

      // opcion 3 ---> agregar una img base 64
      elNative.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAAD5JREFUGFdtjKENAEAIA4vC49h/HWbAERwexYfXVDW9S8nMRkTAzOhuVBXI3WeLqiIzsQJFxAD4w4LNbV6fD32XLKyP2o8zAAAAAElFTkSuQmCC"
    }

  }

  constructor(private elHost: ElementRef) {


  }

}
