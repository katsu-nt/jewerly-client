const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllOrders = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/my/order/allOrders`, {
            method: "GET",
        });

        if (!response.ok) {
            // Xử lý khi response không thành công
            const errorData = await response.json();
            throw new Error(errorData.message || "Đã xảy ra lỗi trong quá trình lấy danh sách orders");
        }

        return response.json(); // Trả về danh sách orders từ server
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        throw error; // Ném lỗi để component xử lý
    }
};