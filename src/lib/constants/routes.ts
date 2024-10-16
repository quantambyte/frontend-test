/**
 * An object containing route paths used in the application.
 *
 * @constant {Object} ROUTES
 * @property {string} PRODUCTS - The route path for the products page.
 * @property {string} LOGIN - The route path for the login page.
 * @property {function} PRODUCT - A function that returns the route path for a specific product page, given a product ID.
 * @param {number} id - The ID of the product.
 * @returns {string} The route path for the specified product.
 */
export const ROUTES = {
  PRODUCTS: '/products',
  LOGIN: '/login',
  PRODUCT: (id: number) => `/products/${id}`,
};
