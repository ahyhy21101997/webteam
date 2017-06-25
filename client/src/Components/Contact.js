import React, { Component } from 'react';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mail: '',
        }
    }

    render() {
        return (
            <section id="contact" style={styles.container}>
                <div>
                    <h2 style={styles.title}>Đặt câu hỏi cho chúng tôi</h2>
                    <p style={styles.subTitle}>Nếu bạn có thắc mắt hãy để lại tên, địa chỉ email, và câu hỏi cho chúng tôi</p>
                </div>
                <div style={styles.formWrap}>
                    <input
                        style={styles.inputInfo}
                        placeholder='Tên' for='name'
                        type="text"
                        value={this.state.name}
                        onChange={(event) => { this.setState({ name: event.target.value }) }} />

                    <input
                        style={styles.inputInfo}
                        type="email"
                        placeholder='Email'
                        for='email'
                        value={this.state.email}
                        onChange={(event) => { this.setState({ email: event.target.value }) }} /> <br />

                    <input
                        style={styles.inputMes}
                        type="email"
                        placeholder='Nội dung'
                        for='mail'
                        value={this.state.mail}
                        onChange={(event) => { this.setState({ mail: event.target.value }) }} /> <br />

                    <button style={styles.buttonSend}>Gửi Nội Dung</button>
                </div>
            </section>

        );
    }
}

const styles = {
    container: {
        backgroundColor: '#3cadd4',
        color: '#ffffff',
        padding: '6em 0em 4em',
        textAlign: 'center',

    },
    title: {
        fontSize: '2.8em',
        marginBottom: '0.5em',
    },
    subTitle: {
        fontSize: '1.3em',
    },
    formWrap: {
        textAlign: 'center',
    },
    inputInfo: {
        width: '45%',
        minWidth: '250px',
        maxWidth: '300px',
        margin: 5,
        borderRadius: 5,
        borderWidth: 0,
        height: 40,
        paddingLeft: 5,
    },
    inputMes: {
        width: '100%',
        minWidth: '250px',
        maxWidth: '610px',
        margin: 5,
        borderRadius: 5,
        borderWidth: 0,
        height: 150,
        paddingLeft: 5,
    },
    buttonSend: {
        borderRadius: 30,
        borderWidth: 0,
        color: 'white',
        fontSize: '20',
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0.45)',
        padding: '5px 20px 5px 20px',
    }

}