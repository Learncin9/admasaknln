import { Set } from "../store"

interface QuestionProps {
    quest: string
}

const Question = ({ quest }: QuestionProps) => {
    return (
        <>
            <h3 className="quest">{quest}</h3>
            <input type="text" className="form-control" placeholder="..." onInput={(e) => {
                Set({
                    type: "q",
                    question: quest,
                    result: e.currentTarget.value
                })
            }}></input>
        </>
    )
}

export default Question
