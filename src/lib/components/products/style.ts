import { Box, Typography, Divider, TableContainer } from '@mui/material';
import styled from '@emotion/styled';

export const ProductWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 40px;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ImageWrapper = styled(Box)`
  flex: 1;
  img {
    border-radius: 10px;
  }
`;

export const DetailsWrapper = styled(Box)`
  flex: 2;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 20px;
  height: 100%;
`;

export const PriceTag = styled(Typography)`
  font-size: 28px;
  font-weight: bold;
  color: #b12704;
  margin: 10px 0;
`;

export const SectionTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

export const InfoRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px 0;
  font-size: 16px;
`;

export const StyledDivider = styled(Divider)`
  margin: 20px 0;
`;

export const TagWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledTableContainer = styled(TableContainer)`
  margin-top: 24px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  overflow-x: auto;
`;
