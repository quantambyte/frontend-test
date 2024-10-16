import { Metadata } from 'next';
import ProductDetails from '@/lib/components/products/ProductDetails';
import { fetchProductById } from '@/lib/services/products/api';

interface Params {
  params: { id: string };
}

/**
 * Generates metadata for a product page.
 *
 * @param {Params} params - The parameters containing the product ID.
 * @returns {Promise<Metadata>} A promise that resolves to the metadata object with title and description.
 */
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = await fetchProductById(params.id);
  return { title: product.title, description: product.description };
}

/**
 * Renders the product detail page.
 *
 * @param {Params} params - The parameters containing the product ID.
 * @returns {JSX.Element} The JSX element representing the product detail page.
 */
export default async function ProductDetailPage({ params }: Params) {
  const product = await fetchProductById(params.id);

  return (
    <main>
      <article>
        <ProductDetails product={product} />
      </article>
    </main>
  );
}
