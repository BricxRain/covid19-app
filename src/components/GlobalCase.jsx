import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
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
            <div className="col-12" style={{ margin:'20px auto 20px auto', display:'block' }}>
                <Container>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col>
                            <Card
                                bg='primary'
                                text='white'
                                style={{ display:'block', borderRadius: '50px', fontWeight: 'bold' }}>
                                <Card.Header>Total Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px', fontWeight: '900' }}>
                                        <CountUp end={this.state.total_cases} />
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
                                style={{ display:'block', borderRadius: '50px', fontWeight: 'bold' }}>
                                <Card.Header>New Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px', fontWeight: '900' }}>
                                        <CountUp end={this.state.new_cases} />
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
                                style={{ display:'block', borderRadius: '50px', fontWeight: 'bold' }}>
                                <Card.Header>Total Death</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px', fontWeight: '900' }}>
                                        <CountUp end={this.state.total_death} />
                                    </Card.Title>
                                    {/* <Card.Text style={{ color: 'white' }}>
                                    test
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                bg='dark'
                                text='white'
                                style={{ display:'block', borderRadius: '50px', fontWeight: 'bold' }}>
                                <Card.Header>New Death</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px', fontWeight: '900' }}>
                                        <CountUp end={this.state.new_death} />
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
                                style={{ display:'block', borderRadius: '50px', fontWeight: 'bold' }}>
                                <Card.Header>Total Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px', fontWeight: '900' }}>
                                        <CountUp end={this.state.total_recovered} />
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
                                style={{ display:'block', borderRadius: '50px', fontWeight: 'bold' }}>
                                <Card.Header>Active Cases</Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '30px', fontWeight: '900' }}>
                                        <CountUp end={this.state.active_cases} />
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