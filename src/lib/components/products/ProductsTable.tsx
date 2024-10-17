'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TableFooter,
  TablePagination,
} from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { IProductTableProps } from '@/lib/types/products';
import { useProductTable } from '@/lib/hooks/useProductsTable';
import ProductTableSkeleton from '@/app/(primaryLayout)/products/loading';
import { ROUTES } from '@/lib/constants/routes';
import Link from 'next/link';
import Modal from '@/lib/components/modal';
import { StyledTableContainer } from './style';
import ReviewsList from './ReviewsList';

/**
 * ProductTable component displays a table of products with pagination and sorting capabilities.
 * It uses the useProductTable hook to manage table state and data fetching.
 *
 * @component
 * @param {IProductTableProps} props - The component props.
 * @param {Object} props.initialResponse - The initial response containing product data and total count.
 * @returns {JSX.Element} The rendered product table component.
 */
export default function ProductTable({ initialResponse }: IProductTableProps) {
  const {
    table,
    total,
    pageIndex,
    pageSize,
    setPageIndex,
    setPageSize,
    loading,
    isReviewsModalOpen,
    selectedProductReviews,
    handleCloseModal,
  } = useProductTable({
    initialData: initialResponse.products,
    initialTotal: initialResponse.total,
  });

  /**
   * Handles the page change event for the table pagination.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} _ - The event object (not used).
   * @param {number} newPage - The new page index.
   */
  const handlePageChange = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageIndex(newPage);
  };

  /**
   * Handles the change event for the number of rows per page in the table pagination.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   */
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
  };

  if (loading) {
    return <ProductTableSkeleton data-testid='product-table-skeleton' />;
  }

  return (
    <Box p={2} data-testid='product-table-container'>
      <StyledTableContainer>
        <Table data-testid='product-table'>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                data-testid='product-table-header-row'
              >
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{ cursor: 'pointer', fontWeight: 600 }}
                    data-testid={`product-table-header-cell-${header.id}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {{
                      asc: ' ↑',
                      desc: ' ↓',
                    }[header.column.getIsSorted() as string] ?? null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#F5F5F5' : '#ffffff',
                }}
                data-testid={`product-table-row-${row.id}`}
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    sx={{ border: '.1px solid #E0E0E0' }}
                    data-testid={`product-table-cell-${cell.id}`}
                  >
                    {index === 1 ? (
                      <Link
                        href={ROUTES.PRODUCT(row.original.id)}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        data-testid={`product-link-${row.original.id}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Link>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                count={total}
                rowsPerPage={pageSize}
                page={pageIndex}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                data-testid='product-table-pagination'
              />
            </TableRow>
          </TableFooter>
        </Table>
      </StyledTableContainer>

      {isReviewsModalOpen && (
        <Modal
          open={isReviewsModalOpen}
          onClose={handleCloseModal}
          title='Product Reviews'
          data-testid='product-reviews-modal'
        >
          <ReviewsList reviews={selectedProductReviews} />
        </Modal>
      )}
    </Box>
  );
}
