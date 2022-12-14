import { gql } from "@apollo/client";
const CREATE_PROJECT_MUTATION = gql`
  mutation project_details($data: ProjectInput!) {
    createProject(data: $data) {
      data {
        id
        attributes {
          Project_name
          project_description
          project_status
          project_cost
          actual_cost
          professional_email
          client_email
          downpayment60
          client_id
          professional_id
          finalpayment40
          time_estimation
        }
      }
    }
  }
`;
export { CREATE_PROJECT_MUTATION };
