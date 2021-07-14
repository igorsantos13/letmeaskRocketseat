import logoIMG from '../assets/images/logo.svg';
import { Button } from '../components/Buttons';
import '../styles/room.scss';
import { useHistory, useParams } from 'react-router-dom'
import { RoomCode } from '../components/RoomCode';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
// import { database } from '../services/firebase';
// import { useEffect } from 'react';
import { Questions } from '../components/Questions';
import '../styles/questions.scss';
import { useRoom } from '../hooks/useRoom';
import  deleteIMG  from '../assets/images/delete.svg'
import { database } from '../services/firebase';






type RoomParams = {
    id: string;
}


export function AdminRoom(){

    const {user} = useAuth();

    const history = useHistory();

    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id;
    const {title, questions} = useRoom(roomId);

    async function handleEndRoom(){
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })

        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string){
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')){
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoIMG} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>

                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

             <div className="questions-list">
             {questions.map(questions => {
                    return(
                        <Questions
                        key={questions.id}
                        content={questions.content}
                        author={questions.author}
                        >
                            <button
                            type="button"
                            onClick={() => handleDeleteQuestion(questions.id)}
                            >
                                <img src={deleteIMG} alt="Remover pergunta" />
                            </button>
                        </Questions>
                    )
                })}
             </div>

            </main>
        </div>
    );
}