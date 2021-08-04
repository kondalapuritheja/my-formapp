import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactDOM from 'react'
import DisplayData from './DisplayData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesforcomp.css'
class Form extends Component {
    
   
    constructor(props) {
        super(props)
       
        this.state = {
            users:[],  
            username:'',
           lastname:'',
           email:'',
           dob:'',
        }
        
    }
    handleUserNameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
       
    }       
    handleLastNameChange=(event)=>{
        this.setState({
            lastname:event.target.value
        })
       
    }     
    handleemailChange = (event)=>{
        this.setState({
            email:event.target.value
        }) 
    }
    handleDobChange = event =>{
        this.setState({
            dob:event.target.value

        })
    }
    displauUsers(){
        const arr = this.state.users
        let display = arr.map((user,index)=>{
            <h2 key={index}>username is ${user.username}</h2>
        })
    }
    
    handleSubmit=event=>{
        alert(`${this.state.username} and ${this.state.lastname} and ${this.state.email} and ${this.state.dob}`)
        event.preventDefault()
      
       //var userobj = this.state;

       const {username,lastname,email,dob} = this.state
       let obj = {
           username:this.state.username,
           lastname:this.state.lastname,
           email:this.state.email,
           dob:this.state.dob

       }
       this.setState({
           users:[...this.state.users,obj],
           username:"",
           lastname:"",
           email:"",
           dob:""

       })
      // this.state.users.push(userobj)
       console.log(this.state.users)
       console.log('data in state is ',this.state.users.username)
    }
    dynamicData = (user,index)=>{
        return (
            <tr key={index} id='t01'>
                <td>{user.username}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
            </tr>
        )
    }  
    
    
    render() {
        //console.log(arr[0])
        const {users} = this.state
        console.log('data in users array is '+users.length)
      
      return (
        
            
            <div>
              

                <form onSubmit={this.handleSubmit} >
                    <div className='box'>
                       <div className='divinput'>
                        <label>UserName 
                        <input className='fieldstyle' type="text"  placeholder ="enter username" value = {this.state.username} onChange={this.handleUserNameChange}/>
                        </label>
                        </div>
                        <div className='divinput'>
                        <label >lastname
                        <input className='fieldstyle' type="text" value={this.state.lastname} onChange={this.handleLastNameChange}/>
                        </label>
                        </div>
                        <br/>
                        <div className='divinput'>
                    <label >email
                        <input className='fieldstyle' type="text" value={this.state.email} onChange={this.handleemailChange}/>
                        </label>
                        </div>
                        <div className='divinput'>
                    <label >DateofBirth
                        <input className='fieldstyle'  type= "date" value={this.state.dob} onChange={this.handleDobChange}/>
                        </label>
                        </div>
                  <br/>
                  <br/>
                  </div>
                        <button type="submit" width ="100px" style ={{color:'red'}}>save</button>
                    
                </form>

            
            <div className='tabledata' >
               
                <table  border='2' align ='center' >
                    <thead border ='2'>
                        <tr>
                            <th>
                            FirstName
                        </th>
                        <th>
                            LastName
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Date of birth
                        </th>
                        </tr>
                    </thead>
                    <tbody>{users.length ?this.state.users.map(this.dynamicData): null}</tbody>
                </table>

            </div>
           </div>
      
        )
    }
}

export default Form