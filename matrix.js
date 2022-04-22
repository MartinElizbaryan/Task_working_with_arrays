const {log,table,count} = console

const rotate = (matrix, deg) => {
    const r = calculateRotationNumber(deg)

    return Array.from({ length: r }).reduce((a, e) => {
        return rotate90Degree(a)
    }, matrix)
}



const rotateWithoutDiagonal = (matrix, deg) => {
    const r = calculateRotationNumber(deg)

    return Array.from({ length: r }).reduce((a, e) => {
        return rotate90DegreeWithoutDiagonal(a)
    }, matrix)
}

const rotate90DegreeWithoutDiagonal = (matrix) => {
    const result = []
    const length = matrix.length

    matrix.forEach((row, rowIndex) => {
        const temp = []
        row.forEach((column, columnIndex) => {
            if(rowIndex === columnIndex || rowIndex+columnIndex === matrix.length-1){
                temp.push(column)
            }else{
                temp.push(matrix[length - columnIndex - 1][rowIndex])
            }
        })
        result.push(temp)
    })

    return result
}

const rotate90Degree = (matrix) => {
    const result = []
    const length = matrix.length

    for(let i=matrix.length-1; i>=0; i--){
        for(let j=0; j<matrix[i].length; j++){
            if(!result[j]){
                result.push([matrix[i][j]])
            }else{
                result[j].push(matrix[i][j])
            }
        }
    }

    return result
}

const calculateRotationNumber = (deg) => {
    if (deg % 90 !== 0) {
        throw new RangeError('Incorrect value')
    }
    deg = (deg % 360) / 90;
    deg += deg < 0 ? 4 : 0;

    return deg
}




/*

00 01 02 03
10 11 12 13
20 21 22 23

20 10 00
21 11 01
22 12 02
23 13 03

*/


const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

table(rotateWithoutDiagonal(matrix, 90))


// table(matrix)
// table(rotate(matrix, 90))

const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
];
// table(matrix1)
// table(rotate(matrix1, 90))

const matrix2 = [
    [1, 2, 3],
    [4, 5, []],
    [7, 8, 9],
    [null, 11, 12],
    [13, 14, NaN],
];
// table(matrix2)
// table(rotate(matrix2, 90))