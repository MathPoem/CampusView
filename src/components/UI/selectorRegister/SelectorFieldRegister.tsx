import React, {FC} from 'react';
import classes from "./Selector.module.css"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {academicAPI} from "../../../services/AcademicService";
import {selectRegisterSlice} from "../../../store/reducers/selectorRegister/selctorRegisterReducer";
import {registerSlice} from "../../../store/reducers/register/registerReducer";
import SelectorRegister from "./SelectorRegister";


const SelectorFieldRegister: FC = () => {
    const {university, program, school} = useAppSelector(state => state.selectorRegister)
    const dispatch = useAppDispatch()
    const {openUniversity, openSchool, openProgram, setUniversity, setSchool, setProgram,setValueUniversity, setValueSchool, setValueProgram} = selectRegisterSlice.actions
    const {setUniversity: setUniversityUser, setProgram: setProgramUser} = registerSlice.actions

    const {data:universityList} = academicAPI.useFetchUniversityQuery("")
    const {data:schoolList} = academicAPI.useFetchSchoolQuery(university.id)
    const {data:programList} = academicAPI.useFetchProgramQuery(school.id)

    const universityCallback = (id:number) => {
        dispatch(setUniversity(id))
        dispatch(setUniversityUser(id))
    }
    const schoolCallback = (id:number) => {
        dispatch(setSchool(id))
    }
    const programCallback = (id:number) => {
        dispatch(setProgram(id))
        dispatch(setProgramUser(id))
    }

    return (
        <div className={classes.selectorField}>
            <SelectorRegister placeholder={"university"}
                      open={university.isOpen}
                      setOpen={(state:boolean) => dispatch(openUniversity(state))}
                      callback={universityCallback}
                      slice={universityList}
                      active={!university.isActive}
                      value={university.value}
                      setValue={(value:string) => dispatch(setValueUniversity(value))}
            />
            <SelectorRegister placeholder={"school"}
                      open={school.isOpen}
                      setOpen={(state:boolean) => dispatch(openSchool(state))}
                      callback={schoolCallback}
                      slice={schoolList}
                      active={!school.isActive}
                      value={school.value}
                      setValue={(value:string) => dispatch(setValueSchool(value))}
            />
            <SelectorRegister placeholder={"program"}
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

export default SelectorFieldRegister