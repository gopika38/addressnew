import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-4">Welcome to Address Book</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <Link to="/add" className="btn btn-primary btn-lg btn-block">Add Address</Link>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Link to="/delete" className="btn btn-danger btn-lg btn-block">Delete Address</Link>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Link to="/update" className="btn btn-warning btn-lg btn-block">Update Address</Link>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Link to="/get-all-addresses" className="btn btn-success btn-lg btn-block">Get All Addresses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
