import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillCloseCircle, AiFillFile } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsDownload } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import IndustryImage from '../../../../assets/images/industry.jpg';

export default function CompletedImagesSection() {

    const [showModal, setShowModal] = useState(false);

    const handleImageClick = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDownload = () => { };

    return (
        <div>
            <div className="check_history_content">

                <div className="right_file_box">
                    <div className="comments_main_box files_box">
                        <div className="comments_img files_box">
                            <AiFillFile />
                        </div>
                        <div className="comments_name_reply_box files_box">
                            <div className="name_time_reply_box files">
                                <div className="left_time_box">
                                    <div className="cmt_name_box">metalfabrication.jpg</div>
                                    <div className="cmt_time_box">2.5 mb</div>
                                </div>
                                <div className="right_time_box">
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="btn btn-download">
                                                <BiDotsHorizontalRounded />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu id="download_dropdown">
                                                <NavLink className="profile_page_list download" onClick={() => handleImageClick(image)}>
                                                    <div className="inner_pages_list">
                                                        <div className="main_menu_name">View & Download</div>
                                                    </div>
                                                </NavLink>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="right_file_box">
                    <div className="comments_main_box files_box">
                        <div className="comments_img files_box">
                            <AiFillFile />
                        </div>
                        <div className="comments_name_reply_box files_box">
                            <div className="name_time_reply_box files">
                                <div className="left_time_box">
                                    <div className="cmt_name_box">metalfabrication.jpg</div>
                                    <div className="cmt_time_box">2.5 mb</div>
                                </div>
                                <div className="right_time_box">
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="btn btn-download">
                                                <BiDotsHorizontalRounded />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu id="download_dropdown">
                                                <NavLink className="profile_page_list download" onClick={handleImageClick}>
                                                    <div className="inner_pages_list">
                                                        <div className="main_menu_name">View & Download</div>
                                                    </div>
                                                </NavLink>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="right_file_box">
                    <div className="comments_main_box files_box">
                        <div className="comments_img files_box">
                            <AiFillFile />
                        </div>
                        <div className="comments_name_reply_box files_box">
                            <div className="name_time_reply_box files">
                                <div className="left_time_box">
                                    <div className="cmt_name_box">metalfabrication.jpg</div>
                                    <div className="cmt_time_box">2.5 mb</div>
                                </div>
                                <div className="right_time_box">
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="btn btn-download">
                                                <BiDotsHorizontalRounded />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu id="download_dropdown">
                                                <NavLink className="profile_page_list download" onClick={() => handleImageClick(image)}>
                                                    <div className="inner_pages_list">
                                                        <div className="main_menu_name">View & Download</div>
                                                    </div>
                                                </NavLink>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="right_file_box">
                    <div className="comments_main_box files_box">
                        <div className="comments_img files_box">
                            <AiFillFile />
                        </div>
                        <div className="comments_name_reply_box files_box">
                            <div className="name_time_reply_box files">
                                <div className="left_time_box">
                                    <div className="cmt_name_box">metalfabrication.jpg</div>
                                    <div className="cmt_time_box">2.5 mb</div>
                                </div>
                                <div className="right_time_box">
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="btn btn-download">
                                                <BiDotsHorizontalRounded />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu id="download_dropdown">
                                                <NavLink className="profile_page_list download" onClick={() => handleImageClick(image)}>
                                                    <div className="inner_pages_list">
                                                        <div className="main_menu_name">View & Download</div>
                                                    </div>
                                                </NavLink>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>

            </div>
            <Modal size="lg" show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding qccompimages">
                    <div className="modal_close_button" onClick={handleCloseModal}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={IndustryImage} alt="Selected" className="w-100 border_industry_image" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-add mvs_top" onClick={handleDownload}><BsDownload /> Download</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}