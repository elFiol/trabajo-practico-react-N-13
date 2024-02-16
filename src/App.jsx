import { Button, Container, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Resultados from "./components/Resultados"
import { useState } from 'react'

function App() {
  const [mostrarSpinner, setMostrarSpinner] = useState(false)
  const [pais, setPais] = useState("")
  const [lugar, setLugar] = useState("")
  const [latYLon, setLatYLon] = useState([])
  const [clima, setClima] = useState({})
  // hacer las solisitudes de las dos API
  // para saber la ubicacion: https://api.openweathermap.org/geo/1.0/direct?q=Argentina&limit=5&appid=a2d7dbafe30003e0b18311d020bceb3c
  // para saber el clima: https://api.openweathermap.org/data/2.5/weather?lat=-34.6037&lon=-58.3816&appid=a2d7dbafe30003e0b18311d020bceb3c

  const validarPaises = () => {
    const paisesExistentes = [
      "US", "CA", "MX", "BR", "AR", "CO", "PE", "CL", "EC", "VE",
      "GB", "DE", "FR", "IT", "ES", "NL", "BE", "SE", "CH", "AT",
      "CN", "JP", "KR", "IN", "ID", "TH", "PH", "VN", "MY", "SG"
    ];
    return paisesExistentes.includes(pais);
  }


  const handlerSubmit = (e) => {
    e.preventDefault()
    const lugarT = lugar.trim()
    console.log(validarPaises())
    if (validarPaises() && (lugarT.length <= 50 && lugarT.length >= 2)) {
      console.log("si")
    } else {
      alert("datos incorrectos, intentelo de nuevo")
    }
  }
  return (
    <Container className='my-3'>
      <h1 className='text-light text-center'>Web de clima</h1>
      <div className='Formulario px-4 py-4'>
        <Form onSubmit={handlerSubmit}>
          <Form.Group>
            <Form.Label>ingrese el pais:</Form.Label>
            <Form.Select onChange={(e) => setPais(e.target.value)}>
              <optgroup label="América">
                <option value="US">Estados Unidos (USA)</option>
                <option value="CA">Canadá</option>
                <option value="MX">México</option>
                <option value="BR">Brasil</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="PE">Perú</option>
                <option value="CL">Chile</option>
                <option value="EC">Ecuador</option>
                <option value="VE">Venezuela</option>
              </optgroup>
              <optgroup label="Europa">
                <option value="GB">Reino Unido (UK)</option>
                <option value="DE">Alemania</option>
                <option value="FR">Francia</option>
                <option value="IT">Italia</option>
                <option value="ES">España</option>
                <option value="NL">Países Bajos (Holanda)</option>
                <option value="BE">Bélgica</option>
                <option value="SE">Suecia</option>
                <option value="CH">Suiza</option>
                <option value="AT">Austria</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="CN">China</option>
                <option value="JP">Japón</option>
                <option value="KR">Corea del Sur</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="TH">Tailandia</option>
                <option value="PH">Filipinas</option>
                <option value="VN">Vietnam</option>
                <option value="MY">Malasia</option>
                <option value="SG">Singapur</option>
              </optgroup>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>ingrese el Lugar</Form.Label>
            <Form.Control type='text' placeholder='Ej: Barcelona' minLength={2} maxLength={50} onChange={(e) => setLugar(e.target.value)} required></Form.Control>
          </Form.Group>
          <Button className='mt-4' type='submit'>Buscar</Button>
        </Form>
      </div>
      <Resultados></Resultados>
    </Container>
  )
}

export default App
