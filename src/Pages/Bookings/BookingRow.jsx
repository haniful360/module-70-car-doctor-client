import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, img, date, price, service ,status} = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-20 h-20 rounded">
                        {img && <img src={img} />}
                    </div>
                </div>

            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {status === 'confirm'? <span className='text-bold text-secondary'>confirm</span> :<button onClick={() => handleConfirm(_id)} className="btn btn-ghost capitalize btn-xs">Please confirm</button>}
            </th>
        </tr>

    );
};

export default BookingRow;