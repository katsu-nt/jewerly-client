const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCart = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/api/my/cart/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {

    } else {
        return response.json()
    }

}