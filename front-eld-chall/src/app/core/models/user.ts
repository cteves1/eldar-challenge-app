export interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'user';
    token?: string;             // Token de autenticación opcional
}
