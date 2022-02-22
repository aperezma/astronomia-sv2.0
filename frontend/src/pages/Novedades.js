import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/Novedades.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() =>{
        const cargarNovedades = async () =>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return(
        <section className="holder main">
            <div className="titulo"><h2>¡NOVEDADES!</h2>
            <br/>
            <br/>
            </div>
            {loading ? (
            <p>Cargando...</p>
        ) : (
            novedades.map(item => <NovedadItem key= {item.id}
            title= {item.titulo} subtitle= {item.subtitulo}
            imagen={item.imagen} body={item.cuerpo}/>))}
        </section>
        
    );
}

export default NovedadesPage;