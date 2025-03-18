const BASE_URL = "http://localhost:8080/api/internal/inventory/products"; // Replace with actual API URL

const productService = {

    async createProduct(productData) {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            if (!response.ok) throw new Error("Failed to create product");

            return await response.json();
        } catch (error) {
            console.error("Error creating product:", error);
            return null;
        }
    },


    async getProductById(productId) {
        try {
            const response = await fetch(`${BASE_URL}/${productId}`);

            if (response.status === 404) {
                console.warn("Product not found");
                return null;
            }

            if (!response.ok) throw new Error("Failed to fetch product");

            return await response.json();
        } catch (error) {
            console.error("Error fetching product:", error);
            return null;
        }
    },


    async getAllProducts() {
        try {
            const response = await fetch(BASE_URL);

            if (!response.ok) throw new Error("Failed to fetch products");

            return await response.json();
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    },

    async updateProduct(productId, updatedProductData) {
        try {
            const response = await fetch(`${BASE_URL}/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProductData),
            });

            if (response.status === 404) {
                console.warn("Product not found for update");
                return false;
            }

            if (!response.ok) throw new Error("Failed to update product");

            return true;
        } catch (error) {
            console.error("Error updating product:", error);
            return false;
        }
    },

    async deleteProduct(productId) {
        try {
            const response = await fetch(`${BASE_URL}/${productId}`, {
                method: "DELETE",
            });

            if (response.status === 404) {
                console.warn("Product not found for deletion");
                return false;
            }

            if (!response.ok) throw new Error("Failed to delete product");

            return true;
        } catch (error) {
            console.error("Error deleting product:", error);
            return false;
        }
    },
};

export default productService;
