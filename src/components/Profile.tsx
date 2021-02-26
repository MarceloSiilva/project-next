import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68347827?s=400&v=4" alt="Marcelo Silva"/>
            
            <div>
                <strong>Marcelo Silva</strong>

                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}</p>

            </div>
        </div>
    );
}