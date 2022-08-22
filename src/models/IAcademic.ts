export interface IUniversity {
    id: number;
    country: string;
    city: string;
    name: string;
    url: string;
}

export interface ISchool {
    id: number
    name: string
    universityID: number
    url: string
}

export interface IDepartment {
    id: number
    name: string
    schoolID: number
    url: string
}

export interface IPearson {
    id: number
    departmentID: number
    firstName: string
    middleName: string
    secondName: string
    age: number
    url: string
    firstDegree: string
    secondDegree: string
    thirdDegree: string
}

export interface IProgram {
    id: number
    schoolID: number
    name: string
    yearStart: number
    semester: number
}

export interface ICourse {
    id: number
    name: string
    programID: number
    credits: number
    hoursLecture: number
    hoursSeminar: number
    estimationInDiploma: boolean
    exam: boolean
    description: string
    url: string
}

export interface ILecture {
    id: number
    year: number
    pearsonID: number
    courseID: number
    url: string
}

export interface ISeminar {
    id: number
    year: number
    pearsonID: number
    courseID: number
    url: string
}
