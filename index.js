//Arrays
let nombreyApellido = [ prompt ("Ingrese su Nombre y Apellido para reservar")];
let diaReserva = [Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo];
let horarioReserva = [9.00,10.00,11.00,12.00,13.00,14.00,15.00,16.00];
horarioReserva.push(14.00,15.00,16.00,17.00,18.00,19.00,20.00,21.00);
horarioReserva.splice(0,4)
let fechaReserva = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let mesReserva = [ Enero, Febrero, Marzo, Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre]
let añoReserva = [ 2022,2023,2024,2025]
let reserva = nombreyApellido.concat (diaReserva,fechaReserva,mesReserva,añoReserva,horarioReserva); alert("La reserva se registró para"+" "+reserva)