import { BASE_URL } from '../../auth/api';
import { fetchProducts, fetchProductById } from '../api';
import { IProduct, IProductsListingResponse } from '@/lib/types/products';

export const mockProductsResponse: IProductsListingResponse = {
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

describe('fetchProducts', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProductsResponse),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send a GET request to the correct URL with the correct query parameters', async () => {
    const pageIndex = 1;
    const pageSize = 10;
    await fetchProducts(pageIndex, pageSize);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/products?limit=${pageSize}&skip=${pageIndex * pageSize}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });

  it('should return the correct response data', async () => {
    const response = await fetchProducts();

    expect(response).toEqual(mockProductsResponse);
  });
});

describe('fetchProductById', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProduct),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send a GET request to the correct URL with the product ID', async () => {
    const productId = '1';
    await fetchProductById(productId);

    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/products/${productId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  });

  it('should return the correct product data', async () => {
    const response = await fetchProductById('1');

    expect(response).toEqual(mockProduct);
  });
});
