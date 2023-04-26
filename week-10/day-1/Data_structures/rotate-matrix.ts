function rotateMatrix(matrix: number[][]) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let columnIndex = rowIndex + 1; columnIndex < matrix.length;
            columnIndex++) {
            [
                matrix[columnIndex][rowIndex],
                matrix[rowIndex][columnIndex],
            ] = [
                    matrix[rowIndex][columnIndex],
                    matrix[columnIndex][rowIndex],
                ];
        }
    }
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < matrix.length / 2;
            columnIndex++) {
            [
                matrix[rowIndex][matrix.length - columnIndex - 1],
                matrix[rowIndex][columnIndex],
            ] = [
                    matrix[rowIndex][columnIndex],
                    matrix[rowIndex][matrix.length - columnIndex - 1],
                ];
        }
    }
}

const myMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

rotateMatrix(myMatrix);
console.log(myMatrix);