import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from './components/KeyPad';

class App extends Component {
    
    state = {
        result: '0'
    }

    onClick = button => {
        
        

        if(button === '='){
            this.calulate()
        }
        else if (button === 'C'){
            this.reset()
        }
        else if (button === 'CE'){
            this.backspace()
        }else {
            if(this.state.result === '0'){
                this.setState({
                    result: '' + button
                })
            }else{
                this.setState({
                result: this.state.result + button
               
            })
            }
            
        }
    }
            

    calulate = () => {
        try {
            if(Number.isInteger(eval(this.state.result))){
                this.setState({
                    result:  (eval(this.state.result) || "") + ""
                })
            }else{
                this.setState({
                result:  (eval(this.state.result).toFixed(2) || "") + ""
            })
            }
           
            
        } catch {
            this.setState({
                result: "error"
            })
        };
    };

    reset = () => {
        this.setState({
            result: '0'
        })
    };
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    };
    

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 style={{color: "whitesmoke"}}>Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;