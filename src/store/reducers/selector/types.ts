export interface ISelector {
    isActive: boolean
    isOpen: boolean
    id: number
    value: string
}

export interface IAcademic {
    university: ISelector
    school: ISelector
    program: ISelector
}