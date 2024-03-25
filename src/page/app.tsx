import { doc, onSnapshot } from "firebase/firestore";
import { DB } from "../firebase/init";

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Get } from "../store";
import { push } from "../firebase/push";

import Question from "../components/question";
import Option from "../components/option";

const BOMB = {
    collection_name: "bomb",
    document_name: "bomb"
}

interface BOMB_DOCUMENT_STRUCT {
    bomb: boolean
    end: boolean
}

const App = () => {
    const navi = useNavigate()
    const [show, set_show] = useState(false)

    useEffect(() => {    
        onSnapshot(doc(DB, BOMB.collection_name, BOMB.document_name), (doc) => {
            const data = (doc.data() as BOMB_DOCUMENT_STRUCT)

            if (data.end) {
                // on end
                navi("/logo")
            } else if (data.bomb) {
                // on bomb
                set_show(data.bomb)
            }
        })

        setInterval(() => {
            console.log(Get())
        }, 1000)
    }, [])

    return (
        <>
            <Question quest="질문 1" />
            <Question quest="질문 2" />

            { show ? 
            <>
                <p>제일 먼저 이 설문지는 학생 여러분의 말 못할 불편할 진실을 말할 수 있는 기회를 드리기 위해, 익명으로 진행되며 일종의 퍼포먼스와 익명성을 보장하기 위해 학생회와 방송부에겐 여러분들과 다른 설문지 페이지로 보여진다는 것을 밝힙니다. 물론, 설문지가 완전히 퍼졌을 땐 학생회와 방송부도 저희에게 속았음을 깨닫겠죠.</p>
                <p>저희 동아리 새로고침은 이름의미 그 뜻대로, 학교 안 이전 고전 모습들을 '기술을 통해 학생들이 원하는 새로운 모습으로 의미있게 변화시키겠다'는 목적이 있습니다. 그래서 새로운 커뮤니티를 창출하기 위해, 학교의 문제점이 되는 부분들에 대한 의견을 들어보는 것으로 저희가 해나갈 활동을 정하려 합니다.</p>
                <p>지금 여러분이 해주시는 설문조사 결과에 따라, 저희가 1년동안 학교와 활동을 위해 구현할 결과물이 달라지게 됩니다. 단체에 대한 애사심이나 권위, 개인적인 미래에 대한 생각만으로 진행하는 일이 아닌 학생 여러분에 대한 권리와 의미있는 미래를 보장하기 위해 진심으로 이행하는 일이니, 되도록 설문에 많은 응답이 되돌아오길 바랍니다. 설문으로 결정된 결과는 동아리 계정인 @re.c_oder에 올리겠습니다.</p>

                <Option quest="우리 학교는 학생과 학교의 소통이 잘 되는 학교라 생각하시나요?" options={["맞다", "아니다"]} />
                <Option quest="학교에 소통이나 건의에 관해서 편리한 점이 있다고 생각하시나요?" options={["완전 편리하다", "그냥 그렇다", "애초에 그런 점이 있는지 모르겠다", "불편하다", "완전 불편하다"]} />
                <Option quest="학교의 대표 단체인 학생회와 방송부가 앞선 두 문제를 해결하기 위해 잘 하고 있다고 생각하시나요?" options={["잘 하고 있다", "관심없다", "사실 뭔 일 하는지도 모르겠다", "불만이 많다"]} />
                <Option quest="학생회나 방송부, 다른 단체들의 대체 되어야 할 점이 있다면 뭐가 가장 우선이라고 생각하시나요?"
                 options={[
                    "알림이나 건의가 바로바로 되지 않는 소통 문제",
                     "면접이 의미있는지 모르겠는 인맥 채용문제",
                      "무슨 일을 하고 있는지 알기 어려운 투명성 문제",
                       "의미있는 일이 진행되고 있는 건지 와닿지 않는 활동의 매력성",
                       "단체가 만들어지고 나면 잊혀지는 학생들과의 약속들"
                    ]} />

                <Option quest="학교에 의미 있는 활동들이 많다고 생각하시나요?" options={["난 학교의 전반적인 활동들이 매력적이라고 생각한다.", "생기부 채우려고 하는 일들이 많지, 실제로 마음에 와닿는 색다른 활동은 별로 없는 것 같다."]} />

                <Option quest="만약 다시 고등학교 입학을 고민한다면 지산고에 오실 생각이신가요?" 
                options={[
                    "난 무조건 다시 지산고를 오겠다.",
                     "한 번 쯤은 더 고민해보겠다.",
                     "다시 지산고를 오겠다고 장담은 못하겠다.",
                     "다른 학교를 가고 싶다."
                    ]} />
            </>
             : null }

            <button type="button" className="btn btn-primary" onClick={() => { push({ data: Get() }) }}>제출</button>
        </>
    )
}

export default App
