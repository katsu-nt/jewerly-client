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


export const updateStatus = async (order) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/my/order/updateStatus`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: order._id,
        status: order.status,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Đã xảy ra lỗi trong quá trình cập nhật trạng thái đơn hàng");
    }

    return response.json(); // Trả về kết quả từ server
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};
