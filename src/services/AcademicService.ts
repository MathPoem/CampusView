import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProgram, ISchool, IUniversity} from "../models/IAcademic";


export const academicAPI = createApi({
    reducerPath: 'academicAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    endpoints: build => ({
        fetchUniversity: build.query<IUniversity[], string>({
            query: () => ({
                url: `/university`
            })
        }),
        fetchSchool: build.query<ISchool[], number>({
            query: (id:number) => ({
                url: `/school${id}`,
            })
        }),
        fetchProgram: build.query<IProgram[], number>({
            query: (id:number) => ({
                url: `/program${id}`,
            })
        }),
    })
})