import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux";
import classes from "./descriptionCourse.module.css"
import Slider from "../UI/slider/slider";
import {academicAPI} from "../../services/AcademicService";

const DescriptionCourse: FC = () => {
    const {selectCourse} = useAppSelector(state => state.courseCard)
    const {data: lectureList} = academicAPI.useFetchLectureQuery(selectCourse.id)
    const {data: seminarList} = academicAPI.useFetchSeminarQuery(selectCourse.id)

    return (
        <div>
            {selectCourse.id ?
                <div className={classes.generalField}>
                    <div className={classes.title}>{selectCourse.name}</div>
                    <div className={classes.contentField}>
                        <div className={classes.description}>{selectCourse.description} </div>
                        <div className={classes.table}>
                            <div className={classes.tableBlock}>
                                <div><b>Лекции / неделя:</b> {selectCourse.hoursLecture}</div>
                                <div><b>Семинары / неделя:</b> {selectCourse.hoursSeminar}</div>
                            </div>
                            <div className={classes.tableBlock}>
                                <div><b>Зачет:</b> {selectCourse.test ? "да": "нет"}</div>
                                <div><b>Экзамен:</b> {selectCourse.exam ? "да": "нет"}</div>
                                <div><b>Оценка в диплом:</b> {selectCourse.estimationInDiploma ? "да": "нет"}</div>
                            </div>
                        </div>
                        <div className={classes.tablePersonBlock}>
                            <div className={classes.tablePerson}>
                                <h2>Лекторы:</h2>
                                {lectureList &&
                                    <Slider data={lectureList}/>
                                }
                            </div>
                            <div className={classes.tablePerson}>
                                <h2>Семинаристы:</h2>
                                {seminarList &&
                                    <Slider data={seminarList}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>выбери курс</div>
            }
        </div>
    );
};

export default DescriptionCourse;