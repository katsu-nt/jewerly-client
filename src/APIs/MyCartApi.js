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
export const addToCart = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/my/cart/add`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {

    } else {
        return response.json()
    }
}
export const removeFromCart = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/my/cart/remove`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {

    } else {
        return response.json()
    }
}
export const removeAll = async (data) => {
    const response = await fetch(`${API_BASE_URL}/api/my/cart/clear`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {

    } else {
        return response.json()
    }
}