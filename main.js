
let nombre = window.prompt("Ingrese su Nombre");
let edad = window.prompt("Ingrese su edad");


if (edad<=18) {
    alert (" NO PUDE INGRESAR SIENDO MENOR DE EDAD")
}   
else if (edad>18) {

    let continuar = true

    while (continuar){

        let prestamos = parseInt(prompt("1-prestamo una casa , 2-prestamo para un departamento ,  3-prestamo para una lancha" ))

        if (prestamos == 1){
           let dinero1 = parseInt(prompt("Cuanto dinero necesita para su casa?" ))
            console.log ("te daremos este dinero " + dinero1  +" Señor/ra "+ nombre)
        }
        else if (prestamos == 2){
            let dinero2 = parseInt(prompt("Cuanto dinero necesita para su Departamento?" ))
             console.log ("te daremos este dinero " + dinero2 +"Señor/ra "+ nombre)
         }
         else if (prestamos == 3){
            let dinero3 = parseInt(prompt("Cuanto dinero necesita para su Lancha?" ))
             console.log ("te daremos este dinero " + dinero3 +" Señor/ra "+ nombre)
         }
         let confirmacion = prompt("Desea hacer otro prestamo? (si/no)")
         if(confirmacion == "no"){
            continuar=false
            console.log("Muchas gracias por confiar en nosotros")
         }
    }

}
