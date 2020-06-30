import React, {  Fragment, Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Option from '../../assets/inst1.png';
import Answer from '../../assets/inst2.png';
import { Button } from '@material-ui/core';

export class quizInstruction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         passcode:""    
        }
    }
    handlePassCode=(e)=>{
        const passcode = e.target.value
        this.setState({
            passcode
        })
    }
    handlePlay=()=>{
        const pass= localStorage.getItem('passCode')
        if(pass===this.state.passcode){
            this.props.history.push('/play/quiz')
        }
    }
    render() {
        return (
          <Fragment>
    <Helmet><title>Quiz instruction - Quiz App</title></Helmet>
    <div className="main-instruction">
    <div className="instruction container">
        <h1>How to Start the Quiz</h1>
        <p>Ensure you read the guid from start to finish.</p>
        <ul className="browser-default" id ="main-list">
    <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
    <li>Each game consist of 15 Questions</li>
    <li>
        Every question contains 4 options.
        
    </li>
    <img src={Option} alt="Quiz App option example"/>
    <li>
        Select the option which best answers the question by clicking (or selecting) it.
       
    </li>
    <img src={Answer} alt="Quiz App answer example"/>
        </ul>
        <div style={{textAlign:"center"}}>
          
            <input
            style={{border:"2px solid seagreen", padding:"10px"}}
            onChange={this.handlePassCode}
            required
            placeholder="Enter Pass Code..."
            value={this.state.value}
            />
            
        </div>
        <div className="commonds-operation">
            <span className="left"> <Link to="/"> No take me back</Link></span>
            <Button color="secondary" className="right" onClick={this.handlePlay}> Ok let's do</Button>

        </div>
    </div>
    </div>
</Fragment>
        )
    }
}

export default withRouter (quizInstruction)


