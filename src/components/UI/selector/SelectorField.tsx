import React, {FC} from 'react';
import classes from "./Selector.module.css"
import Selector from "./Selector";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectSlice} from "../../../store/reducers/selector/selctorReducer";
import {academicAPI} from "../../../services/AcademicService";


const SelectorField: FC = () => {
    const {university, program, school} = useAppSelector(state => state.selector)
    const dispatch = useAppDispatch()
    const {openUniversity, openSchool, openProgram, setUniversity, setSchool, setValueUniversity, setValueSchool, setValueProgram} = selectSlice.actions

    const {data:universityList} = academicAPI.useFetchUniversityQuery("")
    const {data:schoolList} = academicAPI.useFetchSchoolQuery(university.id)
    const {data:programList} = academicAPI.useFetchProgramQuery(school.id)


    const universityCallback = (id:number) => {
        dispatch(setUniversity(id))
    }
    const schoolCallback = (id:number) => {
        dispatch(setSchool(id))
    }
    const programCallback = (id:number) => {
    }

    return (
        <div className={classes.selectorField}>
            <Selector placeholder={"university"}
                      open={university.isOpen}
                      setOpen={(state:boolean) => dispatch(openUniversity(state))}
                      callback={universityCallback}
                      slice={universityList}
                      active={!university.isActive}
                      value={university.value}
                      setValue={(value:string) => dispatch(setValueUniversity(value))}
            />
            <Selector placeholder={"school"}
                      open={school.isOpen}
                      setOpen={(state:boolean) => dispatch(openSchool(state))}
                      callback={schoolCallback}
                      slice={schoolList}
                      active={!school.isActive}
                      value={school.value}
                      setValue={(value:string) => dispatch(setValueSchool(value))}
            />
            <Selector placeholder={"program"}
                      open={program.isOpen}
                      setOpen={(state:boolean) => dispatch(openProgram(state))}
                      callback={programCallback}
                      slice={programList}
                      active={!program.isActive}
                      value={program.value}
                      setValue={(value:string) => dispatch(setValueProgram(value))}
            />
        </div>
    );
};

export default SelectorField