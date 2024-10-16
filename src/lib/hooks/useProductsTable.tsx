import { useState, useEffect, useCallback } from 'react';
import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnDef,
} from '@tanstack/react-table';
import { IProduct, IReview, IUseProductTableProps } from '@/lib/types/products';
import { fetchProducts } from '@/lib/services/products/api';
import Button from '../components/button';

/**
 * Custom hook to manage the product table state and operations.
 *
 * @param {IUseProductTableProps} props - The initial data and total count for the product table.
 * @returns {Object} An object containing the table instance, pagination controls, loading state, and modal controls.
 */
export const useProductTable = ({
  initialData,
  initialTotal,
}: IUseProductTableProps) => {
  const [products, setProducts] = useState<IProduct[]>(initialData);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);
  const [selectedProductReviews, setSelectedProductReviews] = useState<
    IReview[]
  >([]);
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

  /**
   * Column definitions for the product table.
   */
  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: true,
    },
    {
      accessorKey: 'title',
      header: 'Title',
      enableSorting: true,
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: (info) => `$${info.getValue<number>().toFixed(2)}`,
      enableSorting: true,
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      enableSorting: true,
    },
    {
      accessorKey: 'stock',
      header: 'Stock',
      enableSorting: true,
    },
    {
      accessorKey: 'brand',
      header: 'Brand',
      enableSorting: true,
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({
        row: {
          original: { reviews },
        },
      }) => (
        <Button
          onClick={() => handleProductReviews(reviews)}
          variant='outlined'
        >
          👁️ Reviews
        </Button>
      ),
      enableSorting: false,
    },
  ];

  /**
   * Handles the display of product reviews in a modal.
   *
   * @param {IReview[]} reviews - The reviews to display in the modal.
   */
  const handleProductReviews = (reviews: IReview[]) => {
    setIsReviewsModalOpen(true);
    setSelectedProductReviews(reviews);
  };

  /**
   * Fetches product data from the API and updates the state.
   *
   * @param {number} pageIndex - The current page index.
   * @param {number} pageSize - The number of items per page.
   */
  const fetchProductData = useCallback(
    async (pageIndex: number, pageSize: number) => {
      setSorting([]);
      setLoading(true);
      const { products, total } = await fetchProducts(pageIndex, pageSize);
      setProducts(products);
      setTotal(total);
      setLoading(false);
    },
    []
  );

  /**
   * Closes the reviews modal and clears the selected reviews.
   */
  const handleCloseModal = () => {
    setIsReviewsModalOpen(false);
    setSelectedProductReviews([]);
  };

  /**
   * Effect hook to fetch product data whenever the page index or page size changes.
   */
  useEffect(() => {
    fetchProductData(pageIndex, pageSize);
  }, [pageIndex, pageSize, fetchProductData]);

  /**
   * Initializes the table instance with the provided data and configurations.
   */
  const table = useReactTable({
    data: products,
    columns,
    state: { sorting, pagination: { pageIndex, pageSize } },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(total / pageSize),
  });

  return {
    table,
    total,
    pageSize,
    pageIndex,
    setPageSize,
    setPageIndex,
    loading,
    handleCloseModal,
    isReviewsModalOpen,
    selectedProductReviews,
  };
};
