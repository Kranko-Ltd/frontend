import { gql } from "@apollo/client";

const GET_ROLE = gql`
  query {
    me {
      role {
        name
      }
    }
  }
`;
const GET_USER_PROFILE = gql`
  query {
    professionalDetails {
      attributes
    }
  }
`;

export { GET_ROLE };
