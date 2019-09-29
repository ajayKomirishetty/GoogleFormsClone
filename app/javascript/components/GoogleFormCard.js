import React from "react"


class GoogleFornCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      form : this.props.form
    }
  }
  render(){
    var form = this.state.form
     
    const cardStyle = {
      width: "18rem"
    };


    return(
      <React.Fragment>
        <div className="card" style={{display: 'flex', flexDirection: 'row'}}   key={form.id}>
        <img className="card-img-top" src="..." alt="Card image cap" />

        <div className="card-body">
          <h5 className="card-title">{form.title}</h5>
          <p className="card-text">{form.description}</p>
          <a href={"/forms/"+form.id} className="btn btn-primary">View</a>
        </div>
          {/* <div>{form.id}</div>
          <div>{form.title}</div>
          <div>{form.description}</div>
          <div><a href={"/forms/"+form.id}>view</a></div> */}
        </div>
      </React.Fragment>
    )
  }
}
export default  GoogleFornCard