export interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IDimension {
  width: number;
  height: number;
  depth: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimension;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: 24;
  meta: IMeta;
  images: string[];
  thumbnail: string;
}

export interface IProductsListingResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductDetailsProps {
  product: IProduct;
}

export interface IProductTableProps {
  initialResponse: IProductsListingResponse;
}

export interface IUseProductTableProps {
  initialData: IProduct[];
  initialTotal: number;
}

export interface IReviewsListProps {
  reviews: IReview[];
}

export interface ReviewCardProps {
  review: IReview;
}
