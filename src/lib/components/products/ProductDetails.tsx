'use client';

import { Typography, Rating, Chip } from '@mui/material';
import Image from 'next/image';
import { IProductDetailsProps } from '@/lib/types/products';
import {
  DetailsWrapper,
  ImageWrapper,
  InfoRow,
  PriceTag,
  ProductWrapper,
  SectionTitle,
  StyledDivider,
  TagWrapper,
} from './style';

/**
 * Component to display detailed information about a product.
 *
 * @param {IProductDetailsProps} props - The properties for the product details component.
 * @param {Object} props.product - The product object containing all necessary details.
 * @param {string} props.product.thumbnail - URL of the product's thumbnail image.
 * @param {string} props.product.title - Title of the product.
 * @param {string} props.product.brand - Brand of the product.
 * @param {string} props.product.sku - Stock Keeping Unit identifier for the product.
 * @param {number} props.product.rating - Rating of the product.
 * @param {string} props.product.description - Description of the product.
 * @param {number} props.product.price - Price of the product.
 * @param {number} props.product.discountPercentage - Discount percentage on the product.
 * @param {number} props.product.weight - Weight of the product in pounds.
 * @param {Object} props.product.dimensions - Dimensions of the product.
 * @param {number} props.product.dimensions.width - Width of the product.
 * @param {number} props.product.dimensions.height - Height of the product.
 * @param {number} props.product.dimensions.depth - Depth of the product.
 * @param {Array<string>} props.product.tags - Tags associated with the product.
 * @param {string} props.product.warrantyInformation - Warranty information of the product.
 * @param {string} props.product.shippingInformation - Shipping information of the product.
 * @param {number} props.product.stock - Stock availability of the product.
 * @param {string} props.product.availabilityStatus - Availability status of the product.
 * @param {string} props.product.returnPolicy - Return policy of the product.
 *
 * @returns {JSX.Element} The rendered product details component.
 */
export default function ProductDetails({ product }: IProductDetailsProps) {
  return (
    <ProductWrapper>
      <ImageWrapper>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
          style={{ objectFit: 'cover' }}
          priority
        />
      </ImageWrapper>

      <DetailsWrapper>
        <Typography variant='h4' fontWeight='bold'>
          {product.title}
        </Typography>

        <Typography variant='body2' color='textSecondary' sx={{ mb: 1 }}>
          Brand: {product.brand} | SKU: {product.sku}
        </Typography>

        <Rating value={product.rating} readOnly />

        <Typography variant='body1' sx={{ mt: 2 }}>
          {product.description}
        </Typography>

        <PriceTag>
          ${product.price.toFixed(2)}{' '}
          <Typography
            component='span'
            sx={{ fontSize: '16px', color: '#565959' }}
          >
            ({product.discountPercentage}% off)
          </Typography>
        </PriceTag>

        <StyledDivider />

        <SectionTitle>Product Details</SectionTitle>
        <InfoRow>
          <Typography>Weight:</Typography>
          <Typography>{product.weight} lbs</Typography>
        </InfoRow>
        <InfoRow>
          <Typography>Dimensions:</Typography>
          <Typography>
            {product.dimensions.width}W x {product.dimensions.height}H x{' '}
            {product.dimensions.depth}D inches
          </Typography>
        </InfoRow>

        <StyledDivider />

        <SectionTitle>Tags</SectionTitle>
        <TagWrapper>
          {product.tags.map((tag) => (
            <Chip key={tag} label={tag} color='primary' />
          ))}
        </TagWrapper>

        <StyledDivider />

        <SectionTitle>Additional Information</SectionTitle>
        <InfoRow>
          <Typography>Warranty:</Typography>
          <Typography>{product.warrantyInformation}</Typography>
        </InfoRow>
        <InfoRow>
          <Typography>Shipping:</Typography>
          <Typography>{product.shippingInformation}</Typography>
        </InfoRow>
        <InfoRow>
          <Typography>Availability:</Typography>
          <Typography color={product.stock > 0 ? 'green' : 'red'}>
            {product.availabilityStatus}
          </Typography>
        </InfoRow>

        <StyledDivider />

        <SectionTitle>Return Policy</SectionTitle>
        <Typography variant='body2'>{product.returnPolicy}</Typography>
      </DetailsWrapper>
    </ProductWrapper>
  );
}
