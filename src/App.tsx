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
      {type: 'paragraph', content: 'Meu nome é Lucas Emanuel Chaves, tenho 23 anos e sou um desenvolvedor front-end jr. Me formei como programador no programa +Devs2Blu no dia 01/06/2022 e atualmente estou cursando Analise e Desenvolvimento na Unisocies 📖'},
      {type: 'paragraph', content: 'Falando um pouco do lado profissional, minhas principais Hard Skills é conhecimento em Angular, Java (Springboot) e ReactJS. E minhas principais Soft Skills é o Trabalho em equipe, flexibilidade e princípios éticos'},
      {type: 'link', content: '👉🏻 LinkedIn', src:'https://linkedin.com/in/lucas-emanuel-chaves-b5a3971b5/'},
      {type: 'link', content: '👨🏻‍💻 GitHub', src:'https://github.com/chavesluucas'},
      {type: 'link', content: '📱 Whats App', src:'https://api.whatsapp.com/send?phone=5547999345707&text=Ol%C3%A1%20Lucas!'},
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
      {type: 'paragraph', content: 'Comecei escrevendo teste de qualidade no Cypress, de cobertura e de carga para o back-end e hoje estou ajudando no Front-End 👨🏻‍💻. Convido você para conhecer um pouco do nosso trabalho no link abaixo'},
      {type: 'link', content: 'Visite nosso site', endereco: 'https://www.orbitpages.com'},
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
      {type: 'link', content: 'Meu perfil da RocketSeat', endereco: 'https://app.rocketseat.com.br/me/lucas-emanuel-chaves-08593'},
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
