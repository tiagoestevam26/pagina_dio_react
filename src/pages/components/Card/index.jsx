import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    ImageBackground,
    HasInfo,
    PostInfo,
    UserInfo,
    UserPicture
} from  './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://images.ctfassets.net/iyiurthvosft/social-img-of-post-rv-15623/32878ff22bf480f846224cfdc98a780e/social-img-of-post-rv-15623.png?w=1800&q=50&fm=jpg&fl=progressive' alt='Imagem Fundo'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/108008776?v=4' alt='Foto Perfil'/>
                <div>
                    <h4>Tiago Estevam</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o bootcamp Dio... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp/> 10
                </p> 
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}