import { gql } from "@apollo/client";

// all list
export const GET_ALL_PRODUCT_DETAILS = gql`
  query {
    getProducts {
      id
      title
      price
      description
      category
      image
      rating {
        rate
        count
      }
    }
  }
`;

// name,image
export const GET_BASIC_DETAILS = gql`
  query {
    getProducts {
      id
      title
      image
    }
  }
`;
