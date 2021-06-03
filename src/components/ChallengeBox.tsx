import { useContext } from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';
import { CompletedChallenges } from './CompletedChallenges';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown ();
    }
    
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(

        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} px</header>

                    <main>
                        <img src={`icon/${activeChallenge.type}.png`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                        type="button"
                        className={styles.challengeFalliedButton}
                        onClick={handleChallengeFailed}>
                            Falhei
                        </button>

                        <button type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeBoxNotActive}> 
                <strong>Finalize um ciclo para receber um desafio.</strong>
                <p>
                    <img src='icon/arrow-up.png' alt='Level Up'/>
                    Avance de Level completando os desafios.
                </p>
            </div>
            )}
        </div>
    );
}