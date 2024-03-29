import { TrackModel } from './../../core/models/tracks.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()

  // myObservable1$: Observable<any> = new Observable () -----> se usa este para el ejemplo 1
  // myObservable1$: Subject<any> = new Subject() // el subject es observer y observable a la vez ----> ejemplo 2
  // myObservable1$: BehaviorSubject<any> = new BehaviorSubject("") // se debe inicializar con algo, BehaviorSubject es observer y observable a la vez


  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement //TODO <audio>

  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00') // muestra cuando tiempo falta de la cancion
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)


  constructor() {
    this.audio = new Audio() //se debe inicializar
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        this.setAudio(responseOK)
      }
    })

    this.listenAllEvents()

  }

  private listenAllEvents(): void { // va a escuchar los eventos q se disparen cada boton desde audio

    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false) // al partir la reproduccion
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false) // al terminar la cancion

  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) // TODO da los valores enteros de los segundos transcurridos de la cancion
    let minutes = Math.floor((currentTime / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds; //TODO  00:00 ---> 01:05 --> 10:15
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}` //muestra el tiempo q va transcurriendo de la cancion
    this.timeElapsed$.next(displayFormat)
  }

  private setRemaining(currentTime: number, duration: number): void { // tiempo restante de la cancion
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio // duration y currentTime son propiedades de HTMLAudioElement
    this.setTimeElapsed(currentTime)
    this.setRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) { //TODO: --> playing
      case 'play':
        this.playerStatus$.next('play')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        break
      default:
        this.playerStatus$.next('paused')
        break;
    }

  }

  private setPercentage(currentTime: number, duration: number): void { // valor q se usa en el style width dando el largo de la barra
    //TODO currentTime ---> (x)
    //TODO duration ---> 100%
    //TODO (currentTime * 100) / duration
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage) // beheaviorsubject
  }



  //TODO: Funciones publicas


  public setAudio(track: TrackModel): void {   //  recibe canciones desde trackMdel cuando la respuesta es ok
    console.log('🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍', track);
    this.audio.src = track.url // la fuente mp3 va a ser equivalente a lo q esta en track.url
    this.audio.play()
  }

  public togglePlayer(): void { // va a poner pausa a la cancion cambiando el estado del evento al hacer click
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio
    const percentageToSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageToSecond

  }

}
