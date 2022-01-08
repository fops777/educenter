import React from 'react';

const PersonalData = ({style}) => {
    return (
        <div className="bg" style={style}>
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
    );
};

export default PersonalData;