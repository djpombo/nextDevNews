import { useEffect, useState } from "react"
import SEO from "../../components/SEO";

export default function Cursos() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        handleConnNextApi();
    }, []);

    async function handleConnNextApi() {
        const url = 'http://localhost:3000/api/courses';
        const res = await fetch(url);
        const json = await res.json();
        setCursos(json);


    }
    return (
        <div>
            <SEO title="Cursos"/>
            <h1>Cursos: </h1>
            <p>cursos ministrados</p>
            <ul>
                {cursos && cursos.map(curso => {
                    return (
                        <li key={curso.id}>{curso.name}</li>
                    )
                })}
            </ul>
        </div>
    )

}