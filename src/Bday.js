import React, { Component } from 'react'
import './Bdays.css'

export class Bday extends Component {
    state={
 
    
    datas:[

        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
        },
      ],
      clear:false,
    }
     handleclear=(e)=>{this.setState({clear:true})
     this.setState({id:'',name:'',age:'',image:''})
    }  

  render() {
    return (
      <div>
        {!this.state.clear&&(
        <div className='d'>
       <h1> {this.state.datas.length} Birthdays Today</h1>
       {this.state.datas.map((data,id)=>
       <div><div key={data.id}> <div className='a'><img  src={data.image}  height='100' width='100'/>
       <span>
         <h3>{data.name}</h3>
         <div className='f'><h4>{data.age}   Years</h4></div>
       </span>
        </div></div>
       </div>)}
       <br/>
       <div >
         <button className='b btn btn-danger' onClick={this.handleclear}>CLEAR ALL</button>
       </div>
       </div>)}
       {this.state.clear&&
       <div>
         <label>There is no Bdays</label>
         </div>}
      </div>
    )
  }
}

export default Bday