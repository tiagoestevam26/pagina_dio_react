import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner.png";
import { Button } from "../components/button";
import { Header } from "../components/header";

import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Doine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Comece Agora!"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
