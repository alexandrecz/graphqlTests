import { useQuery, gql } from "@apollo/client";

const GET_APPOINTMENTS = gql`
  query {
    appointments {
      title
      customer {
        name
      }
    }
  }
`;

export const useAppointments = () => {
  const { error, data, loading } = useQuery(GET_APPOINTMENTS);

  return {
    error,
    data,
    loading,
  };
};
