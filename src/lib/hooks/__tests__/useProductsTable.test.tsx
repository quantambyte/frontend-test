import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { useProductTable } from '../useProductsTable';
import { IProduct } from '@/lib/types/products';
import { fetchProducts } from '@/lib/services/products/api';

jest.mock('../../services/products/api.ts');

const mockProducts: IProduct[] = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description 1',
    category: 'Category 1',
    price: 100,
    discountPercentage: 10,
    rating: 4.5,
    stock: 20,
    tags: ['tag1', 'tag2'],
    brand: 'Brand 1',
    sku: 'SKU001',
    weight: 1.5,
    dimensions: { width: 5, height: 2, depth: 10 },
    warrantyInformation: '2 years warranty',
    shippingInformation: 'Manufacturer 1',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 5,
        comment: 'Great product!',
        date: '2023-01-01',
        reviewerName: 'John Doe',
      },
    ],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 24,
    meta: {
      createdAt: '2023-01-01',
      updatedAt: '2023-01-02',
      barcode: '123456789012',
      qrCode: 'qrcode123',
    },
    images: ['image1.jpg', 'image2.jpg'],
    thumbnail: 'thumbnail.jpg',
  },
];

const TestComponent: React.FC = () => {
  const {
    pageSize,
    pageIndex,
    setPageSize,
    setPageIndex,
    loading,
    handleCloseModal,
    isReviewsModalOpen,
    selectedProductReviews,
  } = useProductTable({
    initialData: mockProducts,
    initialTotal: mockProducts.length,
  });

  return (
    <div>
      <div>
        {loading ? 'Loading...' : 'Loaded'}
        <button onClick={() => setPageIndex(pageIndex + 1)}>Next Page</button>
        <button onClick={() => setPageSize(pageSize + 5)}>
          Increase Page Size
        </button>
      </div>
      <div>
        {isReviewsModalOpen && (
          <div role='dialog'>
            <button onClick={handleCloseModal}>Close Modal</button>
            {selectedProductReviews.map((review, index) => (
              <div key={index}>{review.comment}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const mockFetchProducts = fetchProducts as jest.MockedFunction<
  typeof fetchProducts
>;

describe('useProductTable Hook', () => {
  beforeEach(() => {
    mockFetchProducts.mockResolvedValue({
      products: mockProducts,
      total: mockProducts.length,
      skip: 0,
      limit: 10,
    });
  });

  it('fetches and displays products', async () => {
    render(<TestComponent />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Loaded')).toBeInTheDocument());
    expect(mockFetchProducts).toHaveBeenCalledTimes(1);
  });

  it('handles pagination', async () => {
    render(<TestComponent />);
    await waitFor(() => expect(screen.getByText('Loaded')).toBeInTheDocument());
    userEvent.click(screen.getByText('Next Page'));
    expect(mockFetchProducts).toHaveBeenCalledTimes(2);
  });

  it('handles page size change', async () => {
    render(<TestComponent />);
    await waitFor(() => expect(screen.getByText('Loaded')).toBeInTheDocument());
    userEvent.click(screen.getByText('Increase Page Size'));
    expect(mockFetchProducts).toHaveBeenCalledTimes(3);
  });
});
