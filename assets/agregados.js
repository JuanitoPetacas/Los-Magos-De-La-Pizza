let db = window.localStorage
let row = document.querySelector('.agregados')
let array = {}
let keys = Object.keys(db)
keys.map((key)=>{
array = JSON.parse(db.getItem(key))


})

if(Object.keys(array).length ===0){
    row.innerHTML=''
    let card = ` <div class="col-3 mt-3">
    <div class="card" >
        <img id="imagen" src="/imagenes/carrito.jpeg" class="card-img-top imagen" alt="...">
        <div class="card-body text-aling-center">
          <h5 class="card-title" id="nombre">No Haz Agregado Aun Productos al carrito</h5>
        </div>
      </div>
</div>`
 row.innerHTML += card
}
else{
row.innerHTML =''
let divTabla = `
<div class="col-5 mt-5">
<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Nombre</th>
    <th scope="col">Precio</th>
    <th scope="col"></th>
  </tr>
</thead>
<tbody id="tbody">

</tbody>
</table>
</div>
<div class="col-5 mt-5">
<div class="card " style="width: 18rem; margin: auto;">
  
  <div class="card-body text-center">
    <h5 class="card-title">Liquidacion</h5>
    <p class="card-text" id="cardTexto">Presiona el boton para pagar y crear factura online</p>
    <br>
    <button class="btn btn-primary" onclick="confirmarDomicilio()">Pagar</button>
    <button class="btn btn-warning" onclick="Limpiar()">Limpiar</button>
  </div>
</div>
</div>`
row.innerHTML += divTabla

let tbody = document.getElementById('tbody')
let llaves = Object.keys(db)

llaves.map((key)=>{
        
      
        let productos = JSON.parse(db.getItem(key))
        
        
        let fila = `<tr><td>${productos.id}</td><td>${productos.cantidad}</td><td>${productos.nombre}</td><td>${productos.total}</td>
        <td><button class="btn btn-warning" onclick="eliminarProducto()">Quitar</button></td></tr>`
        tbody.innerHTML += fila

})
    
}

const eliminarProducto = ()=>{
for(let i = 0;i<tbody.rows.length;i++){
    tbody.rows[i].addEventListener('click',function(e){
        let id = this.cells[0].innerHTML
        db.removeItem(id)
    })
}
window.location.href = "agregados.html"

}


const confirmarDomicilio =()=>{

    alertify.confirm("¿Desea Domicilio con el valor de 1600?",
  function(){
    alertify.success('Ok');
    pagar()


  },
  function(){
    alertify.error('Cancel');
  });



 }

 const pagar =()=>{
    let cardTexto = document.getElementById('cardTexto')
    cardTexto.innerHTML=''
    let tbody = document.getElementById('tbody')
    let total = 0;
    for(let i =0; i<tbody.rows.length;i++){
   
   
      let celda = tbody.rows[i].cells[3]
      let valor = parseFloat(celda.textContent)
      total = total+valor
      
 }
total = total+1600
let texto = `El valor de su pedido es de ${total}` 

cardTexto.innerHTML+=texto

}

const Limpiar = ()=>{
window.location.href= "agregados.html"

}
const borrar = ()=>{

    db.clear();
    window.location.href= "agregados.html"
}
 
 
   

