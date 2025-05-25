// components/TrackClick.js

import { event } from '../../lib/gtag';

const TrackClick = ({ children, action, category, label, value }) => {
  const handleClick = () => {
    event({ action, category, label, value });
  };

  return (
    <div onClick={handleClick} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default TrackClick;
