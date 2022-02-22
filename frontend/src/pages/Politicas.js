import '../styles/components/pages/Politicas.css';

const PoliticasPage = (props) => {
    return(
        <main>
            <section className='contenedor1'>
                <div className='politicas'>
                    <h2>Politicas de uso</h2>
                    <p>Los textos escritos provienen de fuentes oficiales de organismos como la NASA.</p>
                    <p>Es permitido el uso de estos textos si lo desean o requieren.</p>
                    <p>Las imagenes provienen de autores ajenos al proyecto, se les da el respectivo agradecimiento y reconocimeinto al respecto. Se solicita en caso de emplear alguna imagen se agradezca de la misma forma.</p>
                </div>
            </section>
            <section className='contenedor2'>
                <div className='importante'>
                    <h2>Información importante</h2>
                    <h5>Antes que nada quisiera aclarar que esta pagina web fue creada como trabajo integrador final.</h5>
                    <p>Por lo dicho arriba solicito que se comprenda que no hay ninguna asosiacion astronomica trabajando detras de estre proyecto. El mismo fue realizado por mi debido a mis intereses en la astronomia y el poder aprobar el trabajo final de una forma creativa e interesante.</p>
                    <p>Desde ya agradezco que llegue hasta esta parte.</p> 
                </div>
                <div className="final">
                    <h4>¡Gracias por llegar hasta aca!</h4>
                    <img src="imagenes/byebyeastronaut.png" className="astronautbyebye"/>
                </div>
            </section>
        </main>
    );
};

export default PoliticasPage;