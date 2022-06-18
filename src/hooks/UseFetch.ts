import { useState, useEffect, useCallback } from 'react';
import axios from '../api/baseApi';

const useAxios = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);
    const resetError = useCallback(
        () => setError(''), [error],
    );

    type IFetch = {
        url: string,
        method: string,
    }

    const fetchData = ({ url, method }: IFetch) => {
        setloading(true);
        axios({
            method: method,
            url: url,
        }).then(({ data }) => setResponse(data))
            .catch((err) => {
                setError(err);
            })
            .finally(() => setloading(false));
    };

    useEffect(() => {

        return () => {

        };
    }, [response, error, loading]);

    return { response, error, loading, fetchData, resetError };
};

export { useAxios };