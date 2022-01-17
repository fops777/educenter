import React from 'react';
import styles from './Payment.module.css'

const Payment = () => {
    return (
        <div className={styles.payment_body}>
            <div>
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
            <div className="bg">
            <div className="_FIO_data_flex">
                <div className="groups_data_photo"></div>
                <div className="FIO">
                    <div className="data_FIO">ID:</div>
                    <div className="data_FIO">Имя:</div>
                    <div className="data_FIO">Фамилия:</div>
                    <div className="data_FIO">Отчество:</div>
                </div>
            </div>
            <div className="data">Возраст: __</div>
            <div className="data">Предмет: ____________</div>
            <div className="data">Номер: ___________</div>
            <div className="data">Номер родителя: ________</div>
            <div className="data">Учитель: _______</div>
            <div className="data">Оплачено от __ до __</div>
        </div>
        </div>
    );
};
export default Payment