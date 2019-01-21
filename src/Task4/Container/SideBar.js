import React ,{Component} from 'react'
import './../../App.css'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Autosuggestion from '../AutoSuggest';

    class SideBar extends Component{
        constructor(props){
            super(props)
            this.state = {
                value: { min: 2, max: 10 },
              };
        }
        handleClick = ()=>{
            console.log("hello")
        }
        render(){

            return(
                <>
                <div className="nav-side-menu">
                    <div className="brand">Press Curing Control</div>
                    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                    <div className="menu-list">
                        <Accordion>
                            <AccordionItem expanded={true}> 
                                <AccordionItemTitle id="menu-content" className="menu-content collapse out">
                                    <h3 className="">Category</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <Accordion> 
                                        <AccordionItem>
                                            <AccordionItemTitle id="menu-content" className="menu-content collapse out">
                                            
                                            <h5>Men</h5>
                                            </AccordionItemTitle>
                                            <AccordionItemBody>
                                                <p>Body content</p>
                                                
                                                <p>Body content</p>
                                                <p>Body content</p>
                                            </AccordionItemBody>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion> 
                                        <AccordionItem>
                                            <AccordionItemTitle id="menu-content" className="menu-content collapse out">
                                            
                                            <h5>Woman</h5>
                                            </AccordionItemTitle>
                                            <AccordionItemBody>
                                                <p>Body content</p>
                                                
                                                <p>Body content</p>
                                                <p>Body content</p>
                                            </AccordionItemBody>
                                        </AccordionItem>
                                    </Accordion>
                                    <Accordion> 
                                        <AccordionItem>
                                            <AccordionItemTitle id="menu-content" className="menu-content collapse out">
                                            
                                            <h5>Kids</h5>
                                            </AccordionItemTitle>
                                            <AccordionItemBody>
                                                <p>Body content</p>
                                                <p>Body content</p>
                                                <p>Body content</p>
                                            </AccordionItemBody>
                                        </AccordionItem>
                                    </Accordion>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <form className="form">
                        <InputRange
                            maxValue={20}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                        />
                    </form>
                </div>
                <div className="row">
                        <Autosuggestion />
                    </div>

                </>
                
            )
        }
    }
    
    export default SideBar;