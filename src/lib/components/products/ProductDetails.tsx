'use client';

import { Typography, Rating, Chip, Box, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IProductDetailsProps } from '@/lib/types/products';
import { ROUTES } from '@/lib/constants/routes';
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
import Button from '../button';
import { ArrowBack } from '@mui/icons-material';

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
  const router = useRouter();

  return (
    <ProductWrapper data-testid='product-wrapper'>
      <Box position='relative' data-testid='image-box'>
        <Tooltip title='Go Back'>
          <span>
            <Button
              variant='contained'
              color='primary'
              onClick={() => router.push(ROUTES.PRODUCTS)}
              sx={{ position: 'absolute' }}
              data-testid='back-button'
            >
              <ArrowBack />
            </Button>
          </span>
        </Tooltip>
        <ImageWrapper data-testid='image-wrapper'>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            style={{ objectFit: 'cover' }}
            priority
            data-testid='product-image'
          />
        </ImageWrapper>
      </Box>

      <DetailsWrapper data-testid='details-wrapper'>
        <Typography variant='h4' fontWeight='bold' data-testid='product-title'>
          {product.title}
        </Typography>

        <Typography
          variant='body2'
          color='textSecondary'
          sx={{ mb: 1 }}
          data-testid='product-brand-sku'
        >
          Brand: {product.brand} | SKU: {product.sku}
        </Typography>

        <Rating value={product.rating} readOnly data-testid='product-rating' />

        <Typography
          variant='body1'
          sx={{ mt: 2 }}
          data-testid='product-description'
        >
          {product.description}
        </Typography>

        <PriceTag data-testid='product-price'>
          ${product.price.toFixed(2)}{' '}
          <Typography
            component='span'
            sx={{ fontSize: '16px', color: '#565959' }}
            data-testid='product-discount'
          >
            ({product.discountPercentage}% off)
          </Typography>
        </PriceTag>

        <StyledDivider data-testid='divider-1' />

        <SectionTitle data-testid='section-title-details'>
          Product Details
        </SectionTitle>
        <InfoRow data-testid='info-row-weight'>
          <Typography>Weight:</Typography>
          <Typography>{product.weight} lbs</Typography>
        </InfoRow>
        <InfoRow data-testid='info-row-dimensions'>
          <Typography>Dimensions:</Typography>
          <Typography>
            {product.dimensions.width}W x {product.dimensions.height}H x{' '}
            {product.dimensions.depth}D inches
          </Typography>
        </InfoRow>

        <StyledDivider data-testid='divider-2' />

        <SectionTitle data-testid='section-title-tags'>Tags</SectionTitle>
        <TagWrapper data-testid='tag-wrapper'>
          {product.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              color='primary'
              data-testid={`tag-${tag}`}
            />
          ))}
        </TagWrapper>

        <StyledDivider data-testid='divider-3' />

        <SectionTitle data-testid='section-title-additional'>
          Additional Information
        </SectionTitle>
        <InfoRow data-testid='info-row-warranty'>
          <Typography>Warranty:</Typography>
          <Typography>{product.warrantyInformation}</Typography>
        </InfoRow>
        <InfoRow data-testid='info-row-shipping'>
          <Typography>Shipping:</Typography>
          <Typography>{product.shippingInformation}</Typography>
        </InfoRow>
        <InfoRow data-testid='info-row-availability'>
          <Typography>Availability:</Typography>
          <Typography color={product.stock > 0 ? 'green' : 'red'}>
            {product.availabilityStatus}
          </Typography>
        </InfoRow>

        <StyledDivider data-testid='divider-4' />

        <SectionTitle data-testid='section-title-return'>
          Return Policy
        </SectionTitle>
        <Typography variant='body2' data-testid='return-policy'>
          {product.returnPolicy}
        </Typography>
      </DetailsWrapper>
    </ProductWrapper>
  );
}
