import ProductTable from '@/lib/components/products/ProductsTable';
import { fetchProducts } from '@/lib/services/products/api';

/**
 * ProductsPage component fetches and displays a list of products.
 * It retrieves product data from the API and passes it to the ProductTable component.
 *
 * @component
 * @returns {Promise<JSX.Element>} A promise that resolves to the JSX element representing the products page.
 */
export default async function ProductsPage() {
  const response = await fetchProducts();

  return (
    <main>
      <ProductTable initialResponse={response} />
    </main>
  );
}
