import React from 'react';
import { Link } from 'react-router-dom';
import './OutdoorsSpace.css';

function OutdoorsSpace({ id, name, address, image, hours }) {
  return (
    <div className="OutdoorsSpace">
      <Link to={`/details/${id}`}>
        <h2>{name}</h2>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt={name} />
        <p>{address}</p>
        <p>{hours}</p>
      </Link>
    </div>
  );
}

export default OutdoorsSpace;
