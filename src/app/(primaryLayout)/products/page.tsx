import ProductTable from '@/lib/components/products/ProductsTable';
import { fetchProducts } from '@/lib/services/products/api';
import { Box, Typography } from '@mui/material';

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
    <main data-testid='products-page'>
      <Box bgcolor='white' p={1} borderRadius={1} mt={10} mx={2}>
        <Typography variant='h5'>Products</Typography>
      </Box>
      <ProductTable initialResponse={response} />
    </main>
  );
}
