import React from 'react';
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import FA from 'react-fontawesome';

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
            backgroundImage: 'linear-gradient(to bottom right, #A8A8A8, #D3D3D3)',
        };

        let evenStyle = {
            backgroundImage: 'linear-gradient(to bottom right, #606060, #D3D3D3)',
        };

        let badgeStyle = { display: 'block', marginBottom: '10px', fontSize: '18px' }
      
        return (
            <Card style={ id %2 === 0 ? evenStyle : oddStyle}>
                <Card.Header style={{ padding: '0px', textAlign: 'left', borderRadius: '10px' }}>
                    <Accordion.Toggle style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', padding: '5px', paddingLeft: '10px', textShadow: '1px 1px #404040' }} as={Button} variant="link" eventKey={cases.country_name}>
                        <FA name="globe" /> {cases.country_name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={cases.country_name}>
                    <Card.Body style={{ color: 'black' }}>
                        <Badge style={ badgeStyle } pill variant="info">
                            Total Cases : {cases.total_cases} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="info">
                            New Cases : {cases.new_cases} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="danger">
                            Total Death : {cases.total_death} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="danger">
                            New Death : {cases.new_death} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="success">
                            Total Recovered : {cases.total_recovered} 
                        </Badge>
                        <Badge style={ badgeStyle } pill variant="warning">
                            Active Cases : {cases.active_cases} 
                        </Badge>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default CountryCases;