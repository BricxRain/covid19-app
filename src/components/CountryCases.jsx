import React from 'react';
import { Accordion, Badge, Button, Card } from "react-bootstrap";

class CountryCases extends React.Component {
    state = { 
        id: 0,
        cases: []
    };

    componentDidMount() {
        const cases = this.props.case;
        const id = this.props.id;
        this.setState({
            cases,
            id
        });
    }

    render() {
        const { id, cases } = this.state;

        let oddStyle = {
            backgroundImage: 'linear-gradient(to bottom right, #00c851, #FFFFFF)',
            border: '1px solid green'
        };

        let evenStyle = {
            backgroundImage: 'linear-gradient(to bottom right, #157DEC, #FFFFFF)',
            border: '1px solid blue'
        };

        let badgeStyle = { display: 'block', marginBottom: '10px', fontSize: '18px' }
      
        return (
            <Card style={ id %2 === 0 ? evenStyle : oddStyle}>
                <Card.Header style={{ padding: '0px', textAlign: 'left' }}>
                    <Accordion.Toggle style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }} as={Button} variant="link" eventKey={cases.country_name}>
                                {cases.country_name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={cases.country_name}>
                    <Card.Body style={{ color: 'black' }}>
                        <Badge style={ badgeStyle } pill variant="primary">
                            Total Cases : {cases.total_cases} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="warning">
                            New Cases : {cases.new_cases} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="danger">
                            Total Death : {cases.total_death} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="dark">
                            New Death : {cases.new_death} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="success">
                            Total Recovered : {cases.total_recovered} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="info">
                            Active Cases : {cases.active_cases} 
                        </Badge>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default CountryCases;