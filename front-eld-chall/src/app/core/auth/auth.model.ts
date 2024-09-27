export interface AuthState {
    isAuthenticated: boolean;
    userRole: 'admin' | 'user' | null;
    user: any | null;
    error: string | null;
}

export const initialAuthState: AuthState = {
    isAuthenticated: false,
    userRole: null,
    user: null,
    error: null,
};
