import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

    private data = [
      {
        id: '1',
        title: 'Donate',
        imgURL: 'https://www.elobservadormexico.com/wp-content/uploads/2019/11/arbol-850x491.png',
        description: 'Donate a tree'
      },
      {
        id: '2',
        title: 'Donate',
        imgURL: 'https://eloutput.com/app/uploads-eloutput.com/2020/01/baby-yoda-figura-sideshow.jpg',
        description: 'Donate for recycle'
      },
      {
        id: '3',
        title: 'Donate',
        imgURL: 'https://img.freepik.com/vector-gratis/madre-e-hija-sosteniendo-cajas-carton-ropa-donacion-o-reciclaje-contenedor-ropa_161202-17.jpg?size=626&ext=jpg',
        description: 'Donate'
      },
    ];

    constructor() { }

    public getData() {
      return this.data;
    } 
  }

