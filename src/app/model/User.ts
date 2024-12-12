
export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
}

export interface UserCredentials{
    email: string;
    password: string;
}