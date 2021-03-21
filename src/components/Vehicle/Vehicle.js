import React from 'react';
import { useHistory } from 'react-router';
import './Vehicle.css';

const Vehicle = (props) => {
    const { name, img } = props.vehicle;
    const history = useHistory();
    const handleCardCheck = (name) => {
        history.push(`/destination/${name}`)
    }
    return (
        <div className="card card-body vehicle-card mx-4" onClick={() => handleCardCheck(name)}>
            <img src={img} className="card-img-top" alt="..." />
            <h5 className="card-title">{name}</h5>
        </div>
    );
};

export default Vehicle;