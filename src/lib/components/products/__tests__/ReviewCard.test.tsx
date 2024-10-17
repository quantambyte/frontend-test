import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewCard from '../ReviewCard';
import { IReview } from '@/lib/types/products';

const mockReview: IReview = {
  reviewerName: 'John Doe',
  comment: 'Great product!',
  rating: 2,
  date: '2023-10-01',
};

describe('ReviewCard', () => {
  beforeEach(() => {
    render(<ReviewCard review={mockReview} />);
  });

  it('renders the review card with correct reviewer name', () => {
    const reviewerNameElement = screen.getByTestId('reviewer-name');
    expect(reviewerNameElement).toHaveTextContent('Reviewer: John Doe');
  });

  it('renders the review card with correct comment', () => {
    const commentElement = screen.getByTestId('review-comment');
    expect(commentElement).toHaveTextContent('Comment: Great product!');
  });

  it('renders the review card with correct rating', () => {
    const ratingElement = screen.getByTestId('review-rating');
    expect(ratingElement).toHaveTextContent('Rating: 2 / 5');
  });

  it('applies correct styles to the review card', () => {
    const reviewCardElement = screen.getByTestId('review-card');
    expect(reviewCardElement).toHaveStyle({
      marginBottom: '16px',
      padding: '16px',
      border: '1px solid',
    });
  });
});
