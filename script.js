let arrozPreco = 5.50;
let feijaoPreco = 9.80;
let oleoDeSojaPreco = 5.50;
let salPreco = 2.50;
let acucarPreco = 4.50;
let cafePreco = 7.50;
let molhoDeTomatePreco = 9.80;
let macarraoPreco = 5.65;
let milhoPreco = 2.85;

let arrozQtd = 8;
let feijaoQtd = 7;
let oleoDeSojaQtd = 2;
let salQtd = 1;
let acucarQtd = 3;
let cafeQtd = 4;
let molhoDeTomateQtd = 3;
let macarraoQtd = 3;
let milhoQtd = 3;

let totalGasto = (arrozPreco * arrozQtd) + (feijaoPreco * feijaoQtd) + (oleoDeSojaPreco * oleoDeSojaQtd) +
                (salPreco * salQtd) + (acucarPreco * acucarQtd) + (cafePreco * cafeQtd) +
                (molhoDeTomatePreco * molhoDeTomateQtd) + (macarraoPreco * macarraoQtd) + 
                (milhoPreco * milhoQtd);

                let valorInicial = 500;
                let restante = valorInicial - totalGasto;
                
                console.log("Total gasto: R$ " + totalGasto.toFixed(2));
                console.log("Valor restante: R$ " + restante.toFixed(2));
                

