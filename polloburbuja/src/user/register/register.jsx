import Layout from '../../layout.jsx'

function Register() {
  return (
    <Layout>
      <div className='register_container'>
        <h3>Ingrese su nombre:</h3>
        <input type='text' placeholder="Nombre" className='input_register_nombre'></input>

        <h3>Ingrese su apellido:</h3>
        <input type="password" placeholder='Apellido' className='input_register_apellido'></input>
        
        <h3>Ingrese su correo electrónico:</h3>
        <input type='text' placeholder='Correo Electrónico' className='input_register_correo'></input>

        <h3>Ingrese su contraseña:</h3>
        <input type="password" placeholder='Contraseña' className='input_register_contraseña'></input>
        
        <label for="miCheckpoint">Acepto los terminos y condiciones:</label>
        <input type="checkbox" id="miCheckpoint" name="miCheckpoint" value="check"></input>
        
        <button type = "submit" className='boton_register'>
          Registrarse
        </button>

      </div>
    </Layout>
  )
}

export default Register;