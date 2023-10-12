/*
Ejercicio 1
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("p");
  x.click(sePresiono);
}

function sePresiono(){
    alert("Se apreto el boton");
}

Ejercicio 2
let x = $(document);
x.ready (inicializarEventos);

function inicializarEventos(){
    let x = $(".tabla");
    x.click(cambiarColor);
}

function cambiarColor(){
    let x = $(".tabla");
    x.css("background-color" , "rgb(86, 110, 110)");
}

Ejercicio 9


let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton1");
  x.click(asociarClaseThead);
  x = $("#boton2");
  x.click(asociarClaseTbody);
}

function asociarClaseThead() {
  let x = $("thead");
  x.addClass("asignar1");
}

function asociarClaseTbody() {
    let x = $("tbody");
    x.addClass("asignar2");
  }


  Ejercicio 10


let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton1");
  x.click(presionBoton1);
  x = $("#boton2");
  x.click(presionBoton2);
}

function presionBoton1() {
    let x = $("#header");
    alert(x.html());
  }
  
  function presionBoton2() {
    let x = $("#formulario");
    alert(x.html());
  }

Ejercicio 11

  let x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  let x=$("b");
  x.click(ocultarItem);
}

function ocultarItem()
{
  let x=$("b");
  x.hide();
}

Ejercicio 12

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("td");
  x.mouseover(entraMouse);
  x.mouseout(saleMouse);
}

function entraMouse() {
  $(this).css("background-color", "#800000");
}

function saleMouse() {
  $(this).css("background-color", "#fff");
}

    Ejercicio 14
    
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("div");
  x.mousemove(moverMouse);
  x.mouseout(mouseFuera);
}
    


function moverMouse(event) {
  let x = $("#x");
  x.text("coordenada x=" + event.clientX);
  x = $("#y");
  x.text("coordenada y=" + event.clientY);
}

function mouseFuera(event){
  let p = $("p");
  p.text("salio del div");
}


let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#button1");
  let y = $("#button2");
  x.mousedown(presionaMouse);
  x.mouseup(sueltaMouse);
  y.mousedown(presionaMouse);
  y.mouseup(sueltaMouse);
}

function presionaMouse() {
  $(this).css("background-color", "#ff0");
}

function sueltaMouse() {
  $(this).css("background-color", "#fff");
}

Ejercicio 16

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("div");
  x.dblclick(dobleClic);
}

function dobleClic() {
  let x = $("div");
  x.css({"width": "250px", "height": "250px"});
  x.dblclick(quitar);
}
function quitar() {
  let x = $("div");
  x.css({"width": "800px", "height": "70px"});
  x.dblclick(dobleClic);
}
 Ejercicio 17

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("input");
  x.focus(tomaFoco);
}

function tomaFoco() {
  let x = $("input");
  x.css("color", "red");
}

Ejercici 17

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#text1");
  x.focus(tomaFoco);
  x.blur(pierdeFoco);
  x = $("#text2");
  x.focus(tomaFoco);
  x.blur(pierdeFoco);
}

function tomaFoco() {
  let x = $(this);
  x.attr("value", "");
}

function pierdeFoco() {
  let x = $(this);
  if(x.val("")){
    alert("No ingreso datos");
  }
}
*/