import React from 'react';
import { Accordion, Button, Card } from "react-bootstrap";

const CountryCases = (props) => {
    return (
        <Accordion style={{ margin:'30px auto 20px auto', display:'block' }}>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click Me and expand the card!!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ color: 'black' }}>Hello! I'm the body of card</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click Me and expand the card!!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body style={{ color: 'black' }}>Hello! I'm the body of card</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Click Me and expand the card!!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body style={{ color: 'black' }}>Hello! I'm the body of card</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default CountryCases;