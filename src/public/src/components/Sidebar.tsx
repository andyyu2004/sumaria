import React from 'react'
import "./Sidebar.css";

type PropTypes = {
  img?: string,
  text?: string,
  entries?: [string, () => void][],
};

const Sidebar: React.FC<PropTypes> = ({ img, text, entries }) => {
  return (
    <div className="sidebar">
      <div className='sidebar-title'>{text && <h6>{text}</h6>}</div>
      {entries && entries.map(([text, cb], i) => (
        <div className="tabs" onClick={cb} key={i}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;