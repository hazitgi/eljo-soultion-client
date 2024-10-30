import React from 'react';
import './QcCompletedList.css';
import { Link } from 'react-router-dom';


export default function QcCompletedList() {
    return (
        <div className='page_container'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="page_title">
                            QC List Page
                        </div>
                    </div>
                </div>
                <section className="desktop_table_qc_checklist">
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
                                            <th className="tab_mobile_150">Assignee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                        <tr>
                                            <td>BRI Main WH</td>
                                            <td>Final Qc Check</td>
                                            <td><Link to="/qc/qcmodulecompleted" className="views_details">WO-BRI-5301</Link></td>
                                            <td>BRI UAE-J7762-01-24 Test1</td>
                                            <td>A 1.01</td>
                                            <td>Just Now</td>
                                            <td><div className="small_badge active">Completed</div></td>
                                            <td>1</td>
                                            <td>Rithu</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </div>




    )
}
