import React from 'react'
import styles from "../styles/ImageHover.module.css"
const ImageHover = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ImgContainer}>
               <img src="https://images.pexels.com/photos/3496360/pexels-photo-3496360.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="man with backpack" />
               <div className={styles.overlay}>
                   <h4>Barack Obama</h4>
                   <p>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandaeexcepturi enim, sit tem pora officiis assumenda.
                   </p>
               </div>
            </div>
        </div>
    )
}

export default ImageHover
