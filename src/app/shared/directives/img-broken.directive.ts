import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  // TODO: cambia la imagen que esta rota por la que le paso por elNative.src
  @HostListener("error") handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log("esta imagen", this.elHost);
    elNative.src = "https://picsum.photos/id/237/200/300"
  }

  constructor(private elHost: ElementRef) {

  }


}
