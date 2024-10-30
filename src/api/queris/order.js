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
  query WorkOrders {
    workOrders {
      id
      work_order_number
      projectId
      sign_type
      quantity
      mode
      status
      assignee {
        id
        name
        email
        resetToken
        resetTokenExpiry
        role
        created_at
        updated_at
      }
      created_at
      updated_at
      project {
        id
        project_number
        project_name
        location
        client_name
        country
        status
        created_at
        updated_at
      }
      qcChecklist {
        id

        category
        parameter
        status
        comments
        created_at
        updated_at
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

export const GET_WORK_ORDERS = gql`
  query WorkOrder($workOrderId: Int!) {
    workOrder(id: $workOrderId) {
      id
      work_order_number
      projectId
      sign_type
      quantity
      mode
      status
      assignee {
        id
        name
        email
        resetToken
        resetTokenExpiry
        role
        created_at
        updated_at
      }
      created_at
      updated_at
      project {
        id
        project_number
        project_name
        location
        client_name
        country
        status
        created_at
        updated_at
      }
      qcChecklist {
        id

        category
        parameter
        status
        comments
        created_at
        updated_at
      }
    }
  }
`;

export const ASSIGN_WORK_ORDER = gql`
  mutation AssignWorkOrder($assignWorkOrderInput: AssignWorkOrderInput!) {
    assignWorkOrder(assignWorkOrderInput: $assignWorkOrderInput) {
      id
      work_order_number
      projectId
      sign_type
      quantity
      mode
      status
      assignee {
        id
        name
        email
        resetToken
        resetTokenExpiry
        role
        created_at
        updated_at
      }
      created_at
      updated_at
      project {
        id
        project_number
        project_name
        location
        client_name
        country
        status
        created_at
        updated_at
      }
      qcChecklist {
        id

        category
        parameter
        status
        comments
        created_at
        updated_at
      }
    }
  }
`;
