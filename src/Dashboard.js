import React,{Component} from 'react';
export default class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state={
      regional:[],
      stateData:{
       name:"",
       totalBeds:0,
       totalHospitals:0,
       ruralHospitals:0,
       urbanHospitals:0
      },
    }
    
   
  }
  componentDidMount(){
    fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
    .then(response=>response.json())
    .then((data)=>{
      console.log(data.data.regional);
      this.setState({
        regional:
        data.data.regional});
    })
  }
  changestateData(event){
this.setState({
  stateData:event
})

  }
  render(){
    return (
      <div>
        <h1>
          Covid Essentials
         
        </h1>
        <h7>
         Search For Your State
        </h7>
       <br/>
       <input type="text" placeholder="state" name="search" onChange={(event)=>this.changestateData(event.target.value)}/>
       <button className="btn btn-primary track" onClick={()=>{this.getdata()}}>Track</button>
      
       <div>
       <table class="table table-dark">
       <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">STATE</th>
              <th scope="col">TOTAL HOSPITALS</th>
              <th scope="col">TOTAL BEDS</th>
            </tr>
          </thead>
          </table>
         {
           
           this.state.regional.map((region,index)=>{
             return (
             <div className="table-responsive">
              <table class="table table-bordered mytable">
              <tbody>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{region.state}</td>
                  <td>{region.totalHospitals}</td>
                  <td>{region.totalBeds}</td>
                </tr>
                
              </tbody>
           </table>
           </div>
             )
           })
         }
       </div>
      </div>
    )
  }
}