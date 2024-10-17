import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDetails from '../ProductDetails';
import { IProduct } from '@/lib/types/products';
import { useRouter } from 'next/router';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const mockProduct: IProduct = {
  id: 1,
  title: 'Sample Product',
  description: 'This is a sample product description.',
  category: 'Sample Category',
  price: 99.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 10,
  tags: ['tag1', 'tag2'],
  brand: 'Sample Brand',
  sku: '12345',
  weight: 2.5,
  dimensions: {
    width: 10,
    height: 20,
    depth: 5,
  },
  warrantyInformation: '2 years warranty',
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
  images: ['/path/to/image1.jpg', '/path/to/image2.jpg'],
  thumbnail: '/path/to/image.jpg',
};

describe('ProductDetails', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<ProductDetails product={mockProduct} />);
    });
  });

  it('renders the product details component with correct title', () => {
    const titleElement = screen.getByTestId('product-title');
    expect(titleElement).toHaveTextContent('Sample Product');
  });

  it('renders the product image', () => {
    const imageElement = screen.getByTestId('product-image');
    expect(imageElement).toBeInTheDocument();
  });

  it('displays the correct brand and SKU', () => {
    const brandSkuElement = screen.getByTestId('product-brand-sku');
    expect(brandSkuElement).toHaveTextContent(
      'Brand: Sample Brand | SKU: 12345'
    );
  });

  it('displays the correct price and discount', () => {
    const priceElement = screen.getByTestId('product-price');
    expect(priceElement).toHaveTextContent('$99.99');
    const discountElement = screen.getByTestId('product-discount');
    expect(discountElement).toHaveTextContent('(10% off)');
  });

  it('displays the correct product description', () => {
    const descriptionElement = screen.getByTestId('product-description');
    expect(descriptionElement).toHaveTextContent(
      'This is a sample product description.'
    );
  });

  it('displays the correct product tags', () => {
    const tagElements = screen.getAllByTestId(/tag-/);
    expect(tagElements).toHaveLength(3);
    expect(tagElements[1]).toHaveTextContent('tag1');
    expect(tagElements[2]).toHaveTextContent('tag2');
  });

  it('displays the correct availability status', () => {
    const availabilityElement = screen.getByTestId('info-row-availability');
    expect(availabilityElement).toHaveTextContent('In Stock');
  });

  it('displays the correct return policy', () => {
    const returnPolicyElement = screen.getByTestId('return-policy');
    expect(returnPolicyElement).toHaveTextContent('30-day return policy');
  });
});
