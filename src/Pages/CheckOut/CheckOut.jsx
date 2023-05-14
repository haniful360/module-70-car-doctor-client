import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    // console.log(service);
    console.log(service);
    const { title, _id, price,img } = service;

    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(order);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'Confirm your order',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }


    return (
        <div className=''>
            <form onSubmit={handleBookService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Order Confirm" className='btn btn-block btn-secondary' />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;