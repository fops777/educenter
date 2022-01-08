import React from 'react';
import PersonalData from "../PersonalData";
import Search from "../Search";
import styles from './Payment.module.css'

const Payment = () => {
    return (
        <div className={styles.payment_body}>
            <div>
            <Search/>
                <div>
                    <div>
                        <button className="button">карта</button>
                    </div>
                    <div>
                        <button className="button">наличные</button>
                    </div>
                </div>
                <div>

                    <div>
                        <button className="low_button1">Отмена</button>
                        <button className="low_button2">Оплатить</button>
                    </div>
                </div>
            </div>
            <PersonalData/>
        </div>
    );
};
export default Payment