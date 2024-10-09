import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';

// Higher-Order Component to fetch data
// Higher-Order Component to fetch data from a URL and pass it to the wrapped component
const DataFetcher = (url) => (WrappedComponent) => {
    return (props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [data, setData] = useState(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [loading, setLoading] = useState(true);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [error, setError] = useState(null);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(url);
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };

            fetchData();
        }, [url]); // The effect will run again if the URL changes

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        // Pass the fetched data to the wrapped component
        return <WrappedComponent dataFetcherResponse={data} {...props} />;
    };
};
export default DataFetcher;
