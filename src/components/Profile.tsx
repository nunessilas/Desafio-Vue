import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="Copia.png" alt="Silas Nunes"/>
            <div>
                <strong>Silas Nunes</strong>
                <p>
                <img src="icon/up-arrow.png" alt="Level"/>
                Level {level}
                </p>
            </div>
        </div>
    );
}