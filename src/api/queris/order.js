import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation CreateWorkOrder($createWorkOrderDto: CreateWorkOrderDto!) {
    createWorkOrder(createWorkOrderDto: $createWorkOrderDto) {
      id
      work_order_number
      projectId
      sign_type
      quantity
      mode
      created_at
      updated_at
      project {
        project_number
      }
    }
  }
`;

export const FETCH_ORDERS = gql`
  query Query {
    workOrders {
      id
      work_order_number
      projectId
      sign_type
      quantity
      mode
      created_at
      updated_at
      project {
        project_number
      }
    }
  }
`;

export const UPDATE_WORK_ORDERS = gql`
  mutation UpdateWorkOrder(
    $updateWorkOrderDto: CreateWorkOrderDto!
    $updateWorkOrderId: Int!
  ) {
    updateWorkOrder(
      updateWorkOrderDto: $updateWorkOrderDto
      id: $updateWorkOrderId
    ) {
      id
      work_order_number
      projectId
      sign_type
      quantity
      mode
      created_at
      updated_at
      project {
        project_number
      }
    }
  }
`;

export const DELETE_WORK_ORDER = gql`
  mutation RemoveWorkOrder($removeWorkOrderId: Int!) {
    removeWorkOrder(id: $removeWorkOrderId) {
      message
      id
    }
  }
`;
