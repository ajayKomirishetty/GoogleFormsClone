import React from "react"

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
        <tr key={form.id}>
          <td>{form.id}</td>
          <td>{form.title}</td>
          <td>{form.description}</td>
          <td><a href={"/forms/"+form.id}>view</a></td>
        </tr>
      )
    });

    return(
      <React.Fragment>
        <div className="table-responsive">          
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
        

            
                {forms}
            

            {/* <% @forms.each do |form| %>
              
              <tr>
                <td><%= form.id %></td>
                <td><%= form.title %></td>
                <td><%= form.description %></td>
                # <td><%= product.price %></td>
                <td><a href="/products/<%= form.id %>">view</a></td>
              </tr>
              <% end %> */}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

 export default DisplayAllForms;