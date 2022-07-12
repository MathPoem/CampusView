
export interface HeaderState {
    isActive: boolean;
}

export enum HeaderActionsEnum {
    SET_HEADER = "SET_HEADER",
}

export interface SetHeaderAction {
    type: HeaderActionsEnum.SET_HEADER;
    payload: boolean;
}

export type HeaderAction =
    SetHeaderAction