import React from 'react';
import { Link } from 'react-router-dom';
import './OutdoorsSpace.css';

function OutdoorsSpace({ id, name, address, image, hours }) {
  return (
    <div className="OutdoorsSpace">
      <Link to={`/details/${id}`}>
        <h2 className="OutdoorsSpace-title">{name}</h2> {/* Add class name */}
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt={name} />
      </Link>
      <div className="OutdoorsSpace-info">
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  );
}

export default OutdoorsSpace;
