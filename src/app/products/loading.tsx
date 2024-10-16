'use client';

import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { StyledTableContainer } from '@/lib/components/products/style';

/**
 * ProductTableSkeleton component provides a loading skeleton for the product table.
 * It displays a table structure with skeletons to simulate loading content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} [props.itemsPerPage=10] - The number of skeleton rows to display.
 * @returns {JSX.Element} The rendered skeleton component.
 */
export default function ProductTableSkeleton({
  itemsPerPage = 10,
}: {
  itemsPerPage?: number;
}) {
  const skeletonRows = Array.from(
    { length: itemsPerPage },
    (_, index) => index + 1
  );

  return (
    <Box padding={4}>
      <Typography variant='h5' fontWeight='bold' gutterBottom>
        Products
      </Typography>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {Array.from({ length: 5 }).map((_, index) => (
                <TableCell key={index}>
                  <Skeleton variant='text' width='80%' height={30} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {skeletonRows.map((_, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#F5F5F5' : '#ffffff',
                }}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <TableCell
                    key={index}
                    sx={{ border: '.1px solid #E0E0E0', py: 3 }}
                  >
                    <Skeleton variant='rectangular' width='100%' height={19} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
}
