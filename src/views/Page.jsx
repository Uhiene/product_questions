import { useEffect} from "react"
import QuestionForm from "../component/QuestionForm"
import Questions from "../component/Questions"
import { getQuestions } from "../services/firebase"
import {  useGlobalState } from "../store"

const Page = () => {
    const [questions] = useGlobalState("questions")
    useEffect(async () => {
        await getQuestions()
    }, [])

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex border border-pink-400 w-4/5 h-[60%]">
                <QuestionForm />
                <Questions questions={questions} />
            </div>
        </div>
    )
}
export default Page