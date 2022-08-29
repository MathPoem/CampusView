import React, {FC, useEffect, useState} from 'react';
import classes from "./sliderSeminar.module.css"
import {ILecture, ISeminar} from "../../../models/IAcademic";
import Window from "./window";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {estimateSlice} from "../../../store/reducers/estimate/estimateReducer";
import {academicAPI} from "../../../services/AcademicService";

interface SliderProps {
    data?: ILecture[] | ISeminar[]
}

const SliderSeminar: FC<SliderProps> = () => {
    const dispatch = useAppDispatch()
    const {setSeminar} = estimateSlice.actions
    const {estimate} = useAppSelector(state => state)

    const {selectCourse} = useAppSelector(state => state.courseCard)
    const {data: seminarList} = academicAPI.useFetchSeminarQuery(selectCourse.id)

    const [selectWindowId, setWindowId] = useState(1)


    let rightInd = 1
    let leftInd = 1
    let countWindows = 0

    if (seminarList) {
        countWindows = seminarList.length
        rightInd = selectWindowId % countWindows + 1
        leftInd = (selectWindowId + countWindows - 2) % countWindows + 1
    }
    useEffect(()=>{
        if (seminarList) {dispatch(setSeminar(seminarList[0].pearsonID))}
        }, [seminarList])

    useEffect(()=>{console.log(estimate)}, [estimate])

    const clickRight = () => {
        if (selectWindowId === countWindows) {
            setWindowId(1)
            if (seminarList) dispatch(setSeminar(seminarList[0].pearsonID));
        } else {
            setWindowId(selectWindowId + 1)
            if (seminarList) dispatch(setSeminar(seminarList[selectWindowId].pearsonID));
        }

    }
    const clickLeft = () => {
        if (selectWindowId === 1) {
            setWindowId(countWindows)
            if (seminarList) dispatch(setSeminar(seminarList[countWindows-1].pearsonID));
        } else {
            setWindowId(selectWindowId - 1)
            if (seminarList) dispatch(setSeminar(seminarList[selectWindowId-2].pearsonID));
        }
    }


    return (
        <div className={classes.slider}>
            <button onClick={clickLeft} className={classes.buttonLeft}/>
            <div className={classes.contentField}>
                {seminarList &&
                    <>
                <Window
                    personId={seminarList[leftInd-1].pearsonID}
                    edge={true}
                />
                <Window
                    personId={seminarList[selectWindowId-1].pearsonID}
                    edge={false}
                />
                <Window
                    personId={seminarList[rightInd-1].pearsonID}
                    edge={true}
                />
                </>
                }
            </div>
            <button onClick={clickRight} className={classes.buttonRight}/>
        </div>
    );
};

export default SliderSeminar;