import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

// GraphQL Mutation to create a book
const CREATE_Catalog = gql`
 mutation($catalogId:Float!,$catalogName:String!){
  createCatalog(catalogId:$catalogId,catalogName:$catalogName){
    
    catalogName
    
  }
}
`;

const AddCatalog = () => {
    const [catalogId, setCatalogId] = useState(0);
    const [catalogName, setCatalogName] = useState('');


    const [createCatalog, { data, loading, error }] = useMutation(CREATE_Catalog);

    const handleSubmit = (e) => {
        e.preventDefault();
        createCatalog({ variables: { catalogId,catalogName} });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Add a Catalog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Catalog Id</label>
                    <input type="number"value={catalogId} onChange={(e) => setCatalogId(e.target.value)} />
                </div>
                <div>
                    <label>Catalog Name</label>
                    <input value={catalogName} onChange={(e) => setCatalogName(e.target.value)} />
                </div>

                <button type="submit">Add Catalog</button>
            </form>

            {data && (
                <p>
                    Book created: <strong>{data.createBook.title}</strong> by{' '}
                    {data.createCatalog.catalog.catalogId}
                </p>
            )}
        </div>
    );
};

export default AddCatalog;
