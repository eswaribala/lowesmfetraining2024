import React from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL Query to get all authors
const GET_CATALOGS = gql`
  query GetCatalogs {
    catalogs {
      catalogId
    }
  }
`;

const Catalogs = () => {
    const { loading, error, data } = useQuery(GET_CATALOGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Catalogs</h2>
            <ul>
                {data.catalogs.map((catalog) => (
                    <li key={catalog.catalogId}>
                        <strong>{catalog.catalogName}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalogs;
