import TimeAgo from 'timeago-react';
const RoomItem = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">Room name</h3>
        <span>aaa</span>
      </div>
      <div className="d-flex align-items-center text-black-70">
        <TimeAgo datetime={new Date()} className="font-normal text-black-45" />
      </div>
    </div>
  );
};

export default RoomItem;
