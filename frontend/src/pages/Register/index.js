import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'
import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    console.log({
      name,
      email,
      whatsapp,
      city,
      uf
    })

    try {
      const response = await api.post('/ongs', data);
      alert(`Your access id is: ${response.data.id}`)
      history.push('/');
    } catch (err) {
      alert("Error! Try again!");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e
            ajude as pessoas a encontrarem os casos da sua ONG
          </p>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={event => setWhatsapp(event.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={event => setUf(event.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
