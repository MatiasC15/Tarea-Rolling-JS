
//     <!-- Dificultad:  🟢🟡
// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// …… -->

    let keepAsking = true;
      while (keepAsking) {
        let number = parseInt(
          prompt("Ingrese un numero que no sea superior a 50")
        );
        if (
          number > 50 ||
          isNaN(number) ||
          number <= 0
        ) {
          alert("Ingrese un numero valido");
          keepAsking = confirm("Desea continuar?");
          continue;
        }
        for (let i = 1 ; i <= number; i++) {
          let number = "";
          for (let j = 1; j <= i; j++) {
            number+= j;
          }
          console.log(number);
        }
        keepAsking = false;
      }
      alert("Ejecucion terminada");
