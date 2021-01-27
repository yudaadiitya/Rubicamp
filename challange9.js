function spiral(param1) {
    var matriks = [];
    var count = 0;
        for (let i = 0; i < param1; i++) {
            matriks[i] = []; 
            for (let j = 0; j < param1; j++) {
            matriks[i][j] = count;
            count++;  
        }
    } 
    var angka = param1 * param1;
    var minCol = 0;
    var maxCol = param1 - 1;
    var minRow = 0;
    var maxRow = param1 - 1;
    var result = [];

    while (result.length < angka) {
        for (let x = minRow; x <= maxRow; x++) {
            result.push(matriks[minCol][x]);
        }
        minCol++;
        for (let y = minCol; y <= maxCol; y++) {
            result.push(matriks[y][maxRow]);
         }
        maxRow--;
        for (let x = maxRow; x >= minRow; x--) {
            result.push(matriks[maxCol][x]);
        }
        maxCol--;
        for (let y = maxCol; y >= minCol; y--) {
            result.push(matriks[y][minRow]);
        }    
        minRow++;
    }
    console.log(result);
} 

spiral(5);
spiral(6);
spiral(7);