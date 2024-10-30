import { useEffect, useState } from "react";
import "./QcModule.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LetterMoulding from "../QcModule/departments/LetterMoulding";
// import MetalFabrication from "../QcModule/departments/MetalFabrication";
// import CNCLaserCutting from "../QcModule/departments/CncLaserCutting";
// import Sanding from "../QcModule/departments/Sanding";
// import Painting from "../QcModule/departments/Painting";
// import VinylGraphics from "../QcModule/departments/VinylGraphics";
// import Acrylic from "../QcModule/departments/Acrylic";
// import Electricals from "../QcModule/departments/Electricals";
// import Polishing from "../QcModule/departments/Polishing";
// import Packaging from "../QcModule/departments/Packaging";
// import OutsourcedMaterials from "../QcModule/departments/OutsourcedMaterials";
import SaveQcPopup from "../QcModule/departments/SaveQcPopup";
import FilesSection from "../QcModule/departments/FilesSection";
import { RiReplyFill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import CommentOneImg from "../../../assets/images/comments1.png";
import client from "../../../api/graphql";
import { GET_WORK_ORDERS } from "../../../api/queris/order";

export default function QcModule() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [workOrders, setWorkOrders] = useState();

  const fetchWorkOrder = async () => {
    const params = new URLSearchParams(window.location.search);
    const response = client.query({
      query: GET_WORK_ORDERS,
      variables: {
        workOrderId: Number(params.get("id")),
      },
    });
    const { workOrder } = (await response).data;
    setWorkOrders(workOrder);
  };

  useEffect(() => {
    fetchWorkOrder();
  }, []);

  const groupedChecklist = Object.values(
    workOrders?.qcChecklist?.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          category: item.category,
          parameters: [],
        };
      }

      acc[item.category].parameters.push({
        id: item.id,
        parameter: item.parameter,
        status: item.status,
        comments: item.comments,
        created_at: item.created_at,
        updated_at: item.updated_at,
      });

      return acc;
    }, {}) ?? []
  );

  console.log(groupedChecklist);

  return (
    <div className="page_container ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page_title">Qc Module</div>
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
                        <span className="left_bri_gap">
                          BRI UAE-J7775-01-24
                        </span>
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
                        <span className="left_bri_gap">
                          BRI UAE-J7775-01-24
                        </span>
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
                {groupedChecklist?.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin"
                  >
                    <div className="letter_moulding_box">
                      <LetterMoulding item={item} />
                    </div>
                  </div>
                ))}
                {/* <div className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin">
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
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 teninch_tablet_view">
              <div className="row mt_workorder">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="check_history_box">
                    <div className="check_history_heading">Comments</div>
                    <div className="check_history_content">
                      <div className="comments_main_box">
                        <div className="comments_img">
                          <img
                            src={CommentOneImg}
                            alt="comments"
                            className=""
                          />
                        </div>
                        <div className="comments_name_reply_box">
                          <div className="name_time_reply_box">
                            <div className="left_time_box">
                              <div className="cmt_name_box">David Warner</div>
                              <div className="cmt_time_box">
                                Today at 3:30 PM
                              </div>
                            </div>
                            <div
                              className="right_time_box"
                              onClick={handleShow}
                            >
                              <div className="cmt_icon_box">
                                <RiReplyFill />
                              </div>
                            </div>
                          </div>
                          <div className="cmt_para_box">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt_workorder">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="check_history_box">
                    <div className="check_history_heading">Files</div>
                    <FilesSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SaveQcPopup />

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Body className="modal_body_padding">
            <div className="modal_close_button" onClick={handleClose}>
              <AiFillCloseCircle />
            </div>
            <div className="reason_collect">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <textarea
                    className="form-control emp_select height_reply"
                    type="text"
                    placeholder="Reply here.."
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button className="modal_btn cancel" onClick={handleClose}>
                Send
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
