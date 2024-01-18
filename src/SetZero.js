let data = []

export const initArray = function(fil,col){ 
    for (let i=0;i<fil;i++) {
        data[i] =  []
        for (let j=0;j<col;j++)
            data[i][j] = Math.floor(Math.random()*10);
    }
}

export const getData = function() {
    return data;
}

export const setZero = function(){
    for (let i=0;i<data.length;i++)
        for (let j=0;j<data[i].length;j++)
            if (data[i][j] == 0) {
                setRow(i)
                setCol(j)
            }
    setMinus()
}

function setRow(fil){
    for (let i=0;i<data[fil].length;i++)
        if (data[fil][i] != 0)
            data[fil][i] = -1;
}
function setCol(col){
    for (let j=0;j<data.length;j++)
        if (data[j][col] != 0)
            data[j][col] = -1;
}

function setMinus(){
    for (let i=0;i<data.length;i++)
        for (let j=0;j<data[i].length;j++)
            if (data[i][j] == -1) 
                data[i][j] = 0;
}