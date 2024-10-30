/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { projectSchema } from "../../../lib/schame";
import { UPDATE_PROJECT } from "../../../api/queris/projects";
import toast from "react-hot-toast";
import client from "../../../api/graphql";

export default function ProjectEditModal({ project, setProject }) {
  const [showModal, setShowModal] = useState(false);

  // Handlers to open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    ...rest
  } = useForm({
    resolver: zodResolver(projectSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      status: "ACTIVE",
    },
  });

  const [loading, setLoading] = useState(false);
  const handleProjectEdit = async (values) => {
    console.log(values);
    try {
      console.log(values);
      values.status = values?.status?.toUpperCase();
      setLoading(true);
      const response = await client.mutate({
        mutation: UPDATE_PROJECT,
        variables: { input: { ...values, id: project.id } },
      });
      const { updateProject } = response.data;

      setProject((prev) => {
        const data = prev.map((project) => {
          if (project.id == updateProject.id) {
            return updateProject;
          } else {
            return project;
          }
        });
        return data;
      });
      toast.success("Project Updated successfully");
      handleCloseModal();
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (project) {
      // eslint-disable-next-line react/prop-types
      setValue("client_name", project?.client_name);
      // eslint-disable-next-line react/prop-types
      setValue("country", project?.country);
      // eslint-disable-next-line react/prop-types
      setValue("location", project?.location);
      // eslint-disable-next-line react/prop-types
      setValue("project_name", project?.project_name);
      // eslint-disable-next-line react/prop-types
      setValue("status", project?.status);
    }
  }, [project]);
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
          <Modal.Title>Update Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleProjectEdit)}>
            <Form.Group controlId="formRole" className="mt-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Project name"
                {...register("project_name")}
              />
              {errors.project_name && (
                <small className="text-danger">
                  {errors.project_name.message}
                </small>
              )}
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Client name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter client name"
                {...register("client_name")}
              />
              {errors.client_name && (
                <small className="text-danger">
                  {errors.client_name.message}
                </small>
              )}
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>country</Form.Label>
              <Form.Control
                type="text"
                {...register("country")}
                placeholder="Enter coutnry"
              />
              {errors.country && (
                <small className="text-danger">{errors.country.message}</small>
              )}
            </Form.Group>

            <Form.Group controlId="location" className="mt-3">
              <Form.Label>location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                {...register("location")}
              />
              {errors.location && (
                <small className="text-danger">{errors.location.message}</small>
              )}
            </Form.Group>

            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                {...register("status")}
                defaultValue={
                  rest.watch("status")?.charAt(0).toUpperCase() +
                  rest.watch("status")?.slice(1).toLowerCase()
                }
              >
                <option value={"ACTIVE"}>Active</option>
                <option value={"PENDING"}>PENDING</option>
              </Form.Select>
              {errors.status && ( // Display validation error
                <small className="text-danger">{errors.status.message}</small>
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
            onClick={handleSubmit(handleProjectEdit)} // Proper validation handling
            // onClick={() => formRef.current?.submit()}
          >
            {!loading ? "Save Changes" : "Loading.."}
          </Button>
        </div>
      </Modal>
    </>
  );
}
