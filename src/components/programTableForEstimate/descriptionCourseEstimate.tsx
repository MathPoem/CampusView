import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import classes from "./descriptionCourseEstimate.module.css"
import QuestionForm from "../UI/questionForm/questionForm";
import {estimateSlice} from "../../store/reducers/estimate/estimateReducer";
import SliderLecture from "../../pages/estimate/sliderestimatelecture/sliderLecture";
import SliderSeminar from "../../pages/estimate/sliderestimateseminar/sliderSeminar";


const DescriptionCourseEstimate: FC = () => {

    const dispatch = useAppDispatch()
    const {selectCourse} = useAppSelector(state => state.courseCard)
    // const {data: lectureList} = academicAPI.useFetchLectureQuery(selectCourse.id)
    // const {data: seminarList} = academicAPI.useFetchSeminarQuery(selectCourse.id)
    const {lec_1, lec_2, lec_3, lec_4, lec_5, sem_1, sem_2, sem_3, sem_4, sem_5} = estimateSlice.actions


    return (
        <div>
            {selectCourse.id ?
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
                        <button className={classes.btn}>оценить</button>
                    </div>
                </div>
                :
                <div>выбери курс чтобы поставить оценку</div>
            }
        </div>
    );
};

export default DescriptionCourseEstimate;