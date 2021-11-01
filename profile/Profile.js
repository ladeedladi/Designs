import React from 'react'
import styles from "../styles/profile.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Profile = () => {
    return (
    
            <div className={styles.container}>
               <div className={styles.card}>
                   <div className={styles.cardHeader}>
                     <img src="https://media-exp1.licdn.com/dms/image/C5603AQFDlYUzkZRNAw/profile-displayphoto-shrink_800_800/0/1633439588576?e=1641427200&v=beta&t=DuvHGhBBM65TKi3bZtG6IF_Sg1F6J1Ens0-7dRJdRTI"  alt="profile picture" /> 
                     
                   </div>
                   <div className={styles.cardBody}>
                       <h2>M Ladeed</h2>
                       <p className={styles.userName}>@ladded_s</p>
                       <div className={styles.socialMediaLists}>

                       <a href="#"><FacebookIcon/></a>
                       <a href="https://github.com/ladeedladi"><GitHubIcon/></a>
                       <a href=""><TwitterIcon/></a>
                       <a href="https://www.linkedin.com/in/ladeed-s-7b31131a4/"><LinkedInIcon/></a>
                       <a href="https://twitter.com/ladeed10?t=1pE_aB1r_XQHA7Yr4CuIvw&s=08"><InstagramIcon/></a>
                       </div>
                       <p className={styles.about}>Full stack developer and blockchain enthusiast </p>
                       <a className={styles.btnMsg}>Message</a>
                   </div>
               </div>
            </div>
        
    )
}

export default Profile
 