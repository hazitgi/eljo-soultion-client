import React, { useState } from 'react';
import './QcList.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiFillCloseCircle } from "react-icons/ai";


export default function QcList() {

    const [showModal, setShowModal] = useState(false);
    const [selectedAssignee, setSelectedAssignee] = useState('Not Assigned');
    const [newValue, setNewValue] = useState(''); // State to store the new value

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleCloseModal = (confirmed, newValue) => { // Accept newValue as argument
        setShowModal(false);
        if (confirmed) {
            setSelectedAssignee(newValue); // Update selectedAssignee only when confirmed
        }
    };



    return (


        <div className='page_container'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-3 col-sm-12">
                        <div className="page_title">
                            QC List Page
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-9 col-sm-12 text-right">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12"></div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <select className="qcs form-select mobile_margin">
                                    <option>Assigned by me</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <select className="qcs form-select mobile_margin">
                                    <option>Status</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>



                <section className="desktop_table_qc_checklist mt-3">
                    <div className="row mob_desk_margin">
                        <div className="col-12">
                            <div className="table-responsive main_datatable">
                                <table className="table custom_datatable" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th className="tab_mobile_150">Location</th>
                                            <th className="tab_mobile_150">Qc Type</th>
                                            <th className="tab_mobile_150">Work Order#</th>
                                            <th className="tab_mobile_150">Project #</th>
                                            <th className="tab_mobile_120">Sign Type</th>
                                            <th className="tab_mobile_120">Age</th>
                                            <th className="tab_mobile_150">Status</th>
                                            <th className="tab_mobile_150">Quantity</th>
                                            <th className="tab_mobile_180">Assignee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge oppclosed">Assigned</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge started">Started</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodule" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge pending">Pending</div></td>
                                            <td>1</td>
                                            <td>
                                                <select className="assignee form-select mobile_margin">
                                                    <option value="Not Assigned">Not Assigned</option>
                                                    <option value="Rithu">Rithu</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>




                <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} centered>
                    <Modal.Body className="text-center modal_body_padding">
                        <div className="modal_close_button" onClick={handleClose}>
                            <AiFillCloseCircle />
                        </div>
                        <div className="delete_role_question">Change Assignee?</div>
                        <div className="delete_role_para">Are you sure you want to change assignee? </div>
                        <div className="handle_bttons">
                            <Button className="modal_btn cancel" onClick={() => handleCloseModal(true, newValue)}>
                                Yes
                            </Button>
                            <Button className="modal_btn delete" onClick={() => handleCloseModal(false, newValue)}>
                                No
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>


            </div>
        </div>




    )
}
