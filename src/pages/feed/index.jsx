
import bannerImage from '../../assets/banner.png'
import { Button } from '../components/button'
import { Header } from '../components/header'
import { Card } from '../components/Card'
import { UserInfo } from '../components/userInfo'

import{ Container, Collumn, Title, TitleHighLight} from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Collumn flex={3}>
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>
                <Card/>
                <Card/>
            </Collumn>
            <Collumn flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo nome="Tiago Estevam" percentual={85} image="https://avatars.githubusercontent.com/u/108008776?v=4"/>
                <UserInfo nome="Tiago Estevam" percentual={85} image="https://avatars.githubusercontent.com/u/108008776?v=4"/>
                <UserInfo nome="Tiago Estevam" percentual={85} image="https://avatars.githubusercontent.com/u/108008776?v=4"/>
                <UserInfo nome="Tiago Estevam" percentual={85} image="https://avatars.githubusercontent.com/u/108008776?v=4"/>
                <UserInfo nome="Tiago Estevam" percentual={85} image="https://avatars.githubusercontent.com/u/108008776?v=4"/>
            </Collumn>
        </Container>
    </>)
}

export {Feed}