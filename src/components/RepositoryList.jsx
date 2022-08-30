import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss';
import { useState,  useEffect } from "react";

// https://api.github.com/users/pedrosantb/repos

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/Rocketseat/repos').then(response => response.json())
        .then(data => setRepositories(data)) 
    }, []);

    

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}            
            </ul>
        </section>
    );
}