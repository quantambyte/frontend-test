import { ENVIRONMENT_VARIABLES } from '@/lib/config';
import { IProduct, IProductsListingResponse } from '@/lib/types/products';

const { BASE_URL } = ENVIRONMENT_VARIABLES;

/**
 * Fetches a list of products from the API.
 *
 * @async
 * @function fetchProducts
 * @param {number} [pageIndex=0] - The index of the page to fetch.
 * @param {number} [pageSize=10] - The number of products per page.
 * @returns {Promise<IProductsListingResponse>} The response containing the list of products and total count.
 */
export async function fetchProducts(
  pageIndex = 0,
  pageSize = 10
): Promise<IProductsListingResponse> {
  const skip = pageIndex * pageSize;
  const response = await fetch(
    `${BASE_URL}/products?limit=${pageSize}&skip=${skip}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return (await response.json()) as IProductsListingResponse;
}

/**
 * Fetches a single product by its ID from the API.
 *
 * @async
 * @function fetchProductById
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<IProduct>} The response containing the product details.
 */
export async function fetchProductById(id: string): Promise<IProduct> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await response.json()) as IProduct;
}
