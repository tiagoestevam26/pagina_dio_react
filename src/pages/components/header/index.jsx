import React from 'react'
import logo from '../../../assets/logo-dio.png'
import{Button} from '../button'

import{
    BuscarImputContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    Input,
    UserPicture
}from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio"/>
                {autenticado ? ( 
                    <>
                    <BuscarImputContainer>
                    <Input placeholder="Buscar..."></Input>
                    </BuscarImputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/108008776?v=4' alt='Foto perfil'/>  
                ) : (
                    <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title='Entrar'/>
                    <Button title='Cadastrar'/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export{Header}