const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// export const getProductByType = async (type) => {
//     const response = await fetch(`${API_BASE_URL}/api/admin/product/getByType/${type}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     if (!response.ok) {

//     } else {
//         return response.json()
//     }

// }

export const getProductByFilter = async (filters) => {
    console.log(filters)
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/product/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch filtered products");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error filtering products:", error.message);
      throw error;
    }
  };