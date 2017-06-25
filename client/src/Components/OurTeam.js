import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';

export default class OurTeam extends Component {
    render() {
        return (
            <section id="team">
                <Container style={styles.container}>
                    <div style={styles.headerWrap}>
                        <h1 style={styles.headerTitle}>Thành Viên Nhóm</h1>
                    </div >
                    <div style={{ padding: '1em' }}>
                        <Row>
                            <Col>
                                <Card style={styles.cardWrap}>
                                    <div style={styles.cardImageWrap}>
                                        <CardImg top width="100%" style={styles.cardImage} src={require("../static/images/default_profile.png")} alt="Card image cap" />
                                    </div>
                                    <CardBlock>
                                        <CardTitle>Nguyễn Văn Nhật Hoàng</CardTitle>
                                        <CardSubtitle>PHP Deverloper</CardSubtitle>
                                        <CardText>Sinh viên blah lbah.</CardText>
                                        <Button>Facebook</Button>
                                    </CardBlock>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={styles.cardWrap}>
                                    <div style={styles.cardImageWrap}>
                                        <CardImg top width="100%" style={styles.cardImage} src={require("../static/images/default_profile.png")} alt="Card image cap" />
                                    </div>
                                    <CardBlock>
                                        <CardTitle>Nguyễn Văn Nhật Huy</CardTitle>
                                        <CardSubtitle>ReactJS Deverloper</CardSubtitle>
                                        <CardText>Sinh viên blah lbah.</CardText>
                                        <Button>Facebook</Button>
                                    </CardBlock>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={styles.cardWrap}>
                                    <div style={styles.cardImageWrap}>
                                        <CardImg top width="100%" style={styles.cardImage} src={require("../static/images/default_profile.png")} alt="Card image cap" />
                                    </div>
                                    <CardBlock>
                                        <CardTitle>Nguyễn Văn Nhật Hoàng</CardTitle>
                                        <CardSubtitle>PHP Deverloper</CardSubtitle>
                                        <CardText>Sinh viên blah lbah.</CardText>
                                        <Button>Facebook</Button>
                                    </CardBlock>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={styles.cardWrap}>
                                    <div style={styles.cardImageWrap}>
                                        <CardImg top width="100%" style={styles.cardImage} src={require("../static/images/default_profile.png")} alt="Card image cap" />
                                    </div>
                                    <CardBlock>
                                        <CardTitle>Nguyễn Văn Nhật Huy</CardTitle>
                                        <CardSubtitle>ReactJS Deverloper</CardSubtitle>
                                        <CardText>Sinh viên blah lbah.</CardText>
                                        <Button>Facebook</Button>
                                    </CardBlock>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container >
            </section>
        );
    }
}

const styles = {
    container: {
        padding: '2em',
        borderWidth: '1em'
    },
    headerWrap: {
        paddingBottom: '1em',
    },
    headerTitle: {
        textAlign: 'center',
        color: '#474747',
        fontSize: '3em',
        fontFamily: 'inherit'
    },
    cardWrap: {
        padding: '1em'
    },
    cardImageWrap: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '100%'
    },
    cardImage: {
        borderRadius: '100%'
    }
}