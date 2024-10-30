import "./task.css";
import LetterMoulding from "../qc/QcModule/departments/LetterMoulding";
import "../qc/QcModule/QcModule.css";
import client from "../../api/graphql";
import { GET_WORK_ORDERS } from "../../api/queris/order";
import { useEffect, useState } from "react";

const Task = () => {
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

  const groupedChecklist =
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
    }, {}) ?? [];

  console.log("🚀 ~ Task ~ groupedChecklist:", Object.values(groupedChecklist));

  return (
    <>
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page_title">Work order</div>
            </div>
          </div>
        </div>
        <div className="row ">
          {Object.values(groupedChecklist)?.map((group, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-sm-12 bottom_mould_margin"
            >
              <div className="letter_moulding_box">
                <LetterMoulding item={group} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Task;
