import { useEffect, useState } from "react";
import { Pencil, Trash2, Ban } from "lucide-react";
import "./employee.css";
import { Button, Form, Modal } from "react-bootstrap";
import {
  CREATE_USER,
  DELETE_USER,
  FETCH_USER,
} from "../../api/queris/employees";
import client from "../../api/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema } from "../../lib/schame";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import UserUpdateModal from "../../components/public/FullPageLoader/useEditModa";

export default function Employees() {
  // Sample employee data

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // Handlers to open and close modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [employees, setEmployees] = useState([]);

  const findUsers = async () => {
    const response = await client.query({
      query: FETCH_USER,
      variables: { role: "qc_inspector" },
    });
    const { getUsers } = response.data;
    setEmployees(getUsers);
  };

  useEffect(() => {
    findUsers();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    ...rest
  } = useForm({
    resolver: zodResolver(employeeSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const hanldeRegisterEmployee = async (values) => {
    try {
      setLoading(true);
      const response = await client.mutate({
        mutation: CREATE_USER,
        variables: {
          createUserDto: {
            ...values,
            role: values?.role ? values.role : "QC_INSPECTOR",
          },
        },
      });
      const { createUser } = response.data;
      setEmployees([...employees, createUser]);
      setShowModal(false);
      toast.success("Employee added successfully");
      rest.reset();
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEmployee = async (id) => {
    console.log("🚀 ~ handleDeleteEmployee ~ id:", id);

    try {
      const { data } = await client.mutate({
        mutation: DELETE_USER,
        variables: { removeUserId: id },
      });
      const { removeUser } = data;
      console.log("🚀 ~ handleDeleteEmployee ~ removeUser:", removeUser);
      if (removeUser) {
        console.log("🚀 ~ handleDeleteEmployee ~ removeUser:", removeUser);

        setEmployees(employees.filter((item) => item.id != id));
        toast.success("Employees deleted successfully");
      }
    } catch (err) {
      toast.error(err?.errors?.message || err.message);
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
                  <div className="page_title">Employee List</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                  <button className="btn btn-primary" onClick={handleShowModal}>
                    Add New User
                  </button>
                </div>
              </div>
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Employee</Modal.Title>
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
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
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
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        {...register("password")}
                      />
                      {errors.password && (
                        <small className="text-danger">
                          {errors.password.message}
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
                    onClick={handleSubmit(hanldeRegisterEmployee)} // Proper validation handling
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
                      <th className="tab_mobile_120">SI No</th>
                      <th className="tab_mobile_150">Name</th>
                      <th className="tab_mobile_200">Email</th>
                      <th className="tab_mobile_150">Role</th>
                      <th className="tab_mobile_150">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={employee.id}>
                        <td>{index + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.role}</td>
                        <td>
                          <div className="d-flex gap-2">
                            <UserUpdateModal
                              employee={employee}
                              setEmployees={setEmployees}
                            />
                            <button
                              className="btn btn-sm btn-outline-danger"
                              title="Delete"
                              onClick={() => handleDeleteEmployee(employee?.id)}
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
