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

export {GET_ROLE}