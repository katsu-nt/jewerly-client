const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const insertProduct = async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/product/insert`, {
        method: "POST",
        body: formData, // Truyền trực tiếp FormData
      });
  
      if (!response.ok) {
        // Xử lý khi response không thành công
        const errorData = await response.json();
        throw new Error(errorData.message || "Đã xảy ra lỗi trong quá trình gửi request");
      }
  
      return response.json(); // Trả về kết quả từ server
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error; // Ném lỗi để component xử lý
    }
  };
  