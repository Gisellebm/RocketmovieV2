import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

export function New() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header/>

      <main>
        <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack}/>

        <h1>Novo filme</h1>

        <Form>
            <div className="twoColumns">
                <Input
                    type="text"
                    placeholder="Título" 
                />

                <Input
                    type="number"
                    placeholder="Sua nota (de 0 a 5)" 
                    min="0"
                    max="5"
                />
            </div>

            <Textarea placeholder="Observações" />

            <div className="twoColumns">
                <Button title="Excluir filme" className="excluir"/>
                <Button title="Salvar alterações"/>
            </div>
        </Form>
      </main>
    </Container>

  )
}