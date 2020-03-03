import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Table.module.css';
import { connect } from 'react-redux';
import {  editJob } from './../redux/action'


class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            companyName : '',
            place : '',
            jobTitle : '',
            jobQuantity : '',
            salary : 0
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        let job = {
            companyName : this.state.companyName,
            place : this.state.place,
            jobTitle : this.state.jobTitle,
            jobQuantity : this.state.jobQuantity,
            salary : this.state.salary,
        }
        let id = this.props.match.params.id
        this.props.editJob({id: id, obj: job})
    }

    handelSelect = (e) => {
        let [companyName, place] = e.target.value.split(',')
        console.log(e.target.value.split(','))
        this.setState({
            companyName :companyName,
            place : place 
        })
    } 

    componentDidMount(){
        let id = this.props.match.params.id
        console.log(id)
        let data = this.props.jobList.filter((item,index)=>index==id)
        console.log(data[0])
        this.setState({
            companyName : data[0].companyName,
            place : data[0].place,
            jobTitle : data[0].jobTitle,
            jobQuantity : data[0].jobQuantity,
            salary : data[0].salary
        })
    }

    render() {
        console.log(this.props.jobList)
        return (
            <div>
                <form className={styles.inputForm} onSubmit={this.handelSubmit}>

                    <label>Select Company Name</label>
                    <select onChange={this.handelSelect}>
                        {this.props.companyList && this.props.companyList.map((item,index) => 
                            <option value={item.companyName+","+item.place} key={index}>{item.companyName} {item.place} </option>
                        )}
                    </select>

                    <label>Enter Job Title</label>
                    <input type="text" placeholder="Enter Job Title" name='jobTitle' value={this.state.jobTitle} onChange={this.handelChange} required/>

                    <label>Enter No of Jobs</label>
                    <input type="text" placeholder="Enter No of Jobs" name='jobQuantity' value={this.state.jobQuantity} onChange={this.handelChange} required/>

                    <label>Salary</label>
                    <input type="text" placeholder="Enter Salary" name='salary' value={this.state.salary} onChange={this.handelChange} required/>

                    <button type='submit'>Update Jobs</button>
                </form>
 
                <div className={styles.goBack}>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    companyList : state.companyList,
    jobList : state.jobList
})

const mapDispatchToProps = dispatch => ({
    editJob : (payload) => dispatch(editJob(payload))
})


export default connect (mapStateToProps, mapDispatchToProps)(Edit)