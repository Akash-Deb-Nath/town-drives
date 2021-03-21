import React, { useEffect, useState } from 'react';
import { useParams, useparams } from 'react-router';
import './Destination.css';
import fakeData from '../../fakeData/vehicleData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-brands-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        setVehicle(fakeData);
    }, [vehicle])
    const [show, setShow] = useState(true);
    const [inputValue, setInputValue] = useState({});
    const { name } = useParams();
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'name') {
            isFieldValid = event.target.value.length < 50;
        }
        if (isFieldValid) {
            const newInputData = { ...inputValue };
            newInputData[event.target.name] = event.target.value;
            setInputValue(newInputData);
        }
    }
    const selectedVehicle = vehicle.find((vehicle) => name === vehicle.name);
    return (
        <div className="all-details">
            <div className="details-div">
                {
                    show ?
                        <div className="search-field">
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">pick from</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" name="from" onBlur={handleBlur} placeholder="From" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">pick to</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" name="to" onBlur={handleBlur} placeholder="To" />
                            </div>
                            <button onClick={() => setShow(!show)} className="btn btn-warning" >Search</button>
                        </div>
                        :
                        <div className="search-field">
                            <div className="search-result">
                                <div className="mb-3">
                                    <h3>{inputValue.from}</h3>
                                </div>
                                <div className="mb-3">
                                    <h3>{inputValue.to}</h3>
                                </div>
                            </div>
                            {
                                <div>
                                    <div className="vehicle-details">
                                        <img className="mx-3" src={selectedVehicle.img} alt="" />
                                        <p className="mx-3">{selectedVehicle.name}</p>
                                        <p className="mx-3"><FontAwesomeIcon icon={faUserFriends} /> {selectedVehicle.seat}</p>
                                        <p className="mx-3">${selectedVehicle.price}</p>
                                        <p className="mx-3">{selectedVehicle.date}</p>
                                    </div>
                                    <div className="vehicle-details">
                                        <img className="mx-3" src={selectedVehicle.img} alt="" />
                                        <p className="mx-3">{selectedVehicle.name}</p>
                                        <p className="mx-3"><FontAwesomeIcon icon={faUserFriends} /> {selectedVehicle.seat}</p>
                                        <p className="mx-3">${selectedVehicle.price}</p>
                                        <p className="mx-3">{selectedVehicle.date}</p>
                                    </div>
                                    <div className="vehicle-details">
                                        <img className="mx-3" src={selectedVehicle.img} alt="" />
                                        <p className="mx-3">{selectedVehicle.name}</p>
                                        <p className="mx-3"><FontAwesomeIcon icon={faUserFriends} />        {selectedVehicle.seat}</p>
                                        <p className="mx-3">${selectedVehicle.price}</p>
                                        <p className="mx-3">{selectedVehicle.date}</p>
                                    </div>
                                </div>
                            }
                        </div>
                }
            </div>
            <div className="map-div">
                <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6086.821568473747!2d91.85814994346332!3d24.88959745218945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2z4Ka44Ka_4Kay4KeH4Kaf!5e0!3m2!1sbn!2sbd!4v1616248041453!5m2!1sbn!2sbd" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Destination;
