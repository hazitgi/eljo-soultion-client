/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { orderSchema } from "../../../lib/schame";
import { Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import client from "../../../api/graphql";
import { FETCH_PROJECTS } from "../../../api/queris/projects";
import { signType } from "../../../pages/Orders/signType";
import toast from "react-hot-toast";
import { UPDATE_WORK_ORDERS } from "../../../api/queris/order";

export default function UpdateOrder({ order, setOrders }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // Handlers to open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  useEffect(() => {}, [order]);
  const handleOrderUpdate = async (values) => {
    try {
      const response = await client.mutate({
        mutation: UPDATE_WORK_ORDERS,
        variables: {
          updateWorkOrderDto: {
            ...values,
            mode: values.mode.toUpperCase(),
            projectId: parseInt(values.projectId),
            quantity: parseInt(values.quantity),
          },
          updateWorkOrderId: order.id,
        },
      });
      const { updateWorkOrder } = response.data;

      setOrders((prev) => {
        const data = prev.map((order) => {
          if (order.id == updateWorkOrder.id) {
            return updateWorkOrder;
          } else {
            return order;
          }
        });
        return data;
      });
      toast.success("Order Updated successfully");
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
  useEffect(() => {
    if (order) {
      setValue("sign_type", order?.sign_type);
      setValue("quantity", order?.quantity.toString());
      setValue("projectId", order?.projectId.toString());
      setValue("mode", order?.mode);
    }
  }, [order]);

  
  return (
    <>
      <button
        onClick={handleShowModal}
        className="btn btn-sm btn-outline-primary"
        title="Edit"
      >
        <Pencil size={16} />
      </button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label>Choose Signup Type</Form.Label>
              <Form.Select {...register("sign_type")}>
                <option value={watch("sign_type")} selected>
                  {watch("sign_type")}
                </option>
                {signType?.map((t, I) => (
                  <>
                    {watch("sign_type") !== t && (
                      <>
                        <option key={t + I} value={t}>
                          {t}
                        </option>
                      </>
                    )}
                  </>
                ))}
              </Form.Select>
              {errors.sign_type && (
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
                <small className="text-danger">{errors.quantity.message}</small>
              )}
            </Form.Group>
            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label>Choose Project</Form.Label>
              <Form.Select {...register("projectId")}>
                <option value={watch("projectId")} selected>
                  {
                    projects?.find(
                      (project) => project?.id == watch("projectId")
                    )?.project_name
                  }
                </option>
                {projects?.map((t, I) => (
                  <>
                    {watch("projectId") !== t.id && (
                      <>
                        <option key={t.id + I} value={t.id}>
                          {t.project_name}
                        </option>
                      </>
                    )}
                  </>
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
                <option value={watch("mode")} selected>
                  {watch("mode")}
                </option>
                {["FULL", "PARTIAL"]?.map((t, I) => (
                  <>
                    {watch("mode") !== t && (
                      <>
                        <option key={t + I} value={t}>
                          {t}
                        </option>
                      </>
                    )}
                  </>
                ))}
                {/* <option value={"PENDING"}>PENDING</option> */}
              </Form.Select>
              {errors.mode && ( // Display validation error
                <small className="text-danger">{errors.mode.message}</small>
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
            onClick={handleSubmit(handleOrderUpdate)} // Proper validation handling
            // onClick={() => formRef.current?.submit()}
          >
            {!loading ? "Save Changes" : "Loading.."}
          </Button>
        </div>
      </Modal>
    </>
  );
}
