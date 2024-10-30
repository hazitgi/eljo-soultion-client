import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

export default function Electricals() {
    const [showModal, setShowModal] = useState(false);
    const [IsYesOptionwithEdit, setIsYesOptionwithEdit] = useState(false);
    const [IsNoOptionwithEdit, setIsNoOptionwithEdit] = useState(false);
    const [YesNOGreenButton, setYesNOGreenButton] = useState(true);
    const handleShowEditOption = () => {
        setYesNOGreenButton(true);
        setIsYesOptionwithEdit(false);
        setIsNoOptionwithEdit(false);
    }
    const handleshowYesValue = () => {
        setIsYesOptionwithEdit(true);
        setYesNOGreenButton(false);
    }
    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleClosLMeModal = () => {
        setIsNoOptionwithEdit(true);
        setShowModal(false);
        setYesNOGreenButton(false);
    }
    const [showModal1, setShowModal1] = useState(false);
    const [IsYesOptionwithEdit1, setIsYesOptionwithEdit1] = useState(false);
    const [IsNoOptionwithEdit1, setIsNoOptionwithEdit1] = useState(false);
    const [YesNOGreenButton1, setYesNOGreenButton1] = useState(true);
    const handleShowEditOption1 = () => {
        setYesNOGreenButton1(true);
        setIsYesOptionwithEdit1(false);
        setIsNoOptionwithEdit1(false);
    }
    const handleshowYesValue1 = () => {
        setIsYesOptionwithEdit1(true);
        setYesNOGreenButton1(false);
    }
    const handleShowModal1 = () => {
        setShowModal1(true);
    }
    const handleCloseModal1 = () => {
        setShowModal1(false);
    }
    const handleClosLMeModal1 = () => {
        setIsNoOptionwithEdit1(true);
        setShowModal1(false);
        setYesNOGreenButton1(false);
    }
    const [showModal2, setShowModal2] = useState(false);
    const [IsYesOptionwithEdit2, setIsYesOptionwithEdit2] = useState(false);
    const [IsNoOptionwithEdit2, setIsNoOptionwithEdit2] = useState(false);
    const [YesNOGreenButton2, setYesNOGreenButton2] = useState(true);
    const handleShowEditOption2 = () => {
        setYesNOGreenButton2(true);
        setIsYesOptionwithEdit2(false);
        setIsNoOptionwithEdit2(false);
    }
    const handleshowYesValue2 = () => {
        setIsYesOptionwithEdit2(true);
        setYesNOGreenButton2(false);
    }
    const handleShowModal2 = () => {
        setShowModal2(true);
    }
    const handleCloseModal2 = () => {
        setShowModal2(false);
    }
    const handleClosLMeModal2 = () => {
        setIsNoOptionwithEdit2(true);
        setShowModal2(false);
        setYesNOGreenButton2(false);
    }
    const [showModal3, setShowModal3] = useState(false);
    const [IsYesOptionwithEdit3, setIsYesOptionwithEdit3] = useState(false);
    const [IsNoOptionwithEdit3, setIsNoOptionwithEdit3] = useState(false);
    const [YesNOGreenButton3, setYesNOGreenButton3] = useState(true);
    const handleShowEditOption3 = () => {
        setYesNOGreenButton3(true);
        setIsYesOptionwithEdit3(false);
        setIsNoOptionwithEdit3(false);
    }
    const handleshowYesValue3 = () => {
        setIsYesOptionwithEdit3(true);
        setYesNOGreenButton3(false);
    }
    const handleShowModal3 = () => {
        setShowModal3(true);
    }
    const handleCloseModal3 = () => {
        setShowModal3(false);
    }
    const handleClosLMeModal3 = () => {
        setIsNoOptionwithEdit3(true);
        setShowModal3(false);
        setYesNOGreenButton3(false);
    }
    const [showModal4, setShowModal4] = useState(false);
    const [IsYesOptionwithEdit4, setIsYesOptionwithEdit4] = useState(false);
    const [IsNoOptionwithEdit4, setIsNoOptionwithEdit4] = useState(false);
    const [YesNOGreenButton4, setYesNOGreenButton4] = useState(true);
    const handleShowEditOption4 = () => {
        setYesNOGreenButton4(true);
        setIsYesOptionwithEdit4(false);
        setIsNoOptionwithEdit4(false);
    }
    const handleshowYesValue4 = () => {
        setIsYesOptionwithEdit4(true);
        setYesNOGreenButton4(false);
    }
    const handleShowModal4 = () => {
        setShowModal4(true);
    }
    const handleCloseModal4 = () => {
        setShowModal4(false);
    }
    const handleClosLMeModal4 = () => {
        setIsNoOptionwithEdit4(true);
        setShowModal4(false);
        setYesNOGreenButton4(false);
    }


    return (
        <div>
            <div className="letter_moulding_heading">
                <div>Electricals </div>
                <div className="letter_mould_alert green"></div>
            </div>
            <div className="letter_moulding_content">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="depth_label">LED Brand</div>
                                {IsYesOptionwithEdit && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">Yes</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {IsNoOptionwithEdit && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">No</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {YesNOGreenButton && (
                                    <div className="yes_no_popup_box">
                                        <div className="yes_green_box" onClick={handleshowYesValue}>
                                            <div className="roler_flex">
                                                <div>Yes</div>
                                            </div>
                                        </div>
                                        <div className="no_red_box" onClick={handleShowModal}>
                                            <div className="roler_flex">
                                                <div>No</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="row mt_workorder">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="depth_label">KELVIN temperature</div>
                                {IsYesOptionwithEdit1 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">Yes</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption1}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {IsNoOptionwithEdit1 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">No</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption1}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {YesNOGreenButton1 && (
                                    <div className="yes_no_popup_box">
                                        <div className="yes_green_box" onClick={handleshowYesValue1}>
                                            <div className="roler_flex">
                                                <div>Yes</div>
                                            </div>
                                        </div>
                                        <div className="no_red_box" onClick={handleShowModal1}>
                                            <div className="roler_flex">
                                                <div>No</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="row mt_workorder">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="depth_label">Visual Checkup</div>
                                {IsYesOptionwithEdit2 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">Yes</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption2}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {IsNoOptionwithEdit2 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">No</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption2}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {YesNOGreenButton2 && (
                                    <div className="yes_no_popup_box">
                                        <div className="yes_green_box" onClick={handleshowYesValue2}>
                                            <div className="roler_flex">
                                                <div>Yes</div>
                                            </div>
                                        </div>
                                        <div className="no_red_box" onClick={handleShowModal2}>
                                            <div className="roler_flex">
                                                <div>No</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="depth_label">Verify Electircal Components</div>
                                {IsYesOptionwithEdit3 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">Yes</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption3}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {IsNoOptionwithEdit3 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">No</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption3}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {YesNOGreenButton3 && (
                                    <div className="yes_no_popup_box">
                                        <div className="yes_green_box" onClick={handleshowYesValue3}>
                                            <div className="roler_flex">
                                                <div>Yes</div>
                                            </div>
                                        </div>
                                        <div className="no_red_box" onClick={handleShowModal3}>
                                            <div className="roler_flex">
                                                <div>No</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="row mt_workorder">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="depth_label">Quantity</div>
                                {IsYesOptionwithEdit4 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">Yes</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption4}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {IsNoOptionwithEdit4 && (
                                    <div className="depth_label_yes_box">
                                        <div className="depth_label_yes">No</div>
                                        <div className="depth_label_edit" onClick={handleShowEditOption4}>
                                            <AiOutlineEdit />
                                        </div>
                                    </div>
                                )}
                                {YesNOGreenButton4 && (
                                    <div className="yes_no_popup_box">
                                        <div className="yes_green_box" onClick={handleshowYesValue4}>
                                            <div className="roler_flex">
                                                <div>Yes</div>
                                            </div>
                                        </div>
                                        <div className="no_red_box" onClick={handleShowModal4}>
                                            <div className="roler_flex">
                                                <div>No</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding">
                    <div className="modal_close_button" onClick={handleCloseModal}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div className="show_only_in_desktop">
                                    <div className="dragger cameras">
                                        <label className="fixed_flex camera">
                                            <div className="camera_open"><AiFillCamera /></div>
                                            <h2 className="camera_open_text">Take Photo from here</h2>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label className="add_emp_label">Reason</label>
                            <textarea className="form-control emp_select textareas" rows="10" placeholder="Enter Reason" />
                        </div>
                    </div>
                    <div className="">
                        <Button className="modal_btn cancel" onClick={handleClosLMeModal}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal1} onHide={handleCloseModal1} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding">
                    <div className="modal_close_button" onClick={handleCloseModal1}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div className="show_only_in_desktop">
                                    <div className="dragger cameras">
                                        <label className="fixed_flex camera">
                                            <div className="camera_open"><AiFillCamera /></div>
                                            <h2 className="camera_open_text">Take Photo from here</h2>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label className="add_emp_label">Reason</label>
                            <textarea className="form-control emp_select textareas" rows="10" placeholder="Enter Reason" />
                        </div>
                    </div>
                    <div className="">
                        <Button className="modal_btn cancel" onClick={handleClosLMeModal1}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding">
                    <div className="modal_close_button" onClick={handleCloseModal2}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div className="show_only_in_desktop">
                                    <div className="dragger cameras">
                                        <label className="fixed_flex camera">
                                            <div className="camera_open"><AiFillCamera /></div>
                                            <h2 className="camera_open_text">Take Photo from here</h2>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label className="add_emp_label">Reason</label>
                            <textarea className="form-control emp_select textareas" rows="10" placeholder="Enter Reason" />
                        </div>
                    </div>
                    <div className="">
                        <Button className="modal_btn cancel" onClick={handleClosLMeModal2}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal3} onHide={handleCloseModal3} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding">
                    <div className="modal_close_button" onClick={handleCloseModal3}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div className="show_only_in_desktop">
                                    <div className="dragger cameras">
                                        <label className="fixed_flex camera">
                                            <div className="camera_open"><AiFillCamera /></div>
                                            <h2 className="camera_open_text">Take Photo from here</h2>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label className="add_emp_label">Reason</label>
                            <textarea className="form-control emp_select textareas" rows="10" placeholder="Enter Reason" />
                        </div>
                    </div>
                    <div className="">
                        <Button className="modal_btn cancel" onClick={handleClosLMeModal3}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal4} onHide={handleCloseModal4} backdrop="static" keyboard={false} centered>
                <Modal.Body className="modal_body_padding">
                    <div className="modal_close_button" onClick={handleCloseModal4}>
                        <AiFillCloseCircle />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div className="show_only_in_desktop">
                                    <div className="dragger cameras">
                                        <label className="fixed_flex camera">
                                            <div className="camera_open"><AiFillCamera /></div>
                                            <h2 className="camera_open_text">Take Photo from here</h2>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label className="add_emp_label">Reason</label>
                            <textarea className="form-control emp_select textareas" rows="10" placeholder="Enter Reason" />
                        </div>
                    </div>
                    <div className="">
                        <Button className="modal_btn cancel" onClick={handleClosLMeModal4}>
                            Submit
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}















