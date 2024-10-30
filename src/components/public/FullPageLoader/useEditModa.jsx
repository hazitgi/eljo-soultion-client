/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { employeeUpdateSchema } from "../../../lib/schame";
import { Pencil } from "lucide-react";
import { Button, Form, Modal } from "react-bootstrap";
import { UPDATE_USER } from "../../../api/queris/employees";
import toast from "react-hot-toast";
import client from "../../../api/graphql";

export default function UserUpdateModal({ setEmployees, employee }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // Handlers to open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(employeeUpdateSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    if (employee) {
      setValue("name", employee?.name);
      setValue("email", employee?.email);
    }
  }, [employee]);
  const handleUpdateEmployee = async (values) => {
    const payload = {
      updateUserDto: values,
      updateUserId: employee.id,
    };
    try {
      setLoading(true);
      const response = await client.mutate({
        mutation: UPDATE_USER,
        variables: payload,
      });
      const { updateUser } = response.data;
      setEmployees((prev) => {
        return prev.map((user) => {
          if (user.id == updateUser.id) {
            return updateUser;
          } else {
            return user;
          }
        });
      });
      setShowModal(false);
      toast.success("Employees updated successfully");
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("name")}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email")}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </Form.Group>

            {/* <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register("password")}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </Form.Group> */}
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
            onClick={handleSubmit(handleUpdateEmployee)} // Proper validation handling
            // onClick={() => formRef.current?.submit()}
          >
            {!loading ? "Save Changes" : "Loading.."}
          </Button>
        </div>
      </Modal>
    </>
  );
}
