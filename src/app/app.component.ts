import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    for(let index=0; index<this.inventario.length; index++)
      if (this.inventario[index].id == this.formulario.id){
        //mandamos a llamar a funcion de limpiar los campos para agregar uevamente
        this.limpiar(); 
        alert('ya existe el id , volver a intentar');
        return;
      }   
      this.inventario.push(datoNuevo);
      //mandamos a llamar a funcion de limpiar los campos del formulario
      this.limpiar();
      alert('Agregado con exito');
      return;
  }

  public editar (): void{
    for (let index = 0; index <this.inventario.length; index++) {
      if (this.inventario[index].id == this.formulario.id) {
          this.inventario[index].id = this.formulario.id;
          this.inventario[index].nombre=  this.formulario.nombre;
          this.inventario[index].precio= this.formulario.precio;
          //mandamos a llamar a funcion de limpiar los campos del formulario
          this.limpiar(); 
        alert('Se actualizo con exito');
        break;
      }
      alert('no se puede modificar')      
      break;
    }
  }
  public limpiar():void{
    //asignamos null a todas las propiedades del objeto formulario para borrar todos los 'input' del formulario.
    this.formulario.id=null;
    this.formulario.nombre=null;
    this.formulario.precio=null;
  }
}
 


