import React, {FC, useState} from 'react';
import classes from "./slider.module.css"
import {ILecture, ISeminar} from "../../../models/IAcademic";
import Window from "./window";

interface SliderProps {
    data?: ILecture[] | ISeminar[]
}

const Slider: FC<SliderProps> = ({ data}) => {

    const [selectWindowId, setWindowId] = useState(1)
    let countWindows = 0
    if (data) {
        countWindows = data.length
    }
    const rightInd = selectWindowId % countWindows + 1
    const leftInd = (selectWindowId + countWindows - 2) % countWindows + 1

    const clickRight = () => {
        if (selectWindowId === countWindows) {
            setWindowId(1)
        } else {
            setWindowId(selectWindowId + 1)
        }
    }
    const clickLeft = () => {
        if (selectWindowId === 1) {
            setWindowId(countWindows)
        } else {
            setWindowId(selectWindowId - 1)
        }
    }

    return (
        <div className={classes.slider}>
            <button onClick={clickLeft} className={classes.buttonLeft}/>
            <div className={classes.contentField}>
                <Window
                    personId={data ? data[leftInd-1].pearsonID: 0}
                    edge={true}
                />
                <Window
                    personId={data ? data[selectWindowId-1].pearsonID : 0}
                    edge={false}
                />
                <Window
                    personId={data ? data[rightInd-1].pearsonID: 0}
                    edge={true}
                />
            </div>
            <button onClick={clickRight} className={classes.buttonRight}/>
        </div>
    );
};

export default Slider;