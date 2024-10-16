import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  max-width: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 90vw;
  }

  @media (max-width: 400px) {
    width: 80vw;
  }
`;
