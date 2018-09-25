function capitalizeName(name) {
    let capName = '';
    for (let r in name) {
        if (r == 0) {
            capName += name[r].toUpperCase()
        } else {
            capName += name[r].toLowerCase()
        }
    }
    return capName
}

const myName = capitalizeName('pARKER')
console.log(myName)

function tipCalc(bill) {
    let tip = 0.2;
    let total = bill * tip + bill;
    return total
}
const totalBill = tipCalc(22.24)
console.log(totalBill.toFixed(2))