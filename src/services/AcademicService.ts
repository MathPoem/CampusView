import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICourse, ILecture, IPearson, IProgram, ISchool, ISeminar, IUniversity} from "../models/IAcademic";


export const academicAPI = createApi({
    reducerPath: 'academicAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/'}),
    endpoints: build => ({
        fetchUniversity: build.query<IUniversity[], string>({
            query: () => ({
                url: `/university/`,
            })
        }),
        fetchSchool: build.query<ISchool[], number>({
            query: (id?:number) => ({
                url: `/school/`,
                params: {
                    universityId: id
                }
            })
        }),
        fetchProgram: build.query<IProgram[], number>({
            query: (schoolId:number) => ({
                url: `/program/`,
                params: {
                    schoolId: schoolId
                }
            })
        }),
        fetchProgramById: build.query<IProgram, number|undefined|string>({
            query: (programId:number) => ({
                url: `/program/${programId && programId}`,
            })
        }),
        fetchCourse: build.query<ICourse[], number|undefined|string>({
            query: (id:number|undefined|string) => ({
                url: `/course/`,
                params: {
                    programId: id
                }
            })
        }),
        fetchPerson: build.query<IPearson[], number>({
            query: (id:number) => ({
                url: `/person/`,
                params: {
                    departmentId: id
                }
            })
        }),
        fetchPersonById: build.query<IPearson, number>({
            query: (id:number) => ({
                url: `/person/${id}`,
            })
        }),
        fetchLecture: build.query<ILecture[], number>({
            query: (id:number) => ({
                url: `/lecture/`,
                params: {
                    courseId: id
                }
            })
        }),
        fetchSeminar: build.query<ISeminar[], number>({
            query: (id:number) => ({
                url: `/seminar/`,
                params: {
                    courseId: id
                }
            })
        }),
    })
})