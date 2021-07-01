import { useParams } from "react-router";

function Question() {
    const { id } = useParams<{id?: string | undefined}>();

    return <h1>{id}</h1>
}

export default Question;