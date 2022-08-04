import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const post = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/chavesluucas.png',
      name: 'Lucas Emanuel Chaves',
      role: 'Junior Front-End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Esse aqui é o meu portifolio para vocês me conhecerem um pouco melhor 🚀'},
      {type: 'paragraph', content: 'Meu nome é Lucas Emanuel Chaves, tenho 23 anos e sou um desenvolvedor front-end jr. Me formei como programador no programa +Devs2Blu no dia 01/06/2022 e atualmente estou cursando Analise e Desenvolvimento de Sistemas na Unisociesc 📖'},
      {type: 'paragraph', content: 'Sou uma pessoa esforçada, adoro trabalhar em equipe e me dou muito bem com pessoas, gosto muito de aprender e sempre estou em busca de novos conhecimentos 🌍'},
      {type: 'paragraph', content: 'Atualmente estou em busca de uma oportunidade como desenvolvedor junior, se você quiser me conhecer mais, me chame em alguma rede social abaixo e bora trocar uma idéia!'},
      {type: 'paragraph', content: `-------------------------------------------------------------------------------------------------------------------------------------------------------------------`},
      {type: 'paragraph', content: 'Tecnologias 👉🏻  ReactJS | Angular | Springboot JAVA | HTML5 | CSS3 | JavaScript | TypeScript'},
      {type: 'paragraph', content: `-------------------------------------------------------------------------------------------------------------------------------------------------------------------`},
      {type: 'link', content: '⚡ LinkedIn', src:'https://linkedin.com/in/lucas-emanuel-chaves-b5a3971b5/'},
      {type: 'link', content: '👨🏻‍💻 GitHub', src:'https://github.com/chavesluucas'},
      {type: 'link', content: '📱 WhatsApp', src:'https://api.whatsapp.com/send?phone=5547999345707&text=Ol%C3%A1%20Lucas!'},
    ],
    publishedAt: new Date('2022-07-26 16:30:17'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/orbitpages.png',
      name: 'Orbit Pages',
      role: 'Crie Páginas Que Vendem'
    },
    content: [
      {type: 'paragraph', content: 'Aee Orbitados 🚀'},
      {type: 'paragraph', content: 'Entrei oficialmente na equipe da OrbitPages dia 04/01/2022.'},
      {type: 'paragraph', content: 'Comecei escrevendo teste de qualidade no Cypress, de cobertura e de carga para o back-end e atuei também ajudando no Front-End 👨🏻‍💻. '},
      {type: 'paragraph', content: 'Infelizmente meu ciclo dentro da orbit se encerrou, mas convido a você conhecer o trabalho da Orbit no link abaixo!'},
      {type: 'link', content: 'Visite nosso site', src: 'https://www.orbitpages.com'},
    ],
    publishedAt: new Date('2022-07-03 10:17:32'),
  },
  {
    id: 3,
    author:{
      avatarUrl: 'https://github.com/Rocketseat.png',
      name: 'RocketSeat',
      role: 'Plataforma de educação em tecnologia 🚀'
    },
    content: [
      {type: 'paragraph', content: 'Salve galera ☄️'},
      {type: 'paragraph', content: 'Essa aplicação foi desenvolvida em ReactJS nas aulas da RocketSeat. Grande parte do meu aprendizado, de boas práticas e conceitos do front estou aprendendo com a plataforma, onde o metodo de ensino está agregando muito valor aos meus conhecimentos'},
      {type: 'link', content: 'Meu perfil da RocketSeat', src: 'https://app.rocketseat.com.br/me/lucas-emanuel-chaves-08593'},
    ],
    publishedAt: new Date('2022-06-22 10:17:32'),
  },
  {
    id: 4,
    author:{
      avatarUrl: 'https://github.com/chavesluucas.png',
      name: 'Lucas Emanuel Chaves',
      role: 'Junior Front-End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Gostaria de compartilhar Alguns projetinhos que eu gosto bastante 👨🏻‍💻'},
      {type: 'paragraph', content: 'O primeiro projeto é o Chavesflix para avaliar filmes, um projeto que desenvolvi em uma semana de maratona de curso do Nelio Alves(DevSuperior), esse projeto ele possui um backend em Java e um Front em ReactJS.'},
      {type: 'link', content: 'Chavesflix 🎬', src:'https://chavesflix.netlify.app'},
      {type: 'link', content: 'Repositório do Chavesflix 🛠️', src:'https://github.com/chavesluucas/Chavesflix'},
      {type: 'paragraph', content: `-------------------------------------------------------------------------------------------------------------------------------------------------------------------`},
      {type: 'paragraph', content: 'O segundo projeto é o KeysBank, um projeto para controle financeiro feito em ReactJS que desenvolvi com as aulas da RocketSeat.'},
      {type: 'link', content: 'Repositório KeysBank 💵', src:'https://github.com/chavesluucas/KeysBank'},
      {type: 'paragraph', content: `-------------------------------------------------------------------------------------------------------------------------------------------------------------------`},
      {type: 'paragraph', content: 'O terceiro projeto é o proprio site que você está acessando.'},
      {type: 'link', content: 'Repositório Curriculo 💻', src:'https://github.com/chavesluucas/portifolio-rjs'},
      {type: 'paragraph', content: `-------------------------------------------------------------------------------------------------------------------------------------------------------------------`},
      {type: 'paragraph', content: 'Estou disponibilizando também os meus repositórios com todos projetinhos que eu fiz, tanto os iniciantes como os atuais.'},
      {type: 'link', content: 'Repositórios GitHub 🐈', src:'https://github.com/chavesluucas?tab=repositories'},
      

    ],
    publishedAt: new Date('2022-06-18 01:30:17'),
  }
]

function App() {
  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {post.map(post => {
          return(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
        })}
      </main>
    </div>

    </>
  )
}

export default App
