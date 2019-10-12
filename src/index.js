module.exports = function zeros(expression) {
  // your solution
  let mult = 1n
  let arr = expression.split('*')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('!!')) {
            for (let j = 1; j <= parseInt(arr[i]); j++) {
                if (parseInt(arr[i]) % 2 == 0) {
                    if (j % 2 == 0) {
                        mult *= BigInt(j)
                    }
                } else if (parseInt( arr[i] ) % 2 != 0) {
                    if (j % 2 !== 0) {
                        mult *= BigInt(j)
                    }
                }

            }
        } else if (arr[i].includes('!')){
            for (let m = 1; m <= parseInt( arr[i] ); m++){
                mult *= BigInt(m)

            }

        }

    }

    let result = mult.toString().split('')

    let arrZeros = []
    for (let n = result.length - 1; n > 0; n--) {
        if (result[n] == 0) {
            arrZeros.push(result[n])
        } else break
    }
    return arrZeros.length
}
