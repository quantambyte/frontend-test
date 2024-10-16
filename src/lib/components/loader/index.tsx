import { CircularProgress, CircularProgressProps } from '@mui/material';

interface ILoader extends CircularProgressProps {}

export default function Loader({ size = 25, color = 'primary' }: ILoader) {
  return <CircularProgress size={size} color={color} />;
}
