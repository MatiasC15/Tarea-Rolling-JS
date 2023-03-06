
//     <!-- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10 -->

    const number = 500;
    let horizontalLine = " ----------————————————————————----------";
    for ( let i = 1 ; i <= number ; i++){
        let divisiveNumber4 = ""
        let divisiveNumber9 = ""
        if (i % 4 === 0 ){
            divisiveNumber4+= " (El numero es multiplo de 4)" //equivalente a escribir divisiveNumber = divisiveNumber + "El numero es multiplo de 4"
            
        }
        if (i % 9 === 0 ){
            divisiveNumber9+= " (El numero es multiplo de 9)"//equivalente a escribir divisiveNumber = divisiveNumber + "El numero es multiplo de 9"
            
        }
       console.log(i+ ")" + divisiveNumber4 + (divisiveNumber4 && divisiveNumber9 ? " y" : "") + divisiveNumber9);

       if(i % 5 === 0) {
        console.log( horizontalLine);
       }
    //    (divisiveNumber4 && divisiveNumber9 ? " y" : ""):expresión ternaria que se encarga de verificar si ambos mensajes están presentes. Si es así, agrega una coma seguida de un espacio. De lo contrario, agrega una cadena vacía.
        
    }

// <!-- let divisiveNumber = ""si declaro divisiveNumber fuera del bucle el valor de divisiveNumber al termianr el bucle no se refresca y se va acumulando sucesivamente a los siguiente numeros que sean multiplos ya sea de 4 o de 9, por lo que muestra nuevamente el mensaje guardado previamente en divisive number mas el nuevo mensaje del numero sea divisible, es decir, pasa lo siguiente:
// 1
// 2
// 3
// 4 El numero es multiplo de 4
// 5 El numero es multiplo de 4
// 6 El numero es multiplo de 4
// 7 El numero es multiplo de 4
// 8 El numero es multiplo de 4El numero es multiplo de 4
// 9 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9
// 10 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9
// 11 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9
// 12 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9El numero es multiplo de 4
// 13 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9El numero es multiplo de 4
// 14 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9El numero es multiplo de 4
// 15 El numero es multiplo de 4El numero es multiplo de 4El numero es multiplo de 9El numero es multiplo de ->