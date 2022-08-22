import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICourse, IProgram, ISchool, IUniversity} from "../models/IAcademic";


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
            query: (id:number) => ({
                url: `/program${id ? `?schoolId=${id}`: ""}/`,
            })
        }),
        fetchCourse: build.query<ICourse[], number|undefined|string>({
            query: (id:number|undefined|string) => ({
                url: `/course${id ? `?programID=${id}`: ""}`,
            })
        }),
        fetchPerson: build.query<IProgram[], number>({
            query: (id:number) => ({
                url: `/person${id ? `?departmentID=${id}`: ""}`,
            })
        }),
        fetchLecture: build.query<IProgram[], number>({
            query: (id:number) => ({
                url: `lecture${id ? `?programID=${id}`: ""}`,
            })
        }),
        fetchSeminar: build.query<IProgram[], number>({
            query: (id:number) => ({
                url: `/seminar${id ? `?programID=${id}`: ""}`,
            })
        }),
    })
})