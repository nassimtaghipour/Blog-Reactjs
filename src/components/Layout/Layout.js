import React, { Component } from 'react';
import '../Layout/Layout.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Context from '../Context.js'
import 'bootstrap/dist/css/bootstrap.min.css';
class Layout extends Component {
    // arrow function for responsive part of header in small devices
    load = (e) => {
        e.preventDefault();
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
       }

    }
    render() {

        return (

            <div className="wrapper">

                <div className="topnav" id="myTopnav">

                    <div className="dropdown">
                        <button className="dropbtn">Nav1
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href={this.props.location}>SubNav 1</a>
                            <a href={this.props.location}>SubNav 2</a>
                            <a href={this.props.location}>SubNav 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Nav2
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href={this.props.location}>SubNav 1</a>
                            <a href={this.props.location}>SubNav 2</a>
                            <a href={this.props.location}>SubNav 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Nav3
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href={this.props.location}>SubNav 1</a>
                            <a href={this.props.location}>SubNav 2</a>
                            <a href={this.props.location}>SubNav 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Nav4
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href={this.props.location}>SubNav 1</a>
                            <a href={this.props.location}>SubNav 2</a>
                            <a href={this.props.location}>SubNav 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Nav5
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href={this.props.location}>SubNav 1</a>
                            <a href={this.props.location}>SubNav 2</a>
                            <a href={this.props.location}>SubNav 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Nav6
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href={this.props.location}>SubNav 1</a>
                            <a href={this.props.location}>SubNav 2</a>
                            <a href={this.props.location}>SubNav 3</a>
                        </div>
                    </div>

                    <a href="" style={{ fontSize: "25px !important" }} className="icon" onClick={this.load} >&#9776;</a>
                </div>

                <Row id="contentRow"  >

                
                    <Col xs={12} lg={9} md={0} sm={9}  id="content" className="p-0" >
                        <Row>
                            <Card className="text-center mx-auto h-100  w-100" style={{ "backgroundColor": "green" }}>
                                <Card.Header><Link  to="/"  className="backlink"   >Posts </Link></Card.Header>
                                
                            </Card>

                        </Row>

                       <main className="h-100">
                            {this.props.children}
                        </main>

                    </Col>
                   
                    <Col xs={12} lg={3} md={3} sm={3}  id="context" className="p-0 " >

                        <Context userAccount={this.props.name} userWeb={this.props.web}>

                        </Context>

                    </Col>
                </Row>

                <Row id="footerRow">
                    <Col id="footer"></Col>

                </Row>


            </div>

        )

    }

}

export default Layout;