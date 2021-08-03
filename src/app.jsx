import React, { Component } from 'react';
import '.../css/styles.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={moneyDue: ' ', moneyRec: ' ' , payment: ''}

    this.moneyDueChange = this.moneyDueChange.bind(this);
    this.moneyRecChange = this.moneyRecChange.bind(this);

    this.CalChange = this.CalChange.bind(this);
 
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

    return " Twenties: " + twentiesBack + " Tens: " + tensBack + " Fives: " + fivesBack +
    " Dollars: " + dollarsBack + " Quarters: " + quartersBack +
    " Dimes: " + dimeBack + " Nickels: " + nickelBack +
    " Pennines: " + pennyBack ;

  }



  render() {

    return(

    <header>

      
      <div class =" container">
        
        {/* // needs a tagline */
        <div class ="row">
          <div class = "col">
            <div class =" panel-body">
              <label>Cost of Item</label>
            <input name="due" className="Due">How much is due?</input>
              <label>Money Given</label>
            <input name="received" className="Rec">How much is due?</input>
            <button name ='submit' className= "submitBtn">Calculate</button>
            </div>
          
          </div>
          
          <div class ="col" className="outcome-Alert">
            <div name ="totalChange">
            </div>
            
            <div name ="additional money">
            </div>
          
          </div>
          <div name="grid-Deno">
            <div class ="col" name="twenties"></div>
            <div class ="col"  name="tens"></div>
            <div class ="col"  name="fives"></div>
            <div class ="col"  name="ones"></div> 
            <div class ="col"  name="quarters"></div>
            <div class ="col"  name="dimes"></div>
            <div class ="col"  name="nickels"></div>
            <div class ="col"  name="pennies"></div>
            
          </div>
         

        
        </div>
      }
      </div>
     </header>
     );

  }
}

export default App
 