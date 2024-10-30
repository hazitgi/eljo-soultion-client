import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($createUserDto: CreateUserDto!) {
    createUser(createUserDto: $createUserDto) {
      id
      name
      email
      resetToken
      resetTokenExpiry
      role
      created_at
      updated_at
    }
  }
`;

export const FETCH_USER = gql`
  query GetUsers($role: String, $name: String) {
  getUsers(role: $role, name: $name) {
    id
    name
    email
    resetToken
    resetTokenExpiry
    role
    created_at
    updated_at
  }
}
`;

export const UPDATE_USER = gql`
  mutation Mutation($updateUserDto: UpdateUserDto!, $updateUserId: Float!) {
    updateUser(updateUserDto: $updateUserDto, id: $updateUserId) {
      id
      name
      email
      resetToken
      resetTokenExpiry
      role
      created_at
      updated_at
    }
  }
`;

export const DELETE_USER = gql`
  mutation RemoveUser($removeUserId: Float!) {
    removeUser(id: $removeUserId)
  }
`;
