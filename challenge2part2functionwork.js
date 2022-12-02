var A, B, C
var X, Y, Z
A = 1;
B = 2;
C = 3;
X = 4;
Y = 5;
Z = 6;
var list = [
  B, Z,
  A, X,
  B, Z,
  B, Z,
  C, Z]

sumList = []
// if answer is tie, then add 3 + whatever number the elf threw
// if the answer is win, then add 6 + whatever number beats the elf
// if the answer is loss, then add 0 + whatever number loses to the elf
for (let i = 0; i < list.length ;i++) {
    if (list[i] === 5) {
        // Tie
        console.log(i)
        sumList.push(3 + list[i - 1])
    }else if(list[i] === 4){
        // Lose
        if(list[i - 1] == 1){
            //lose to rock
            sumList.push(0 + 3)
        }else if (list[i - 1] ==2){
            //lose to paper
            sumList.push(0 + 1)
        }else if(list[i - 1] ==3){
            //lose to scissors
            sumList.push(0 + 2)
        }
    }else if(list[i] == 6) {
        // Win
        if(list[i - 1] ==1){
            //win to rock
            sumList.push(6 + 2)
        }else if (list[i - 1] == 2){
            //win to paper
            sumList.push(6 + 3)
        }else if(list[i - 1] ==3){
            //win to scissors
            sumList.push(6 + 1)
        }
    }
}
console.log(sumList)