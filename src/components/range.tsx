import { ranstr } from "./option"
import { Set } from "../store"

interface RangeProps {
  quest: string
}

const Range = ({ quest }: RangeProps) => {
  const id_v = ranstr(10)

  return (
    <div>
      <label htmlFor={id_v} className="form-label quest">{quest}</label>
      <input type="range" className="form-range" min="0" max="5" id={id_v} onInput={(e) => {
        const n = parseInt(e.currentTarget.value)

        Set({
          type: "r",
          question: quest,
          range: n
        })
      }}></input>
    </div>
  )
}

export default Range
