import { gql } from "@apollo/client";
const GET_PROJECTS = gql`
  query {
    projects(pagination: { limit: 100 }) {
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
          client_name
          downpayment60_status
          finalpayment40_status
          professional_name
          publishedAt
        }
      }
    }
  }
`;
export { GET_PROJECTS };
