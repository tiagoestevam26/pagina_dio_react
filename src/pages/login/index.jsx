import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../components/button'
import { Header } from '../components/header'
import { Input } from '../components/input'

import{ Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'


const Login = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder='E-mail' leftIcon={<MdEmail/>}/>
                        <Input placeholder='Senha' type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export {Login}