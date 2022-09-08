import {useCallback, useEffect, useState} from "react";

function useImageApi() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImages = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://picsum.photos/v2/list');
            const data = await response.json();
            setImages(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(
        () => {
            fetchImages()
        }
        , []
    );

    return {images, loading, error, fetchImages};
}

export default useImageApi;