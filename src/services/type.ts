export interface RefreshResponse {
    AccessToken: string
}

export interface EstimateResponse {
    message: string
}

export interface EstimateRequest {
    lecture_id: number
    seminar_id: number
    question_1: number
    question_2: number
    question_3: number
    question_4: number
    question_5: number
}

export interface estimateList {
    List: EstimateRequest[]
    message: string
}

export interface ActivateRequest {
    key: string
}

export interface LogoutRequest {
    id: number,
    email: string
}
