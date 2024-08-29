import React from 'react'
import styles from '../styles/Specification.module.css'
import PortableText from '@sanity/block-content-to-react';
function Specification({ carSpec }) {
    return (
        <div className={styles.specSection} >
            <div className={styles.container}>
                <div className={styles.maskImg}>
                    <img src="images/specs-car.png" alt="" />
                </div>
                <div className={styles.container_sm}>
                    <div className={styles.specs}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className={styles.spec_col}>
                                    <div className={styles.main_hdg}>
                                        <h2>{carSpec.heading}</h2>
                                        <span>{carSpec.subheading}</span>
                                    </div>
                                    <div className={styles.specs_points}>
                                        <PortableText
                                            blocks={carSpec.content}
                                        />


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className={styles.spec_col}>
                                    <div className={styles.main_hdg}>
                                        <h2>{carSpec.heading2}</h2>
                                        <span>{carSpec.subheading2}</span>
                                    </div>
                                    <div className={styles.specs_points}>
                                        <PortableText
                                            blocks={carSpec.content2}
                                        />


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className={styles.spec_col}>
                                    <div className={styles.main_hdg}>
                                        <h2>{carSpec.heading3}</h2>
                                        <span>{carSpec.subheading3}</span>
                                    </div>
                                    <div className={styles.specs_points}>
                                        <PortableText
                                            blocks={carSpec.content3}
                                        />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification 
