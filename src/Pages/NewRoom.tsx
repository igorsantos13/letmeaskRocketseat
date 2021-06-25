
// import {useContext} from 'react';
import { Link } from 'react-router-dom';



import illustrationIMG from '../assets/images/illustration.svg'
import logoIMG from '../assets/images/logo.svg'


import '../styles/auth.scss'
import { Button } from '../components/Buttons'
// import { useAuth } from '../hooks/useAuth';


export function NewRoom(){

    // const {user} = useAuth();
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationIMG} alt="Ilustração de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoIMG} alt="Logo" />

                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala"

                        />

                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Deseja entrar em uma sala existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}