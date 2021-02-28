export function authHeader() {
    return {
        headers: { Authorization: `Bearer ${localStorage.getItem('t')}` }
    };
}