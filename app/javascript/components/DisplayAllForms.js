import React from "react"
import GoogleFornCard from "./GoogleFormCard"
import { CardDeck } from 'reactstrap';


class DisplayAllForms extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      forms: this.props.forms
    };
  }

  render(){

    var forms= this.state.forms.map((form) => {
      return (
        <GoogleFornCard form = {form}/>
      )
    });

    return(
      <React.Fragment>   
        <CardDeck> 
          {forms}  
        </CardDeck>       
      </React.Fragment>
    )
  }
}

 export default DisplayAllForms;