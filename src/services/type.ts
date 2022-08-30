export interface RefreshResponse {
    AccessToken: string
}

export interface EstimateResponse {
    message: string
}

export interface EstimateRequest {
    course_id: number
    lecture_id: number
    seminar_id: number
    question_lec_1: number
    question_lec_2: number
    question_lec_3: number
    question_lec_4: number
    question_lec_5: number
    question_sem_1: number
    question_sem_2: number
    question_sem_3: number
    question_sem_4: number
    question_sem_5: number
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
