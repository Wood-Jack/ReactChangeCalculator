import React, { Component } from 'react';

class App extends React.Component {

  constructor(props) {
    
    super(props);

    this.state={moneyDue: ' ', moneyRec: ' ' , payment: ''}

    this.moneyDueChange = this.moneyDueChange.bind(this);
    this.moneyRecChange = this.moneyRecChange.bind(this);
    this.calChange = this.calChange.bind(this);
 
  }
  
  moneyDueChange(e){
    this.setState({moneyDue: e.target.value});
  }

  moneyRecChange(e){

    this.setState({moneyRec: e.target.value});

  }

  calChange(e)
  {

    e.preventDefault();
    const moneyDue = this.state.moneyDue;
    const moneyRec= this.state.moneyRec;

    const payment = this.calculate(moneyDue, moneyRec);

    return "Customer change: "+ payment;

  }

  calculate(moneyDue, moneyRec){

    const twenties = 20.00;
    const tens = 10.00;
    const fives = 5.00;

    const dollar= 1.00;
    const quarter= .25; 
    const dime= .10;
    const nickel = .05;
    const penny = .01;

    const moneyBack = moneyDue - moneyRec;
    const twentiesBack = moneyBack / twenties;
    const tensBack = moneyBack / tens;
    const fivesBack = moneyBack / fives;
    const dollarsBack = moneyBack / dollar;
    const quartersBack = moneyBack / quarter;
    const dimeBack = moneyBack / dime;
    const nickelBack = moneyBack / nickel;
    const pennyBack = moneyBack / penny;

    return " Change Due: " + moneyBack +" Twenties: " + twentiesBack + " Tens: " + tensBack + " Fives: " + fivesBack +
    " Dollars: " + dollarsBack + " Quarters: " + quartersBack +
    " Dimes: " + dimeBack + " Nickels: " + nickelBack +
    " Pennines: " + pennyBack ;

  } 

  render() {


    return(

      <div className =" container">
         
        <div className ="row">
          
          <div className = "col">
            <div className =" panel-body">
              <label>Cost of Item</label>

            <input  className="Due" type = "number" value={this.state.moneyDue} onChange= {this.moneyDueChange} ></input>

              <label>Money Given</label>

            <input  className="Rec" type = "number" value={this.state.moneyRec} onChange = {this.moneyRecChange}></input>
            <button  className= "submitBtn">Calculate</button>
            </div>
          
          </div>
          
          <div className="outcome-Alert">
            <div className ="totalChange">Total Change:
            </div>
            
            <div className ="additional money">Additional money:
            </div>
          
          </div>

          <div className="grid-Deno">
            <div className ="col-twenties" onClick= {this.calChange} >Twenties:</div>
            <div  className ="col-tens">Tens:</div>
            <div className ="col-fives">Fives:</div>
            <div className ="col-ones">Ones:</div> 
            <div className ="col-quarters">Quarters:</div>
            <div className ="col-dimes">Dimes:</div>
            <div className ="col-nickels">Nickels:</div>
            <div className ="col-pennies">Pennies:</div>
            
          </div>
        
        </div>
        
      </div>
     );
  }
}

export default App;
 