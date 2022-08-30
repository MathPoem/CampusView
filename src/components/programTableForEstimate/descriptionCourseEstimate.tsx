import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import classes from "./descriptionCourseEstimate.module.css"
import QuestionForm from "../UI/questionForm/questionForm";
import {estimateSlice} from "../../store/reducers/estimate/estimateReducer";
import SliderLecture from "../../pages/estimate/sliderestimatelecture/sliderLecture";
import SliderSeminar from "../../pages/estimate/sliderestimateseminar/sliderSeminar";
import {authApi, useEstimateMutation, useGetEstimateQuery} from "../../services/authService";
import {EstimateRequest} from "../../services/type";


const DescriptionCourseEstimate: FC = () => {

    const dispatch = useAppDispatch()
    const {selectCourse} = useAppSelector(state => state.courseCard)
    const {lec_1, lec_2, lec_3, lec_4, lec_5, sem_1, sem_2, sem_3, sem_4, sem_5, setCourse} = estimateSlice.actions
    const {estimate: estimateState} = useAppSelector(state => state)
    const [estimate] = useEstimateMutation()
    const {data} = useGetEstimateQuery("")
    let res = data as EstimateRequest[]

    const findEstimate = ():EstimateRequest|boolean|undefined=> {
        if (res) {return res.find((estimate) => {return estimate.course_id === selectCourse.id})}
        return false
    }

    useEffect(()=>{
        dispatch(setCourse(selectCourse.id))}, [selectCourse.id])

    console.log(res, estimateState)

    const sendEstimate = async () => {
        await estimate(estimateState)
        dispatch(authApi.endpoints.getEstimate.initiate("", {forceRefetch:true}))
    }

    const availableBtn = ():boolean => {
        return !!(estimateState.question_lec_1 && estimateState.question_lec_2 && estimateState.question_lec_3 && estimateState.question_lec_4 && estimateState.question_lec_5 &&
            estimateState.question_sem_1 && estimateState.question_sem_2 && estimateState.question_sem_3 && estimateState.question_sem_4 && estimateState.question_sem_5);
        }

    return (
        <div>
            {(selectCourse.id && !findEstimate())?
                <div className={classes.generalField}>
                    <div className={classes.title}>{selectCourse.name}</div>
                    <div className={classes.contentField}>
                        <div className={classes.tablePersonEval}>
                            <div className={classes.tablePerson}>
                                <h2>Твой лектор:</h2>
                                    <SliderLecture/>
                            </div>
                            <div className={classes.evaluate}>
                                <QuestionForm action={(n:number)=>dispatch(lec_1(n))} question={"question 1"}/>
                                <QuestionForm action={(n:number)=>dispatch(lec_2(n))} question={"question 2"}/>
                                <QuestionForm action={(n:number)=>dispatch(lec_3(n))} question={"question 3"}/>
                                <QuestionForm action={(n:number)=>dispatch(lec_4(n))} question={"question 4"}/>
                                <QuestionForm action={(n:number)=>dispatch(lec_5(n))} question={"question 5"}/>
                            </div>
                        </div>
                        <div className={classes.tablePersonEval}>
                            <div className={classes.tablePerson}>
                                <h2>Твой семинарист:</h2>
                                    <SliderSeminar/>
                            </div>
                            <div className={classes.evaluate}>
                                <QuestionForm action={(n:number)=>dispatch(sem_1(n))} question={"question 1"}/>
                                <QuestionForm action={(n:number)=>dispatch(sem_2(n))} question={"question 2"}/>
                                <QuestionForm action={(n:number)=>dispatch(sem_3(n))} question={"question 3"}/>
                                <QuestionForm action={(n:number)=>dispatch(sem_4(n))} question={"question 4"}/>
                                <QuestionForm action={(n:number)=>dispatch(sem_5(n))} question={"question 5"}/>
                            </div>
                        </div>
                        <button disabled={!availableBtn()} className={`${classes.btn} ${availableBtn() && classes.active}`} onClick={sendEstimate}>оценить</button>
                    </div>
                </div>
                :
                data && findEstimate()?
                    <div className={classes.alterTxt}>вы поставили оценку <mark>этому курсу</mark></div>
                    :
                    <div className={classes.alterTxt}>выбери курс чтобы <mark>поставить оценку</mark></div>
            }
        </div>
    );
};

export default DescriptionCourseEstimate;