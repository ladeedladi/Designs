import React from 'react'
import styles from "../styles/ProfileCardHover.module.css"
const ProfileCardHover = () => {
    return (
        <div className={styles.container}>
          <div className={styles.card}>
              <span>Mark rufallo</span>
              <ul className={styles.socialMediaList}>
                <li>
                    <a>
                    <i class="fab fa-instagram"></i>
                       
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fas fa-basketball-ball"></i>
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a>
                    <i class="fab fa-codepen"></i>
                    </a>
                </li>
              </ul>
          </div>
        </div>
    )
}

export default ProfileCardHover
