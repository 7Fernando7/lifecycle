import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  // Se va utlizar para digamos que para talvez una inicialización, pero no haga peticiones http en el constuctor
  constructor  () {
    console.log('Constructor');
  }

  //Se utiliza para hacer la primera peticion http, para hacer los subscribes, para escuchar webSocket, implementar los times.
  //O cualquier otra cosa que necesitamos justo despues que el componente de angular ha sido correctamente montado
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  //Se utliza si necesita estar pendiente de los cambios de las propriedades de los @Input()
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //Se utliza cuando sucede camnbios, ya sea en inputs, propriedades, cuando el component detecta algun tipo de cambio
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //Se utliza cuando sucede camnbios, ya sea en inputs, propriedades, cuando el component detecta algun tipo de cambio
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //Se utliza cuando sucede camnbios, ya sea en inputs, propriedades, cuando el component detecta algun tipo de cambio
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  //Se utliza cuando sucede camnbios, ya sea en inputs, propriedades, cuando el component detecta algun tipo de cambio
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  //Para hacer limpiezas en caso de que en OnInit haya creado listener, Observable, times o algun proceso que esta ejecutandose a lo largo que el componente esta en pantalla
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
   }



}
