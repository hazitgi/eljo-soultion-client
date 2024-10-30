import React, { useState } from 'react';
import { BsFillPrinterFill } from "react-icons/bs";
import { Link} from 'react-router-dom';

export default function SaveQcPopup() {

    return (
        <div>
            <div className="floating_save_btn">
                <Link to="/qcprintpass" target="_blank" className="btn btn-add green"><BsFillPrinterFill /> Print</Link>
            </div>
        </div>
    )
}
























