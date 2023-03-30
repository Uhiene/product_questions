import { useEffect, useState } from "react"
import QuestionForm from "../component/QuestionForm"
import { QuestionModal } from "../component/QuestionModal"
import Questions from "../component/Questions"
import { getQuestions } from "../services/firebase"
import { setGlobalState, useGlobalState } from "../store"

const Page = () => {
    const [questions] = useGlobalState("questions")
    useEffect(async () => {
        await getQuestions()
    }, [])

    return (
        <div class="flex flex-col items-center">
            <QuestionForm />
            <Questions questions={questions} />
            <QuestionModal />

        </div>
    )
}
export default Page