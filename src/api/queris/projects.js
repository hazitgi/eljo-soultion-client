import { gql } from "@apollo/client";
export const FETCH_PROJECTS = gql`
  query Projects {
    projects {
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
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
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
  }
`;

export const DELETE_PROJECT = gql`
  mutation RemoveProject($removeProjectId: Int!) {
    removeProject(id: $removeProjectId) {
      id
      message
    }
  }
`;
