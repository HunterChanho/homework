import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../css/Input.css';
import axios from "axios";

function Input() {

    const [file, setFile] = useState([]);
    const baseUrl = "http://localhost:8080"

    async function getData(e) {
        e.preventDefault()
        await axios
            .post(baseUrl + "getData")
            .then((res) => {
                alert("then")
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="InputTag">
          <Container>
            <label>fileName : </label>&nbsp;
            <input type="button" value="눌러봐" onClick={getData}/>
          </Container>
        </div>
    );
}

export default Input;