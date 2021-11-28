import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Usando modelos en angular';

  public inventario : any=[
    {id:1, nombre:"Pantalon", precio:250},
    {id:2, nombre:"falda", precio:500}
  ];

  hayRegistros():any {
    return this.inventario.length>0;              
  }

  public formulario : any = {
    id:null,
    nombre:null,
    precio:null
  }

  public seleccionar (articulos:any):void{
    this.formulario.id= articulos.id;
    this.formulario.nombre= articulos.nombre;
    this.formulario.precio= articulos.precio;
  }

  public eliminar (id:number):void{
    for (let index = 0; index <this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);
        alert('Eliminado con exito');
        break;
      }
      
    }
  }
  public agregar ():void{
    let datoNuevo={
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio
    };

    for(let x=0;x<this.inventario.length;x++)
      if (this.inventario[x].id == this.formulario.id){
        //asignamos null a todas las propiedades del objeto formulario para borrar todos los 'input' del formulario.
        this.formulario.id=null;
        this.formulario.nombre=null;
        this.formulario.precio=null;
        alert('ya existe el articulo , volver a intentar');
        return;
      }
      this.inventario.push(datoNuevo);
      //asignamos null a todas las propiedades del objeto formulario para borrar todos los 'input' del formulario.
      this.formulario.id=null;
      this.formulario.nombre=null;
      this.formulario.precio=null;  
      alert('Agregado con exito');
      return;
  }

  public editar ():void{
    for (let index = 0; index <this.inventario.length; index++) {
      if (this.inventario[index].id == this.formulario.id) {
          this.inventario[index].id = this.formulario.id;
          this.inventario[index].nombre=  this.formulario.nombre;
          this.inventario[index].precio= this.formulario.precio;
          //asignamos null a todas las propiedades del objeto formulario para borrar todos los 'input' del formulario.
          this.formulario.id=null;
          this.formulario.nombre=null;
          this.formulario.precio=null;  
        alert('Se actualizo con exito');
        break;
      }
      
    }
  }
 

}
