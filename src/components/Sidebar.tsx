import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

function messageError(){
    alert('Esse botão ainda não tem funcionalidade 🙁')
}

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/chavesluucas.png"/>

                <strong>Lucas Emanuel Chaves</strong>
                <span>Junior Front-End Developer</span>
            </div>

            <footer>
                <a href="#" onClick={messageError}>
                    < PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}