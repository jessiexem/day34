export interface Register {
    id?: string
    name: string
    email: string
}

export interface Response {
    code: number
    message?: string
    data?: any
}