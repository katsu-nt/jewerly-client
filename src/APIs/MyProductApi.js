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

export const updateProduct = async (id, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/product/update/${id}`, {
      method: "PUT",
      body: formData, // Truyền trực tiếp FormData
    });

    if (!response.ok) {
      // Xử lý khi response không thành công
      const errorData = await response.json();
      throw new Error(errorData.message || "Đã xảy ra lỗi trong quá trình cập nhật sản phẩm");
    }

    return response.json(); // Trả về kết quả từ server
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Ném lỗi để component xử lý
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/product/all`, {
      method: "GET",
    });

    if (!response.ok) {
      // Xử lý khi response không thành công
      const errorData = await response.json();
      throw new Error(errorData.message || "Đã xảy ra lỗi trong quá trình lấy danh sách sản phẩm");
    }

    return response.json(); // Trả về danh sách sản phẩm từ server
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Ném lỗi để component xử lý
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/product/delete/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      // Xử lý khi response không thành công
      const errorData = await response.json();
      throw new Error(errorData.message || "Đã xảy ra lỗi trong quá trình xóa sản phẩm");
    }

    return response.json(); // Trả về kết quả từ server
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Ném lỗi để component xử lý
  }
};

export const searchProductByName = async (valueSearch) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/product/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: valueSearch }), // Truyền giá trị tìm kiếm trong body
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi khi tìm kiếm sản phẩm");
    }

    return response.json(); // Trả về kết quả tìm kiếm từ server
  } catch (error) {
    console.error("Lỗi khi gọi API tìm kiếm:", error);
    throw error;
  }
};

