
// import {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FormEvent } from 'react'



import illustrationIMG from '../assets/images/illustration.svg'
import logoIMG from '../assets/images/logo.svg'


import '../styles/auth.scss'
import { Button } from '../components/Buttons'
import { useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import userEvent from '@testing-library/user-event';



export function NewRoom(){
    const {user} = useAuth();
    const history = useHistory();
    const [NewRoom, setNewRoom] = useState('');


    async function handleCreateRoom(event: FormEvent){

        event.preventDefault();

        if(NewRoom.trim() === ''){
            return;
        }


        const roomRef= database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: NewRoom,
            authorId: user?.id,

        })

        history.push(`/rooms/${firebaseRoom.key}`);


    }
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
                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={NewRoom}

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