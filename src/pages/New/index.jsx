import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Markers } from "../../components/Markers";

export function New() {
  //const [title, setTitle] = useState("");
  //const [rating, setRating] = useState("");
  //const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  //const [LOADING, setLoading] = useState(false);


  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
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

            <section>
              <h2>Marcadores</h2>
              <div className="tags">
                {
                  tags.map((tag, index) => {
                    return (
                      <Markers
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    )
                  })
                }

                <Markers
                  isNew
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={event => setNewTag(event.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </section>

            <div className="twoColumns">
                <Button title="Excluir filme" className="excluir"/>
                <Button title="Salvar alterações"/>
            </div>
        </Form>
      </main>
    </Container>

  )
}