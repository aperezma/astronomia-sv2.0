import '../styles/components/pages/Contacto.css'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
		nombre: '',
		email: '',
        telefono: '',
		mensaje: ''
	}
	const [sending, setSending] = useState(false);
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState(initialForm);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(oldData => ({
			...oldData,
			[name]: value
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setMsg('');
		setSending(true)
		const response = await
			axios.post(`http://localhost:3000/api/contacto`, formData);
		setSending(false);
		setMsg(response.data.message);
		if (response.data.error === false) {
			setFormData(initialForm)
		}
	}

    return (
        <section className="all">

        <div className="jeje">
            <h3>¡Escribinos!</h3>
            <p>Para nosotros es sumamente importante que nos comenten que temas quieren que esten en el sitio, o que temas les presentan dudas. Por eso te pedimos que llenes este formulario. Podes hacer la consulta de forma anonima y sin dejar un email para que sea respondida en el sitio, pero es recomendable que dejes la mayor informacion de contacto posible para que podamos contactarte y poder charlar un poco mas del tema que desarrolles en el mismo. </p>
            <p>Asi que ya sabes, gracias por pasar por el sitio y dejanos tu consulta o idea de articulo.</p>
            <p>¡Deja despegar las ideas!</p>
            <br />
            <br />
            <br />
            <form action="/contacto" method="post" onSubmit={handleSubmit}>
                <label for="nombre">Nombre:  </label>
                <input type="text" id="escrito" name="nombre" onChange={handleChange} value={formData.nombre}/><br/>
                <br />
                <br />
                <label for="email" >Email: </label>
                <input type="email" name="email" id="escrito" onChange={handleChange} value={formData.email}/><br/>
                <br/>
                <br/>
                <label for="texto">Escriba aqui su mensaje</label><br/>
                <br/>
                <textarea name="mensaje" rows="10" cols="40" onChange={handleChange} value={formData.mensaje}></textarea><br/>
                <br/>
                <br/>
                <br/>
                <input type="submit" value="¡Enviar!" className="botoncito" />
            </form>
            <br/>
            <br/>
            {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
        </div>
       
    </section>
  )   
}
export default ContactoPage;