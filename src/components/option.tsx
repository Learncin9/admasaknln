import { Set } from "../store"

export function ranstr(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}


interface OptionProps {
    quest: string,
    options: Array<string>
}

const Option = ({ quest, options }: OptionProps) => {
    const r = ranstr(10)
    
    return (
        <>
            <h3 className="quest">{quest}</h3>
            {
                options.map((item, index) => {
                    const option_id = ranstr(10)

                    return (
                        <div className="form-check" onClick={() => {
                            Set({
                                type: "o",
                                option: index,
                                content: item,
                                question: quest
                            })
                        }}>
                            <input className="form-check-input" type="radio" id={ option_id } name={r}/>
                            <label className="form-check-label" htmlFor={ option_id }>
                                {item}
                            </label>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Option
