import {createApi, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/dist/query/react";
import {registerSlice} from "../store/reducers/register/registerReducer";
import {authSlice} from "../store/reducers/auth/authReducer";

export interface registerForm {
    username: string
    email: string
    password: string
    univ: number
    program: number
}

interface ResponseRegister {
    message: string
}

export interface LoginResponse {
    id: number
    username: string
    email: string
    program: number
    university: number
    token: string
    confirmed: boolean
}

export interface LoginRequest {
    username: string
    password: string
}


export const userAPI = createApi({
        reducerPath: 'userAPI',
        baseQuery: fetchBaseQuery({
            baseUrl: 'http://localhost:8000',
            credentials: "include",
        }),
        endpoints: builder => ({
            signUp: builder.mutation<ResponseRegister, registerForm>({
                async queryFn(user, {getState, dispatch}, extraOptions, fetchWithBQ) {
                    const {setStatus} = registerSlice.actions
                    const result = await fetchWithBQ({
                        url: '/auth/sign-up',
                        method: 'POST',
                        body: user,
                    });
                    if (result.error) {
                        return  { error: result.error as FetchBaseQueryError};
                    }
                    dispatch(setStatus(true))
                    const data = result.data as ResponseRegister;

                    return {data};
                },
            }),
            signIn: builder.mutation<LoginResponse, LoginRequest>({
                async queryFn(user, {getState, dispatch}, extraOptions, fetchWithBQ) {
                    const {setCredentials} = authSlice.actions
                    const result = await fetchWithBQ({
                        url: '/auth/sign-in',
                        method: 'POST',
                        body: user,
                    });
                    if (result.error) {
                        return  { error: result.error as FetchBaseQueryError};
                    }

                    dispatch(setCredentials(result.data as LoginResponse))
                    const data = result.data as LoginResponse;

                    localStorage.setItem("id", data.id.toString())
                    localStorage.setItem("username", data.username)
                    localStorage.setItem("email", data.email)
                    localStorage.setItem("program", data.program.toString())
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("university", data.university.toString())
                    localStorage.setItem("confirmed", `${data.confirmed}`)

                    return {data};
                },
            }),
        }),
    }
)



export const {useSignUpMutation, useSignInMutation} = userAPI
