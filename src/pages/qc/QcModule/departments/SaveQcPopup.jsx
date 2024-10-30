import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { IoSave } from "react-icons/io5";
import { AiFillFile } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from 'react-bootstrap/Spinner';

export default function SaveQcPopup() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleShowModal = () => {
        setLoading(true);
        setTimeout(() => {
            setShowModal(false);
            setShowModal(true);
        }, 500);
    };
    const handleSubmit = () => {
        setShowModal(false);
        setLoading(false);
    };
    const handlePopupClose = () => {
        setShowModal(false);
        setLoading(false);
    }
    return (
        <div>
            <div className="floating_save_btn">
                <button className="btn btn-add" onClick={handleShowModal}>
                    {isLoading ? <Spinner animation="border" variant="light" size="sm" className="right_spinner" /> : <IoSave />} Save
                </button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding">
                    <div className="modal_close_button" onClick={handlePopupClose}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="show_only_in_desktop">

                                <div className="dragger cameras">
                                    <label className="fixed_flex camera">
                                        <div className="camera_open"><AiFillCamera /></div>
                                        <h2 className="camera_open_text take_photo">Take Photo from here</h2>
                                        <p>You can add maximum of four images.</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
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
                                                <div className="cmt_icon_box closes">
                                                    <AiOutlineClose />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label className="add_emp_label">Comment</label>
                            <textarea className="form-control emp_select textareas" rows="10" placeholder="Enter Reason" />
                        </div>
                    </div>
                    <div className="mt_submit">
                        <Button className="modal_btn cancel" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}
























