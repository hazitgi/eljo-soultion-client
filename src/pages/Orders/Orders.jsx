import { Pencil, Trash2, Ban } from "lucide-react";
import "./order.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema } from "../../lib/schame";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { signType } from "./signType";
import { FETCH_PROJECTS } from "../../api/queris/projects";
import client from "../../api/graphql";
import { format } from "date-fns";
import toast from "react-hot-toast";
import {
  CREATE_ORDER,
  DELETE_WORK_ORDER,
  FETCH_ORDERS,
} from "../../api/queris/order";
import UpdateOrder from "../../components/public/FullPageLoader/updateOrderModal";
import { Link } from "react-router-dom";
export default function Orders() {
  // Sample employee data
  const [orders, setOrders] = useState([]);

  const findOrders = async () => {
    const response = await client.query({
      query: FETCH_ORDERS,
    });
    const { workOrders } = response.data;
    setOrders(workOrders);
  };
  useEffect(() => {
    findOrders();
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // Handlers to open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleOrderAdd = async (value) => {
    value.quantity = Number(value.quantity);
    value.projectId = Number(value.projectId);
    console.log("🚀 ~ handleOrderAdd ~ value:", value);
    try {
      setLoading(true);
      const payload = {
        createWorkOrderDto: {
          ...value,
        },
      };
      const response = await client.mutate({
        mutation: CREATE_ORDER,
        variables: payload,
      });
      const { createWorkOrder } = response.data;
      setOrders([
        ...orders,
        {
          work_order_number: createWorkOrder.work_order_number,
          project: { project_number: createWorkOrder.project?.project_number },
          sign_type: createWorkOrder?.sign_type,
          quantity: createWorkOrder?.quantity,
          mode: createWorkOrder?.mode,
        },
      ]);
      toast.success("Order added successfully!");
      handleCloseModal();
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  const [projects, setProject] = useState([]);

  const findProjects = async () => {
    const response = await client.query({
      query: FETCH_PROJECTS,
    });
    const { projects } = response.data;
    setProject(projects);
  };
  useEffect(() => {
    findProjects();
  }, []);

  const deleteWorkOrder = async (id) => {
    try {
      setLoading(true);
      let response = await client.mutate({
        mutation: DELETE_WORK_ORDER,
        variables: {
          removeWorkOrderId: id,
        },
      });
      const { removeWorkOrder } = response.data;
      setOrders(orders.filter((o) => o.id !== removeWorkOrder.id));
      toast.success(removeWorkOrder.message);
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="page_container">
      <div className="container-fluid">
        <section className="desktop_table">
          <div className="row">
            <div className="col-12">
              <div
                className="row align-items-center "
                style={{ marginTop: 60 }}
              >
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="page_title">Order List</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                  <button
                    onClick={handleShowModal}
                    className="btn btn-primary"
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                  >
                    Create new Order
                  </button>
                </div>
              </div>
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Create New Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formStatus" className="mt-3">
                      <Form.Label>Choose Signup Type</Form.Label>
                      <Form.Select {...register("sign_type")}>
                        <option value="" disabled selected>
                          Select Signup Type
                        </option>
                        {signType?.map((t, I) => (
                          <option key={t + I} value={t}>
                            {t}
                          </option>
                        ))}
                        {/* <option value={"PENDING"}>PENDING</option> */}
                      </Form.Select>
                      {errors.sign_type && ( // Display validation error
                        <small className="text-danger">
                          {errors.sign_type.message}
                        </small>
                      )}
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                      <Form.Label>Enter Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Qty"
                        {...register("quantity")}
                      />
                      {errors.quantity && (
                        <small className="text-danger">
                          {errors.quantity.message}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formStatus" className="mt-3">
                      <Form.Label>Choose Project</Form.Label>
                      <Form.Select {...register("projectId")}>
                        <option value="" disabled selected>
                          Select Project
                        </option>
                        {projects?.map((t, I) => (
                          <option key={t.id + I} value={t.id}>
                            {t.project_name}
                          </option>
                        ))}
                        {/* <option value={"PENDING"}>PENDING</option> */}
                      </Form.Select>
                      {errors.projectId && ( // Display validation error
                        <small className="text-danger">
                          {errors.projectId.message}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formStatus" className="mt-3">
                      <Form.Label>Choose Mode</Form.Label>
                      <Form.Select {...register("mode")}>
                        <option value="" disabled selected>
                          Select Mode
                        </option>
                        {["FULL", "PARTIAL"]?.map((t, I) => (
                          <option key={t + I} value={t}>
                            {t}
                          </option>
                        ))}
                        {/* <option value={"PENDING"}>PENDING</option> */}
                      </Form.Select>
                      {errors.mode && ( // Display validation error
                        <small className="text-danger">
                          {errors.mode.message}
                        </small>
                      )}
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 4,
                    padding: 5,
                  }}
                >
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button
                    disabled={loading}
                    variant="secondary"
                    // type="submit"
                    style={{ background: "blue" }}
                    onClick={handleSubmit(handleOrderAdd)} // Proper validation handling
                    // onClick={() => formRef.current?.submit()}
                  >
                    {!loading ? "Save Changes" : "Loading.."}
                  </Button>
                </div>
              </Modal>
              <div className="table-responsive main_datatable">
                <table
                  className="table custom_datatable"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th className="">Work Order Number</th>
                      <th className="">Project Number</th>
                      <th className="">Sign Type</th>
                      <th className="">Quantity</th>
                      <th className="">Mode</th>
                      <th className="">Created At</th>
                      <th className="">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => (
                      <tr key={item.id + index}>
                        <td>
                          <Link to={`/addTask?id=${item.id}`}>
                            {item?.work_order_number}
                          </Link>
                        </td>
                        <td>{item?.project.project_number}</td>
                        <td>{item?.sign_type}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.mode}</td>
                        <td>
                          {item?.created_at && format(item?.created_at, "PPP")}
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <UpdateOrder order={item} setOrders={setOrders} />
                            <button
                              className="btn btn-sm btn-outline-danger"
                              title="Delete"
                              onClick={() => deleteWorkOrder(item.id)}
                            >
                              <Trash2 size={16} />
                            </button>
                            {/* <button
                              className="btn btn-sm btn-outline-warning"
                              title="Block"
                            >
                              <Ban size={16} />
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
