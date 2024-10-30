import { useEffect, useRef, useState } from "react";
import { Trash2 } from "lucide-react";
import "./project.css";
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECTS,
} from "../../api/queris/projects";
import client from "../../api/graphql";
import { format } from "date-fns";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "../../lib/schame";
import toast from "react-hot-toast";
import ProjectEditModal from "../../components/public/FullPageLoader/projectEditModal";

export default function Orders() {
  const [projects, setProject] = useState([]);

  const findProjects = async () => {
    const response = await client.query({
      query: FETCH_PROJECTS,
    });
    const { projects } = response.data;
    setProject(projects);
  };

  const deleteProject = async (id) => {
    try {
      const response = await client.mutate({
        mutation: DELETE_PROJECT,
        variables: { removeProjectId: id },
      });
      const { removeProject } = response.data;
      setProject(projects.filter((project) => project.id !== removeProject.id));
      toast.success("Project deleted successfully");
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    }
  };

  useEffect(() => {
    findProjects();
  }, []);
  // Sample employee data

  const [showModal, setShowModal] = useState(false);

  // Handlers to open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [loading, setLoading] = useState(false);
  const handleProjectAdd = async (values) => {
    try {
      console.log(values);
      values.status = values?.status?.toUpperCase();
      setLoading(true);
      const response = await client.mutate({
        mutation: CREATE_PROJECT,
        variables: { input: values },
      });
      const { createProject } = response.data;
      setProject([...projects, createProject]);
      toast.success("Project added successfully");
      handleCloseModal();
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(projectSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      status: "Active",
    },
  });
  console.log(errors);

  const formRef = useRef(null);
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
                  <div className="page_title">Projcts List</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                  <button className="btn btn-primary" onClick={handleShowModal}>
                    Add New Project
                  </button>
                </div>
              </div>
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form ref={formRef} onSubmit={handleSubmit(handleProjectAdd)}>
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
                        <small className="text-danger">
                          {errors.country.message}
                        </small>
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
                        <small className="text-danger">
                          {errors.location.message}
                        </small>
                      )}
                    </Form.Group>

                    <Form.Group controlId="formStatus" className="mt-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        {...register("status")}
                        defaultValue={"Active"}
                      >
                        <option value={"ACTIVE"}>Active</option>
                        <option value={"PENDING"}>PENDING</option>
                      </Form.Select>
                      {errors.status && ( // Display validation error
                        <small className="text-danger">
                          {errors.status.message}
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
                    variant="primary"
                    // type="submit"
                    style={{ background: "blue" }}
                    onClick={handleSubmit(handleProjectAdd)} // Proper validation handling
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
                      <th className="">SI No</th>
                      <th className="">Project Name</th>
                      <th className="">Project Number</th>
                      <th className="">Country</th>
                      {/* <th className="_150">Location</th> */}
                      <th className="">client_name</th>
                      <th className="">Status</th>
                      <th className="">Created On</th>
                      <th className="">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.project_name}</td>
                        <td>{item.project_number}</td>
                        <td>{item.country}</td>
                        {/* <td>{item.location}</td> */}
                        <td>{item.client_name}</td>
                        <td>{item.status}</td>
                        <td>
                          {item.created_at && format(item.created_at, "PPP")}
                        </td>

                        <td>
                          <div className="d-flex gap-2">
                            <ProjectEditModal
                              project={item}
                              setProject={setProject}
                            />
                            {/* <button
                              className="btn btn-sm btn-outline-primary"
                              title="Edit"
                            >
                              <Pencil size={16} />
                            </button> */}
                            <button
                              onClick={() => deleteProject(item.id)}
                              className="btn btn-sm btn-outline-danger"
                              title="Delete"
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
