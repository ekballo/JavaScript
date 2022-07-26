/*
 ## Transfomar notas escolares

 Crie um algorito que transforme as notas do sistema numerico para 
 sistemas de notas em caracteres A B C

 * de 90 para cima - A
 * entre 80 - 89   - B
 * entre 70 - 79   - C
 * entre 60 - 69   - D
 * menor que 60    - F 


 */

function getNota(nota) {
    let notaA = nota >= 90 && nota <= 100 
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0
   
    let notaFinal
   
   if(notaA) {
       notaFinal = "A"    
   } else if (notaB) {
       notaFinal = "B" 
   } else if (notaC) {
       notaFinal = "C"
   } else if (notaD) {
       notaFinal = "D"
   } else if (notaF) {
       notaFinal = "F"
   } else {
       notaFinal = "Nota invalida"
   }
   
   return notaFinal
}

console.log(getNota(100))
console.log(getNota(99))
console.log(getNota(88))
console.log(getNota(77))
console.log(getNota(66))
console.log(getNota(55))
console.log(getNota(-1))