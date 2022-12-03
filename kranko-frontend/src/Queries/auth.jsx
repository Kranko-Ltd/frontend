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
      data {
        id
        attributes {
          certification_link
          Years_of_experience
          Field_of_specialisation
          image_url
          user
          role
          email
        }
      }
    }
  }
`;

export { GET_ROLE, GET_USER_PROFILE };
