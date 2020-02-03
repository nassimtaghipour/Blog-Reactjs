import React from 'react';
import Wrapper from '../hoComponents/Wrapper';
import Card from 'react-bootstrap/Card'
const context = (props) => (props.userAccount != null && props.userWeb != null) ? <Wrapper >
        <Card className="text-center mx-auto h-100" style={{"backgroundColor":"red"}}>
                <Card.Header> About Author</Card.Header>
                <Card.Body className="p-0">
                        <Card.Title>Name</Card.Title>
                        <Card.Text>{props.userAccount}
                        </Card.Text>
                        <Card.Title>WebSite</Card.Title>
                        <Card.Text>{props.userWeb}
                        </Card.Text>
                </Card.Body>
        </Card>

</Wrapper> : <Wrapper ><p></p></Wrapper>

export default context;