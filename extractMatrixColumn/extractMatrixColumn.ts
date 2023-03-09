export function extractMatrixColumn(matrix: number[][], column: number): number[] {

    const matrixColumn: number[] = []; //Create array


    matrix.forEach((row) => matrixColumn.push(row[column])); //iterate the array and push the column value you want.

    return matrixColumn; //Then simply return this array.
}  


console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));