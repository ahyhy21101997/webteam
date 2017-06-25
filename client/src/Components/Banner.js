import React, { Component } from 'react';
import Background from '../static/images/bokeh_car_lights_bg.jpg';
import DarkTint from '../static/images/dark_tint.png';

export default class Banner extends Component {
    render() {
        return (
            <section id="banner" style={styles.container}>
                <h2 style={styles.title}>Xin chào, chúng tôi là CNTT Team.</h2>
                <p style={styles.subTitle}>Trang web này là SPA, kết hợp ReactJS cho Fontend và PHP cho Backend.</p>
                <ul>
                    <li style={styles.button}>
                        <a style={styles.buttonTitle} href="#">Our Facebook</a>
                    </li>
                </ul>
            </section >
        );
    }
}

const styles = {
    container: {
        backgroundImage: `url(${DarkTint}), url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        color: '#ffffff',
        padding: '14em 0em 14em',
        textAlign: 'center',
    },
    title: {
        color: '#ffffff',
        fontSize: '4em',
        lineHeight: '1.25em',
        margin: '0 0 0.5em 0',
        padding: 0
    },
    subTitle: {
        fontSize: '1.5em',
        marginBottom: '1.75em',
        margin: '0 0 2em 0'
    },
    button: {
        display: 'inline-block',
        padding: '0.5em 1.2em 0.5em 1.2em',
        verticalAlign: 'middle',
        borderRadius: '30px',
        backgroundColor: '#3cadd4'

    },
    buttonTitle: {
        color: 'white',
        fontSize: '1.5em'
    }
}