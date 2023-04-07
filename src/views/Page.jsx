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
        <div className="flex flex-col justify-around items-center w-screen md:h-screen">
            <div className="md:flex border border-pink-400 md:w-4/5 md:h-[60%]">
                <QuestionForm />
                <Questions questions={questions} />
            </div>
        </div>
    )
}
export default Page