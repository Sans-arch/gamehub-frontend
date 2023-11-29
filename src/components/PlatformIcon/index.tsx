import { Tooltip } from '@mui/material';
import { BsNintendoSwitch } from 'react-icons/bs';
import { FaApple, FaSteam } from 'react-icons/fa';
import { GrAndroid } from 'react-icons/gr';
import { SiPlaystation2, SiPlaystation3, SiPlaystation4, SiXbox, SiEpicgames } from 'react-icons/si';
import { GiPenguin } from 'react-icons/gi';

interface PlatformIconProps {
  readonly platform: {
    id: number;
    name: string;
  };
}

export function PlatformIcon({ platform }: PlatformIconProps) {
  if (platform.name === 'PC (Microsoft Windows)') {
    return (
      <>
        <Tooltip title={platform.name} key={platform.id}>
          <div>
            <FaSteam size={30} />
          </div>
        </Tooltip>
        <Tooltip title={platform.name}>
          <div>
            <SiEpicgames size={30} />
          </div>
        </Tooltip>
      </>
    );
  }

  if (platform.name === 'Linux') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <GiPenguin size={30} />
        </div>
      </Tooltip>
    );
  }

  if (platform.name === 'PlayStation 4') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <SiPlaystation4 size={30} />
        </div>
      </Tooltip>
    );
  }

  if (platform.name === 'PlayStation 3') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <SiPlaystation3 size={30} />
        </div>
      </Tooltip>
    );
  }

  if (platform.name === 'PlayStation 2') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <SiPlaystation2 size={30} />
        </div>
      </Tooltip>
    );
  }

  if (
    platform.name === 'Xbox 360' ||
    platform.name === 'Xbox' ||
    platform.name === 'Xbox One' ||
    platform.name === 'Xbox Series X|S'
  ) {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <SiXbox size={30} />
        </div>
      </Tooltip>
    );
  }

  if (platform.name === 'Nintendo Switch') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <BsNintendoSwitch size={30} />
        </div>
      </Tooltip>
    );
  }

  if (platform.name === 'Android') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <GrAndroid size={30} />
        </div>
      </Tooltip>
    );
  }

  if (platform.name === 'iOS') {
    return (
      <Tooltip title={platform.name} key={platform.id}>
        <div>
          <FaApple size={30} />
        </div>
      </Tooltip>
    );
  }
}
