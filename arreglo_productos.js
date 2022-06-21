const products = [
    {
        name: 'Perfume Candy - Ariana Grande',
        image: "perfume1.png",
        price: 250000,
        quantity: 6,
        id:00,
    },
    {
        name: 'Perfume Cloud - Ariana Grande',
        image: 'perfume2.png',
        price: 350000,
        quantity: 1,
        id:11,
    },
    {
        name: 'Perfume Good Girl - Carolina Herrera',
        image: 'CarolinaHerrera.png',
        price: 500000,
        quantity: 2,
        id:22,
    },
    {
        name: 'Perfume Chanel 5 - Coco Chanel',
        image: 'Chanel5.png',
        price: 700000,
        quantity: 3,
        id:33,
    }
];


let totalcar=0

for (let i=0;i<4;i++){

    

    let total = products[i].price * products[i].quantity
    totalcar = totalcar+total

    document.getElementById(i).innerHTML = '<section class="content-container"><img src='+ products[i].image +' alt="PerfumeMoschino"><br><h3>' + products[i].name + '</h3><h4>Precio: $' + products[i].price + '</h4><br><h4>Cantidad: ' + products[i].quantity + '</h4><br><h4>Total: $' + total + '</h4><br><br><button class=' + products[i].price + ' name="eliminar" type="button" id=' + products[i].id + '>Eliminar Articulo</button></section>'

    let button = document.getElementById(products[i].id)

    button.addEventListener("click",(event)=>event.target.parentNode.remove())
    button.addEventListener("click",(event)=>products.splice(i,1))   
    button.addEventListener("click",(event)=>actualizarPrecios())




}
document.getElementById("totalcar").innerHTML = '<section class="content-container"><h3> ----------------- TOTAL A PAGAR ----------------- </h3><br><br><br><br><h4>$' + totalcar + '</h4><br></section>'

function setCantidad(i){
   products.splice(i,1)
}

function actualizarPrecios(){
    total =0
    totalcar=0
    for (let i=0;i<4;i++){
    
        total = products[i].price * products[i].quantity
        totalcar = totalcar+total
        document.getElementById("totalcar").innerHTML = '<section class="content-container"><h3> ----------------- TOTAL A PAGAR ----------------- </h3><br><br><br><br><h4>$' + totalcar + '</h4><br></section>'

    }
}
