import {createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryMeta} from '@reduxjs/toolkit/query/react'
import {RootState} from '../store/reducers/rootReducer'
import {FetchBaseQueryError} from "@reduxjs/toolkit/dist/query/react";
import {activate, logout, setToken} from "../store/reducers/auth/authReducer";
import {ActivateRequest, EstimateRequest, EstimateResponse, LogoutRequest, RefreshResponse} from "./type";
import {BaseQueryApi, QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {MaybePromise} from "@reduxjs/toolkit/dist/query/tsHelpers";


interface PropsFn {
    queryApi: BaseQueryApi
    fetchFn: (arg: (string | FetchArgs), headers?:Headers) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>
}

const logoutFn = async ({queryApi, fetchFn}:PropsFn) => {
        const {id, email} = (queryApi.getState() as RootState).auth
        const req:LogoutRequest = {id, email}
        const result = await fetchFn({
            url: "/auth/logout",
            method: "POST",
            body: req
        })
        if (result.error) return {error: result.error as FetchBaseQueryError}
        localStorage.setItem("id", "")
        localStorage.setItem("username", "")
        localStorage.setItem("email", "")
        localStorage.setItem("program", "")
        localStorage.setItem("token", "")
        localStorage.setItem("university", "")
        localStorage.setItem("confirmed", "false")
        queryApi.dispatch(logout())
        return {data: result.data as {message: string}}
}

const refreshFn = async ({queryApi, fetchFn}:PropsFn) => {
    const refresh = await fetchFn({
        url: "/auth/refresh",
        method: "POST",
    })
    if (refresh.error) {
        return {error: refresh.error as FetchBaseQueryError}
    }
    const data = refresh.data as RefreshResponse
    localStorage.setItem("token", data.AccessToken)
    queryApi.dispatch(setToken(data.AccessToken))
    return {data: data}
}

const estimateFn = async (arg:EstimateRequest, {queryApi, fetchFn}:PropsFn, ) => {
    const result = await fetchFn({
        url: "/user/estimate",
        method: "POST",
        body: arg,
        headers: await prepHeaders({queryApi} as PropsFn) as Headers
    })
    if (result.error) return {error: result.error as FetchBaseQueryError}
    const data = result.data as EstimateResponse
    return {data}
}

const prepHeaders = async ({queryApi}:PropsFn) => {
    const headers = new Headers()
    const token = (queryApi.getState() as RootState).auth.token as string
    if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
    }
    return headers
}

const activateFn = async (arg:string, {queryApi, fetchFn}:PropsFn) => {
    const result = await fetchFn({
        url: "/auth/activate",
        method: "POST",
        body: {key: arg},
        headers: await prepHeaders({queryApi} as PropsFn) as Headers
    })
    if (result.error) return {error: result.error as FetchBaseQueryError}
    localStorage.setItem("confirmed", "true")
    queryApi.dispatch(activate())
    const data = result.data as {message:string}
    return {data}
}

const getEstimateFn = async ({queryApi, fetchFn}:PropsFn) => {
    const result = await fetchFn({
        url: "/user/estimate",
        method: "GET",
        headers: await prepHeaders({queryApi} as PropsFn) as Headers
    })
    if (result.error) return {error: result.error as FetchBaseQueryError}
    const data = result.data as EstimateResponse[]
    return {data}
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        credentials: "include",
        baseUrl: 'http://localhost:8000',
    }),
    endpoints: (builder) => ({
        estimate: builder.mutation<EstimateResponse, EstimateRequest>({
            async queryFn(arg, queryApi, extraOptions, fetchFn) {
                const result = await estimateFn(arg, {queryApi:queryApi, fetchFn:fetchFn})
                if (result.error?.status === 401) {
                    const refresh = await refreshFn({queryApi:queryApi, fetchFn:fetchFn})
                    if (refresh.error) {
                        return await logoutFn({queryApi:queryApi, fetchFn:fetchFn})
                    }
                    const result = await estimateFn(arg, {queryApi:queryApi, fetchFn:fetchFn})
                    if (result.error) return {error: result.error as FetchBaseQueryError}
                    const data = result.data as EstimateResponse
                    return {data}
                }
                if (result.error) return {error: result.error as FetchBaseQueryError}
                const data = result.data as EstimateResponse
                return {data}
            }
        }),
        logout: builder.mutation<{message: string}, any>({
            async queryFn(arg, BaseQueryApi, extraOptions, fetchFn) {
                return logoutFn({queryApi:BaseQueryApi, fetchFn:fetchFn})
            }
        }),
        activate: builder.mutation<{message: string}, ActivateRequest>({
            async queryFn(arg, queryApi, extraOptions, fetchFn) {
                const result = await activateFn(arg.key, {queryApi:queryApi, fetchFn:fetchFn})
                if (result.error?.status === 401) {
                    const refresh = await refreshFn({queryApi:queryApi, fetchFn:fetchFn})
                    if (refresh.error) {
                        return await logoutFn({queryApi:queryApi, fetchFn:fetchFn})
                    }
                    const result = await activateFn(arg.key, {queryApi:queryApi, fetchFn:fetchFn})
                    if (result.error) return {error: result.error as FetchBaseQueryError}
                    const data = result.data as {message: string}
                    return {data}
                }
                if (result.error) return {error: result.error as FetchBaseQueryError}
                const data = result.data as {message: string}
                return {data: data}
            }
        }),
        getEstimate: builder.mutation<any, string>({
            async queryFn(arg, queryApi, extraOptions, fetchFn) {
                const result = await getEstimateFn({queryApi:queryApi, fetchFn:fetchFn})
                if (result.error?.status === 401) {
                    const refresh = await refreshFn({queryApi:queryApi, fetchFn:fetchFn})
                    if (refresh.error) {
                        return await logoutFn({queryApi:queryApi, fetchFn:fetchFn})
                    }
                    const result = await getEstimateFn({queryApi:queryApi, fetchFn:fetchFn})
                    if (result.error) return {error: result.error as FetchBaseQueryError}
                    const data = result.data as EstimateResponse[]
                    return {data: data}
                }
                if (result.error) return {error: result.error as FetchBaseQueryError}
                const data = result.data as EstimateResponse[]
                return {data: data}
            }
        })
    }),
})

export const { useEstimateMutation, useLogoutMutation, useActivateMutation, useGetEstimateMutation} = authApi
