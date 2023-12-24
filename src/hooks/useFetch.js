import { useEffect, useState } from "react";

const useFetch = url => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setData(data.filter(d => d.id < 10)));
    }, [url]);

    return [data];
};

export default useFetch;
