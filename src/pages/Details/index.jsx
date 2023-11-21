import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from "moment-timezone";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Content, Title, User } from "./styles";
import { Star } from '../../components/Star';

export function Details() {
  const [data, setData] = useState(null);
  
  const params = useParams();
  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const formattedDate = moment
    .utc(data?.created_at)
    .tz("America/Sao_Paulo")
    .format("DD/MM/YY [às] HH:mm");


  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemoveMovie() {
    const response = await api.delete(`/movies/${params.id}`);
    alert(response.data.message);
    handleBack();
  }

  useEffect(() => {
    async function fetchDetailsMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchDetailsMovie();
  }, []);

  return (
    <Container>
      <Header/>

      {data && ( 
        <main>
          <Content>
            <section>
              <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack}/>
              <Title>
                <h1>{data.title}</h1>
                <Star rating={data.rating}/>
              </Title>
              <User>
                <img src={avatarURL} alt={user.name} />
                <span>Por {user.name}</span>
                <FiClock />
                <span>{formattedDate}</span>
              </User>
            </section>

            {
              data.tags &&
                <div>
                  {
                    data.tags.map(tag => (
                      <Tag 
                        title={tag.name}
                        key={String(tag.id)}
                      />
                    ))
                  }
                </div>
            }
            <p>{data.description}</p>

            <div id='button'>
              <Button title="Excluir" onClick={handleRemoveMovie}/>
            </div>

          </Content>
        </main>

      )}
    </Container>

  )
}