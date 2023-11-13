import { Skeleton } from '@mui/material';
import { GameInfo } from './styles';

export default function GameSkeleton() {
  return (
    <>
      <Skeleton variant="rectangular" animation="wave" width={420} height={520} />

      <GameInfo>
        <Skeleton variant="text" animation="pulse" />
        <Skeleton variant="rectangular" animation="pulse" />
      </GameInfo>
    </>
  );
}
