import React, { Component } from 'react'

export class timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             time : {}
        }
    }
    componentDidMount(){
        this.startTimer();
    }
    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;
    
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                  
                })
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
                sessionStorage.setItem('minute', this.state.time.minutes)
                sessionStorage.setItem('second', this.state.time.seconds)
            }
        }, 1000)
      
    }

    render() {
        return (
            <div>
         
           <div>
           {sessionStorage.getItem('minute')}
           </div>
            <div>
            {sessionStorage.getItem('second' )}
            </div>
            </div>
        )
    }
}

export default timer




