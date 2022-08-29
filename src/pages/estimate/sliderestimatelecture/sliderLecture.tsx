import React, {FC, useEffect, useState} from 'react';
import classes from "./sliderLecture.module.css"
import {ILecture, ISeminar} from "../../../models/IAcademic";
import Window from "./window";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {estimateSlice} from "../../../store/reducers/estimate/estimateReducer";
import {academicAPI} from "../../../services/AcademicService";

interface SliderProps {
    data?: ILecture[] | ISeminar[]
}

const SliderLecture: FC<SliderProps> = () => {
    const dispatch = useAppDispatch()
    const {setLecture} = estimateSlice.actions
    const {estimate} = useAppSelector(state => state)

    const {selectCourse} = useAppSelector(state => state.courseCard)
    const {data: lectureList} = academicAPI.useFetchLectureQuery(selectCourse.id)

    const [selectWindowId, setWindowId] = useState(1)


    let rightInd = 1
    let leftInd = 1
    let countWindows = 0

    if (lectureList) {
        countWindows = lectureList.length
        rightInd = selectWindowId % countWindows + 1
        leftInd = (selectWindowId + countWindows - 2) % countWindows + 1
    }
    useEffect(()=>{
        if (lectureList) {dispatch(setLecture(lectureList[0].pearsonID))}
        }, [lectureList])

    useEffect(()=>{console.log(estimate)}, [estimate])

    const clickRight = () => {
        if (selectWindowId === countWindows) {
            setWindowId(1)
            if (lectureList) dispatch(setLecture(lectureList[0].pearsonID));
        } else {
            setWindowId(selectWindowId + 1)
            if (lectureList) dispatch(setLecture(lectureList[selectWindowId].pearsonID));
        }

    }
    const clickLeft = () => {
        if (selectWindowId === 1) {
            setWindowId(countWindows)
            if (lectureList) dispatch(setLecture(lectureList[countWindows-1].pearsonID));
        } else {
            setWindowId(selectWindowId - 1)
            if (lectureList) dispatch(setLecture(lectureList[selectWindowId-2].pearsonID));
        }
    }


    return (
        <div className={classes.slider}>
            <button onClick={clickLeft} className={classes.buttonLeft}/>
            <div className={classes.contentField}>
                {lectureList &&
                    <>
                <Window
                    personId={lectureList[leftInd-1].pearsonID}
                    edge={true}
                />
                <Window
                    personId={lectureList[selectWindowId-1].pearsonID}
                    edge={false}
                />
                <Window
                    personId={lectureList[rightInd-1].pearsonID}
                    edge={true}
                />
                </>
                }
            </div>
            <button onClick={clickRight} className={classes.buttonRight}/>
        </div>
    );
};

export default SliderLecture;