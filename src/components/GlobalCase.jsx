import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import FA from 'react-fontawesome';
import CountUp from 'react-countup';

class GlobalCase extends React.Component {
    state = { 
        total_cases: 0,
        new_cases: 0,
        total_death: 0,
        new_death: 0,
        total_recovered: 0,
        active_cases: 0
    };

    componentDidMount() {
        const summary = this.props.summary;
        this.setState({ 
            total_cases: Number(summary.total_cases),
            new_cases: Number(summary.new_cases),
            total_death: Number(summary.total_death),
            new_death: Number(summary.new_death),
            total_recovered: Number(summary.total_recovered),
            active_cases: Number(summary.active_cases)
        });
    }

    render () {
        return (
            <div className="col-12" style={{ margin:'80px auto 50px auto', display:'block' }}>
                <Container>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Global Covid-39 Cases </h3>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col>
                            <Card
                                bg='secondary'
                                text='white'
                                style={{ display:'block', borderRadius: '0px', fontWeight: 'bold' }}>
                                <Card.Header><FA name="virus" /> Total Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '27px', fontWeight: '900' }}>
                                        <CountUp end={this.state.total_cases} separator=","/>
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                bg='warning'
                                text='white'
                                style={{ display:'block', borderRadius: '0px', fontWeight: 'bold' }}>
                                <Card.Header><FA name="shield-virus" /> New Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '28px', fontWeight: '900' }}>
                                        + <CountUp end={this.state.new_cases} separator=","/>
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col>
                            <Card
                                bg='danger'
                                text='white'
                                style={{ display:'block', borderRadius: '0px', fontWeight: 'bold' }}>
                                <Card.Header><FA name="skull" /> Total Death</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '28px', fontWeight: '900' }}>
                                        <CountUp end={this.state.total_death} separator=","/>
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                bg='primary'
                                text='white'
                                style={{ display:'block', borderRadius: '0px', fontWeight: 'bold' }}>
                                <Card.Header><FA name="skull-crossbones" /> New Death</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '28px', fontWeight: '900' }}>
                                        + <CountUp end={this.state.new_death} separator=","/>
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col>
                            <Card
                                bg='success'
                                text='white'
                                style={{ display:'block', borderRadius: '0px', fontWeight: 'bold' }}>
                                <Card.Header><FA name="heartbeat" /> Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '28px', fontWeight: '900' }}>
                                        <CountUp end={this.state.total_recovered} separator=","/>
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                bg='info'
                                text='white'
                                style={{ display:'block', borderRadius: '0px', fontWeight: 'bold' }}>
                                <Card.Header><FA name="procedures" /> Active Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '28px', fontWeight: '900' }}>
                                        <CountUp end={this.state.active_cases} separator=","/>
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default GlobalCase;