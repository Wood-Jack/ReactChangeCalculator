import React, { Component } from 'react';


class App extends React.Component {

  constructor(props) {
    
    super(props);
    this.state={moneyDue: ' ', moneyRec: ' ' , changeOutput: undefined , displayer: false};
    this.moneyDueChange = this.moneyDueChange.bind(this);
    this.moneyRecChange = this.moneyRecChange.bind(this);
    this.calChange = this.calChange.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);

  }
  
  moneyDueChange(e){
    this.setState({moneyDue: e.target.value});
  }

  moneyRecChange(e){
    this.setState({moneyRec: e.target.value});
  }

  handleDisplay(e)
  {
    const moneyDue = this.state.moneyDue;
    const moneyRec= this.state.moneyRec;
    const changeLeft = ( moneyRec- moneyDue);

    if(changeLeft >= 0 )
    {

     return this.setState({ displayer: !this.state.displayer});
    }
    else
    {

      return this.setState({displayer: this.state.displayer});
    }
  }
  
  calChange(e)
  {

    e.preventDefault();

    const moneyDue = this.state.moneyDue;
    const moneyRec= this.state.moneyRec;

    const changeDue = ( moneyRec- moneyDue);

    let twentiesDue = Math.floor(changeDue / 20.00);
    let twentiesLeft = changeDue % 20.00;

    let tensDue = Math.floor(twentiesLeft/ 10.00);
    let tensLeft = twentiesLeft % 10.00;

    let fivesDue = Math.floor(tensLeft/ 5.00);
    let fivesLeft = tensLeft % 5.00;

    let dollarsDue= Math.floor(fivesLeft/1);
    let coinsDue= fivesLeft % 1;
    
    let quartersDue = Math.floor(coinsDue / 0.25); 
    let quartersLeft = coinsDue % 0.25;

    let dimesDue= Math.floor(quartersLeft / 0.10);
    let dimesLeft= quartersLeft % 0.10;

    let nickelsDue = Math.floor(dimesLeft / 0.05);
    let nickelsLeft = dimesLeft % 0.05;

    let penniesDue = Math.round(nickelsLeft / 0.01);

    this.setState({
      
      changeOutput: changeDue, 
      twenties: twentiesDue,
      tens: tensDue ,
      fives: fivesDue, 
      ones: coinsDue, 
      quarter: quartersDue,
      dime: dimesDue ,
      nickel: nickelsDue,
      penny: penniesDue

    });

  }

  render() {
    return(

      <div className ="container d-flex justify-content-center mt-5 " >
         
        <div className ="row">
          
          <div className = "col-4">
            <div className =" panel-body bg-light" id="firstCon">
              <label>Cost of Item / Money Due </label>
            <input  className="Due" type = "number" value={this.state.moneyDue} onChange= {this.moneyDueChange} ></input>
              <label> Money Given</label>
            <input  className="Rec" type = "number" value={this.state.moneyRec} onChange = {this.moneyRecChange}></input>
            <button  className= "submitBtn" onClick = {this.calChange}>Calculate</button>
            </div>
          
          </div>
          
          <div className="col-8 ">            
          <div className="grid-Deno bg-light" id="secondCon" >
            
            <div className = 'alert alert-success text-center lead' role='alert' onClick= {this.calChange} >
              <p className = 'lead'>Success:Total Change: ${this.state.changeOutput} </p> </div>
            
            <div className ="col-twenties text-info" onClick= {this.calculate} > <p className = 'lead'>Twenties:
            {this.state.twenties}</p></div>
            <div  className ="col-tens text-info"><p className = 'lead'>Tens:
            {this.state.tens}</p></div>
            <div className ="col-fives text-info"><p className = 'lead'>Fives:
            {this.state.fives}</p></div>
            <div className ="col-ones text-info"><p className = 'lead'> Ones:
            {this.state.ones}</p></div> 
            <div className ="col-quarters text-info"> <p className = 'lead'>Quarters:
            {this.state.quarter}</p></div>
            <div className ="col-dimes text-info"><p className = 'lead'>Dimes:
            {this.state.dime}</p></div>
            <div className ="col-nickels text-info"><p className = 'lead'> Nickels:
            {this.state.nickel}</p></div>
            <div className ="col-pennies text-info"><p className = 'lead'> Pennies:
            {this.state.penny}</p></div>

            <div className = 'alert alert-danger text-center lead' role='alert' onClick= {this.calChange} ><p className = 'lead'>Danger:Additional Money Owed: ${this.state.changeDue} </p> </div>

            </div>
            
          </div>
        
        </div>
  
      </div>
     );
  }
}

export default App;
 