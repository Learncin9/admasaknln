interface QuestionAtom {
    type: "q"
    question: string
    result: string
}

interface OptionAtom {
    type: "o"
    question: string
    option: number,
    content: string
}

interface RangeAtom {
    type: "r"
    question: string,
    range: number
}

let result = Array<QuestionAtom | OptionAtom | RangeAtom>()

export const Set = (data: QuestionAtom | OptionAtom | RangeAtom) => {
    const alr_v = result.filter((item) => (item.type === data.type && item.question === data.question))

    if (alr_v.length === 0) {
        // its new thing
        result.push(data)
    } else {
        // already had that value
        // and it only one

        result = result.map((item) => {
            if (!(item.type === data.type && item.question === data.question)) return item

            // if found that "only one value"
            return data
        })
    }
}

export const Get = () => result
