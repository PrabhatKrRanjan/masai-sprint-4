import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Table.module.css';
import { addJobs } from './../redux/action';
import { connect } from 'react-redux'


class AddJobs extends Component {
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
        this.props.addJobs(job)
    }

    handelSelect = (e) => {
        let [companyName, place] = e.target.value.split(',')
        console.log(e.target.value.split(','))
        this.setState({
            companyName :companyName,
            place : place 
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

                    <button type='submit'>Add Jobs</button>
                </form>
 
                <div className={styles.goBack}>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        )
    }
}


const mapStateToPrrops = (state) => ({
    companyList : state.companyList,
    jobList : state.jobList
})

const mapDispatchToProps = (dispatch) => ({
    addJobs : (payload) => dispatch(addJobs(payload))
})

export default connect (mapStateToPrrops, mapDispatchToProps) (AddJobs)