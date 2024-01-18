import { getData, initArray, setZero } from "./src/SetZero.js"

const gen = document.getElementById("genmatriz")
gen.addEventListener("click", function(){
    let fil = document.getElementById("fil").value
    let col = document.getElementById("col").value
    if (fil && col) {
        initArray(fil,col)
        print(getData(),"tab-mat")
    } else
    alert("El valor de filas y columnas debe ser mayor a cero")
})

let btnZero = document.getElementById("setzero")
btnZero.addEventListener("click", ()=>{
    setZero()
    let data = getData();
    print(data,"mat-zero")
})

function print(data,id){
    const tbody = document.getElementById(id)
    for (let i=0;i<data.length;i++) {
        let row = document.createElement("tr")
        let cell = undefined;
        for (let j=0;j<data[i].length;j++){
            cell = document.createElement("td")
            cell.innerText = data[i][j]
            row.appendChild(cell)
        }
        tbody.appendChild(row)    
    }
    
    
    
}