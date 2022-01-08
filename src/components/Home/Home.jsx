import React, {useState} from 'react';
import Calendar from "./calendar/Calendar.jsx";

export default class Home extends React.Component {
    state = {
        date: null
    }

    handleDateChange = date => this.setState({date})

    render() {
        const {date} = this.state

        return (
            <div className="content">
                <div className="y_flex" style={{padding: '20px 60px 0 60px', marginTop: '0px'}}>
                    <div className="flex_1">
                        <h1>Курсы:</h1>
                        <ul>
                            <li>Математика</li>
                            <li>Английский</li>
                            <li>Китайский</li>
                            <li>Программирование</li>
                            <li>Ментальная арифметика</li>
                            <li>Робототехника</li>
                            <li>Русский язык</li>
                        </ul>
                    </div>
                    <div className="flex_2">
                        {date && <p style={{fontFamily: 'Roboto'}}>Выбранная дата: {date.toLocaleDateString()}</p>}
                        <Calendar onChange={this.handleDateChange}/>
                    </div>
                </div>
                <div className="news">
                    <h1 style={{padding: '100px 0 0 0', textAlign: 'center'}}>Новости</h1>
                </div>
            </div>
        );
    }
};