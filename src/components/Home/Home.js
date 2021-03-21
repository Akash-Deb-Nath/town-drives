import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/vehicleData.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css'
const Home = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        setVehicle(fakeData);
    }, [vehicle])
    return (
        <div className="p-5 bg-img">
            <div className="row gx-3 mx-3 mt-5 px-3">
                {
                    vehicle.map(vehicle => <Vehicle className="col-md-3" vehicle={vehicle}></Vehicle>)
                }
            </div>
        </div>
    );
};

export default Home;