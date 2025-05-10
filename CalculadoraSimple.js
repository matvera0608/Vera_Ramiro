//Voy a hacer una calculadora simple usando console.log()

numberA = 40
numberB = 26
numberC = 52
numberD = 91

//This variable's going to add the solicited numbers
sumar = function(numberA, numberB, numberC, numberD)
{
 operación = numberA + numberB + numberC + numberD

 console.log(`The result of operation is: ${operación}`)
}

//This variable's going to add the solicited numbers
restar = function(numberA, numberB, numberC, numberD)
{
     summatory = numberB + numberC + numberD
     
     numberMenor = operación < 0

     if (numberMenor)
     {
          console.log("Not allowed the negatives number")
     }
     else
     {
          operación = numberA - summatory
          console.log(`The result of substraction is: ${operación}`)
     }
}

//This variable's going to multiply the solicited numbers
multiplicar = function (numberC, numberD)
{
     operación =  numberC * numberD

     console.log(`The result of multiplication is: ${operación}`)
}

//This variable's going to divide the solicited numbers, but the divisor can't be zero
dividir = function (numberA, numberD)
{
     divisionCero = numberD === 0

     if (divisionCero)
     {
          console.log("The division by zero isn't allowed")
          return undefined
     }
     else
     {
          operación = numberA/numberD

          console.log(`The result of division is: ${operación}`)
     }
}

//This variable's going to order the solicited numbers, but minor to major
ordenar = function (numberA, numberB, numberC, numberD)
{
     let numbers = [numberA, numberB, numberC, numberD]

     numbers.sort((a, b) => b - a) 

      console.log(`The result of order by minor to major is: ${operación}`)
}

sumar(numberA, numberB, numberC, numberD)
restar(numberA, numberB, numberC, numberD)
multiplicar(numberC, numberD)
dividir(numberA, numberD)
ordenar(numberA, numberB, numberC, numberD)