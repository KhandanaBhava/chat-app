import { useCurrentRoom } from '../../../context/current-room.context';
import { memo } from 'react';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  return <div>{name}</div>;
};

export default memo(Top);
