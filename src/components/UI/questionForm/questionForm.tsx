import React, {FC, useState} from 'react';
import classes from "./questionForm.module.css"


interface questionFormProps {
    question: string
    action: (n:number) => void
}

const QuestionForm:FC<questionFormProps> = ({question, action}) => {
    const [point_1, setPoint_1] = useState<boolean>(false)
    const [point_2, setPoint_2] = useState<boolean>(false)
    const [point_3, setPoint_3] = useState<boolean>(false)
    const [point_4, setPoint_4] = useState<boolean>(false)
    const [point_5, setPoint_5] = useState<boolean>(false)
    const click_1 = () => {
        setPoint_1(true)
        setPoint_2(false)
        setPoint_3(false)
        setPoint_4(false)
        setPoint_5(false)
        action(1)
    }
    const click_2 = () => {
        setPoint_1(true)
        setPoint_2(true)
        setPoint_3(false)
        setPoint_4(false)
        setPoint_5(false)
        action(2)
    }
    const click_3 = () => {
        setPoint_1(true)
        setPoint_2(true)
        setPoint_3(true)
        setPoint_4(false)
        setPoint_5(false)
        action(3)
    }
    const click_4 = () => {
        setPoint_1(true)
        setPoint_2(true)
        setPoint_3(true)
        setPoint_4(true)
        setPoint_5(false)
        action(4)
    }
    const click_5 = () => {
        setPoint_1(true)
        setPoint_2(true)
        setPoint_3(true)
        setPoint_4(true)
        setPoint_5(true)
        action(5)
    }
    return (
        <div className={classes.questionForm}>
            <div>{question}</div>
            <div className={classes.evaluateField}>
                <div className={`${classes.evaluatePoint} ${point_1 && classes.active}`} onClick={click_1}></div>
                <div className={`${classes.evaluatePoint} ${point_2 && classes.active}`} onClick={click_2}></div>
                <div className={`${classes.evaluatePoint} ${point_3 && classes.active}`} onClick={click_3}></div>
                <div className={`${classes.evaluatePoint} ${point_4 && classes.active}`} onClick={click_4}></div>
                <div className={`${classes.evaluatePoint} ${point_5 && classes.active}`} onClick={click_5}></div>
            </div>
        </div>
    );
};

export default QuestionForm;