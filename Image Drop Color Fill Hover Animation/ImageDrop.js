import React from 'react'
import styles from "../styles/ImageDrop.module.css"
const ImageDrop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ImgContainer}>
             <div className={styles.greyImg}></div>
             <div className={styles.colorImg}></div>
            </div>
        </div>
    )
}

export default ImageDrop
