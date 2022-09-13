// Algoritmo aplicado a selección de horario para reservas
for (let i= 09;i <= 20;i++){let ingresarNombre = prompt("Ingrese su Nombre para reservar");alert("El horario de"+" "+i+"hs fue asignado a"+" "+ ingresarNombre); if(i==13){continue;};if(i==20){break;}}
//Algoritmo aplicado a la selección de días de reservas
let diaSemana = prompt ("Ingrese Día que quiere reservar");
while(diaSemana =="Lunes"){alert("Tu reserva no se puede registrar para el día"+" "+diaSemana);diaSemana = prompt("Ingrese nuevamente el día que quiere reservar");switch(diaSemana){case "Martes":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Miercoles":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Jueves":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Viernes":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Sabado":alert("Tu reserva se registró para el día"+" "+diaSemana);break;case "Domingo":alert("Tu reserva se registró para el día"+" "+diaSemana);break;default:alert("Ingrese un día de la semana valido para registrar su reserva")}};
// Funciones Anonimas
const suma = (a,b)=>a+b
const iva = x => x * 0.21
let valorEstablecimiento = 5000
const comisionDeporteando = x => x * 0.20
let valorReserva = suma (suma(iva(valorEstablecimiento),valorEstablecimiento),suma(comisionDeporteando(valorEstablecimiento),valorEstablecimiento))
alert("El valor total de tu reserva es de"+" "+valorReserva)
//Funcion Local
function saludoBienvenida(){
let nombreCompleto = prompt("Ingrese su nombre y apellido");alert("Bienvenido a Deporteando"+" "+nombreCompleto)}
