import React from 'react'
import styles from '../styles/Specification.module.css'
function Specification() {
  return (
    <div className = {styles.specSection} >
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
                                   <h2>100% Electric</h2>
                                   <span>Drive Energy Variation</span>
                               </div>
                               <div className={styles.specs_points}>
                                     <ul>
                                        <li>
                                            <span>Extreme Acceleration</span>
                                            <p><strong>4x2 </strong>motor with total motor power of 200 kw, 0 to 100 km/h acceleration in <strong>7.35 s</strong></p>
                                            <p><strong>4x4</strong> motor with total motor power of 315 kw kw, 0 to 100 km/h acceleration in <strong>4.5 s</strong></p>
                                        </li>
                                        <li>
                                            <span>Smart Control</span>
                                             <p>Geely Holding's smooth smart control system delivers the driving experience like a 100% electric SUV.</p>
                                        </li>
                                     </ul>
                                   
                               </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.spec_col}>
                              <div className={styles.main_hdg}>
                                   <h2>Core Function Highlights</h2>
                                   <span>Intelligent Discharge</span>
                               </div>
                               <div className={styles.specs_points}>
                                   <p>6kW/220V discharge in all scenarios, staying ahead in the same price  range for pickup truck and SUV, allowing use of electric functions  anytime and anywhere.</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className={styles.spec_col}>
                               <div className={styles.main_hdg}>
                                   <h2>All-purpose Pickup Truck</h2>
                                   <span>Comfort, Convenience & Safety</span>
                               </div>
                               <div className={styles.specs_points}>
                                     <ul>
                                        <li>
                                            <span>Refined Outside Styling and Interior Comfort</span>
                                            <p>Immerse yourself in a spacious, modern cabin packed with advanced technology features and entertainment.</p>
                                        </li>
                                        <li>
                                            <span>Engineered for Safety</span>
                                             <p>Multidimensional protection providing you with peace of mind.</p>
                                        </li>
                                     </ul>
                                   
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
