
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const register = async (user) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {

    } else {
        return response.json()
    }

}
export const login = async (user) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {

    } else {
        return response.json()
    }

}