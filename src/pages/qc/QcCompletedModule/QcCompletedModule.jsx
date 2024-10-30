import React from 'react';
import './QcCompletedModule.css';

import LetterMoulding from '../QcCompletedModule/completeddepartments/LetterMoulding';
import MetalFabrication from '../QcCompletedModule/completeddepartments/MetalFabrication';
import CNCLaserCutting from '../QcCompletedModule/completeddepartments/CncLaserCutting';
import Sanding from '../QcCompletedModule/completeddepartments/Sanding';
import Painting from '../QcCompletedModule/completeddepartments/Painting';
import VinylGraphics from '../QcCompletedModule/completeddepartments/VinylGraphics';
import Acrylic from '../QcCompletedModule/completeddepartments/Acrylic';
import Electricals from '../QcCompletedModule/completeddepartments/Electricals';
import Polishing from '../QcCompletedModule/completeddepartments/Polishing';
import Packaging from '../QcCompletedModule/completeddepartments/Packaging';
import OutsourcedMaterials from '../QcCompletedModule/completeddepartments/OutsourcedMaterials';
import SaveQcPopup from '../QcCompletedModule/completeddepartments/SaveQcPopup';
import FilesSection from '../QcCompletedModule/completeddepartments/FilesSection';

import { RiReplyFill } from "react-icons/ri";
import CommentOneImg from '../../../assets/images/comments1.png';


export default function QcCompletedModule() {

    return (
        <div className='page_container'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page_title">
                            Qc Module
                        </div>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 teninch_tablet_view">
                            <div className="qc_mod_details_box">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="row wils_border">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Work Order #</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">BRI UAE-J7775-01-24</span>
                                            </div>
                                        </div>
                                        <div className="row mt_workorder wils_border">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Sign Type</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">Letter 1.01</span>
                                            </div>
                                        </div>
                                        <div className="row mt_workorder wils_border">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Project#</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">BRI UAE-J7775-01-24</span>
                                            </div>
                                        </div>
                                        <div className="row mt_workorder wils_border">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Project Name</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">Test 15</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="row wils_border">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Date</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">31-01-2024</span>
                                            </div>
                                        </div>
                                        <div className="row mt_workorder wils_border">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Quantity</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">1</span>
                                            </div>
                                        </div>
                                        <div className="row mt_workorder">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <span className="work_order_box">Partial or Full</span>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <span className="right_dot">:</span>
                                                <span className="left_bri_gap">Full</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <LetterMoulding />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <MetalFabrication />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <CNCLaserCutting />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <Sanding />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <Painting />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <VinylGraphics />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <Acrylic />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <Electricals />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <Polishing />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <Packaging />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
                                    <div className="letter_moulding_box">
                                        <OutsourcedMaterials />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 teninch_tablet_view">
                    
                            <div className="row mt_workorder">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="check_history_box">
                                        <div className="check_history_heading">
                                            Comments
                                        </div>
                                        <div className="check_history_content">
                                            <div className="comments_main_box">
                                                <div className="comments_img">
                                                    <img src={CommentOneImg} alt="comments" className="" />
                                                </div>
                                                <div className="comments_name_reply_box">
                                                    <div className="name_time_reply_box">
                                                        <div className="left_time_box">
                                                            <div className="cmt_name_box">David Warner</div>
                                                            <div className="cmt_time_box">Today at 3:30 PM</div>
                                                        </div>
                                                        <div className="right_time_box">
                                                            <div className="cmt_icon_box"><RiReplyFill /></div>
                                                        </div>
                                                    </div>
                                                    <div className="cmt_para_box">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                                </div>
                                            </div>
                                 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt_workorder">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="check_history_box">
                                        <div className="check_history_heading">
                                            Files
                                        </div>
                                        <FilesSection />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
