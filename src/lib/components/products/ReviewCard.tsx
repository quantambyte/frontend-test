import { Box, Typography } from '@mui/material';
import { ReviewCardProps } from '@/lib/types/products';

/**
 * ReviewCard component is responsible for rendering a single product review.
 *
 * @component
 * @param {ReviewCardProps} props - The properties passed to the component.
 * @param {IReview} props.review - An object containing the details of the review.
 * @param {string} props.review.reviewerName - The name of the individual who wrote the review.
 * @param {string} props.review.comment - The text of the review provided by the reviewer.
 * @param {number} props.review.rating - The numerical rating given by the reviewer, on a scale of 1 to 5.
 * @returns {JSX.Element} A JSX element representing the review card.
 */
export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Box
      mb={2}
      p={2}
      border={1}
      borderColor='grey.300'
      borderRadius={4}
      bgcolor='white'
      data-testid='review-card'
    >
      <Typography variant='h6' gutterBottom data-testid='reviewer-name'>
        Reviewer: {review.reviewerName}
      </Typography>
      <Typography variant='body1' gutterBottom data-testid='review-comment'>
        <strong>Comment:</strong> {review.comment}
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        data-testid='review-rating'
      >
        <strong>Rating:</strong> {review.rating} / 5
      </Typography>
    </Box>
  );
}
