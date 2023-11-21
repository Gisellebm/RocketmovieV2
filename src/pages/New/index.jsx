import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Form } from "./styles";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Markers } from "../../components/Markers";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  //const [LOADING, setLoading] = useState(false);


  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Por favor, informe o nome do filme!");
    }

    const isRatingValid = rating >= 0 && rating <= 5;

    if(!isRatingValid) {
      return alert("Por favor, informe uma nota entre 0 e 5");
    }

    if(!rating) {
      return alert("Por favor, informe uma nota para o filme!");
    }

    if(!description) {
      return alert("Por favor, informe uma descrição para o filme!");
    }

    if (newTag) {
      return alert("Por favor, você precisa clicar no marcador para adicionar!");
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    });

    alert("Filme adicionado com sucesso");
    handleBack();
  }

  function handleDeleteMovie() {
    const userConfirmation = confirm("Tem certeza que deseja deletar? Essa ação não poderá ser desfeita!");

    if(userConfirmation) {
      alert("Filme deletado com sucesso!");
      handleBack();
    }
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
                    onChange={event => setTitle(event.target.value)}
                />

                <Input
                    type="number"
                    placeholder="Sua nota (de 0 a 5)" 
                    min="0"
                    max="5"
                    value={rating}
                    onChange={event => setRating(event.target.value)}
                />
            </div>

            <Textarea 
              placeholder="Observações" 
              onChange={event => setDescription(event.target.value)}
            />

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
                <Button title="Excluir filme" className="excluir" onClick={handleDeleteMovie}/>
                <Button 
                  title="Salvar alterações"
                  onClick={handleNewMovie}
                />
            </div>
        </Form>
      </main>
    </Container>

  )
}