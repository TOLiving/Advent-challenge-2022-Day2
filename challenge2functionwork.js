var A, B, C, X, Y, Z;
// Rock
A = 1;
X = 1;
// Paper
B = 2
Y = 2
// Scissors
C = 3
Z = 3
var list = [
B, Z,
A, X,
B, Z,
B, Z,
C, Z,
B, Z,
A, Z,
B, X,
C, Y,
C, Y,
A, X,
A, X,
A, Z,
B, Z,
A, X,]

talliedPoints = []
function gameSort(array) {
    for(let i = 0; i < array.length; i++){
        if (i % 2 == 0){
            if (array[i] === array[i + 1]){
                // Tie
                talliedPoints.push(3 + array[i + 1])
            }else if ((array[i + 1] == 1) &&  (array[i] == 2)){
                // The format for these will be (me vs opponent)
                // Rock vs Paper
                talliedPoints.push(0 + array[i + 1])
            }else if ((array[i + 1] == 2) &&  (array[i] == 1)){
                // Paper vs rock
                talliedPoints.push(6 + array[i + 1])
            }else if ((array[i + 1] == 1) &&  (array[i] == 3)){
                // Rock vs scissors
                talliedPoints.push(6 + array[i + 1])
            }else if ((array[i + 1] == 3) &&  (array[i] == 1)){
                // Scissors vs rock
                talliedPoints.push(0 + array[i + 1])
            }else if ((array[i + 1] == 3) &&  (array[i] == 2)){
                // Scissors vs Paper
                talliedPoints.push(6 + array[i + 1])
            }else if ((array[i + 1] == 2) &&  (array[i] == 3)){
                // Paper vs scissors
                talliedPoints.push(0 + array[i + 1])
            }
        }
    }
}
gameSort(list)
const sum = talliedPoints.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(sum)

// for i in range(0, 12):
//         col_sums.append(mlist1[i] + mlist2[i] + mlist3[i] + mlist4[i])