let db = window.localStorage
let btnAgregar = document.getElementById('btnAgregar')

function agregarCarrito(botoncito){
var contenedor = botoncito.parentNode
let cantidadP = 0

let nombre = contenedor.querySelector('#nombre').textContent
let descripcion =  contenedor.querySelector('#descripcion').textContent
let precio = contenedor.querySelector('#precio').textContent

cantidadP = cantidadP+1







alertify.prompt( 'Atencion!', 'Ingrese la cantidad de '+nombre, ''

               , function(evt, value) { alertify.success('Productos Agregados ' + value)
             
               if(value>0){
                guardarLocalStorage(nombre,descripcion,precio,value)
               }
               else{
                alertify
  .alert("Debes de Ingresar Cantidad De Productos");
               }
               
               
               
               

            
            }
               , function() { alertify.error('Cancelado') });







}


function guardarLocalStorage(nombre,descripcion,precio,value){
    let total = calcularPrecio(value,precio)
    let id = Math.round(Math.random()*(100-1)+1)
    let productos ={
        id:id,
        cantidad:value,
        nombre:nombre,
        total:total,
      

    }
   
    db.setItem(productos.id,JSON.stringify(productos))
}


function calcularPrecio(value,precio){

let total = precio*value
return total
}