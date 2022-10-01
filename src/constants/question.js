export const GenerateQuestion = (process) => {
    let num1, num2, answer, fakeAnswer1, fakeAnswer2, operator = "", questionPoint
    if (process === "topla") {
        operator = "+"
        questionPoint = 2
        num1 = Math.ceil(Math.random() * 49)
        num2 = Math.ceil(Math.random() * 50)
        answer = num1 + num2
        fakeAnswer1 = answer - Math.ceil(Math.random() * 5)
        fakeAnswer2 = answer + Math.ceil(Math.random() * 5)
    }
    else if (process === "cikar") {
        operator = "-"
        questionPoint = 3
        num1 = Math.ceil(Math.random() * 50)
        num2 = Math.ceil(Math.random() * 49)
        let a = 0
        if (num1 < num2) {
            a = num1
            num1 = num2
            num2 = a
        }
        answer = num1 - num2
        fakeAnswer1 = Math.abs(answer - Math.ceil(Math.random() * 5))
        fakeAnswer2 = Math.abs(answer + Math.ceil(Math.random() * 5))
    }
    else if (process === "carp") {
        operator = "x"
        questionPoint = 4
        num1 = Math.ceil(Math.random() * 9)
        num2 = Math.ceil(Math.random() * 10)
        answer = num1 * num2
        fakeAnswer1 = Math.abs(answer - Math.ceil(Math.random() * 5))
        fakeAnswer2 = Math.abs(answer + Math.ceil(Math.random() * 5))
    }
    else if (process === "bol") {
        operator = "÷"
        questionPoint = 5
        const division = () => {
            let num1 = Math.ceil(Math.random() * 50)
            let num2 = Math.ceil(Math.random() * 9)
            let result = 0
            if (num1 % num2 !== 0) {
                return division()
            }
            else {
                result = { num1, num2 }
            }
            return result
        }
        let res = division()
        num1 = res.num1
        num2 = res.num2
        answer = res.num1 / res.num2
        fakeAnswer1 = Math.abs(answer - Math.ceil(Math.random() * 5))
        fakeAnswer2 = Math.abs(answer + Math.ceil(Math.random() * 5))
    }

    let result = { num1, num2, answer, fakeAnswer1, fakeAnswer2, operator, questionPoint }
    return result
}
