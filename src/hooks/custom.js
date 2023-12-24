import useFetch from "./useFetch";

export default function Custom() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            <h2 className="title is-2">Custom Hook</h2>
            {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        </>
    );
}
