import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductTable from '../ProductsTable';
import { IProductsListingResponse } from '@/lib/types/products';

const mockInitialResponse: IProductsListingResponse = {
  products: [
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
      sku: 'SKU1',
      weight: 1.5,
      dimensions: { width: 10, height: 20, depth: 5 },
      warrantyInformation: '1 year warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [],
      returnPolicy: '30-day return policy',
      minimumOrderQuantity: 24,
      meta: {
        createdAt: '2023-01-01',
        updatedAt: '2023-01-02',
        barcode: '123456789012',
        qrCode: 'https://example.com/qrcode',
      },
      images: ['/path/to/image1.jpg'],
      thumbnail: '/path/to/image.jpg',
    },
  ],
  total: 1,
  skip: 0,
  limit: 10,
};

describe('ProductTable', () => {
  beforeEach(() => {
    render(<ProductTable initialResponse={mockInitialResponse} />);
  });

  it('renders the product table component', () => {
    const tableContainer = screen.getByTestId('product-table-container');
    expect(tableContainer).toBeInTheDocument();
  });

  it('displays the correct number of rows', () => {
    const rows = screen.getAllByTestId(/product-table-row-/);
    expect(rows).toHaveLength(mockInitialResponse.products.length);
  });

  it('displays product details correctly', () => {
    const productLink = screen.getByTestId('product-link-1');
    expect(productLink).toHaveTextContent('Product 1');
  });

  it('handles pagination correctly', () => {
    const pagination = screen.getByTestId('product-table-pagination');
    expect(pagination).toBeInTheDocument();
  });

  it('opens and closes the reviews modal', () => {
    const modal = screen.queryByTestId('product-reviews-modal');
    expect(modal).not.toBeInTheDocument();
  });
});
