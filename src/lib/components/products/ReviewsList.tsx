import { IReviewsListProps } from '@/lib/types/products';
import { Typography } from '@mui/material';
import ReviewCard from './ReviewCard';

/**
 * ReviewsList component is responsible for rendering a list of product reviews.
 *
 * @component
 * @param {IReviewsListProps} props - The properties passed to the component.
 * @param {IReview[]} props.reviews - An array of review objects to be displayed.
 * @returns {JSX.Element} A JSX element representing the list of review cards or a message if no reviews are available.
 */
export default function ReviewsList({ reviews }: IReviewsListProps) {
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))
      ) : (
        <Typography variant='body1'>
          No reviews available for this product.
        </Typography>
      )}
    </>
  );
}
