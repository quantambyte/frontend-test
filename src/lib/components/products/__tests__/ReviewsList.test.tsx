import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewsList from '../ReviewsList';
import { IReview } from '@/lib/types/products';

const mockReviews: IReview[] = [
  {
    reviewerName: 'Alice Smith',
    comment: 'Excellent quality!',
    rating: 5,
    date: '2023-10-02',
  },
  {
    reviewerName: 'Bob Johnson',
    comment: 'Not bad, could be better.',
    rating: 3,
    date: '2023-10-03',
  },
];

describe('ReviewsList', () => {
  beforeEach(() => {
    render(<ReviewsList reviews={mockReviews} />);
  });

  it('renders a list of review cards when reviews are available', () => {
    const reviewCards = screen.getAllByTestId('review-card');
    expect(reviewCards).toHaveLength(mockReviews.length);
  });

  it('renders a message when no reviews are available', () => {
    render(<ReviewsList reviews={[]} />);
    const noReviewsMessage = screen.getByTestId('no-reviews-message');
    expect(noReviewsMessage).toHaveTextContent(
      'No reviews available for this product.'
    );
  });
});
