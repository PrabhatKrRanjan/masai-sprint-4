import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Table.module.css';
import { connect } from 'react-redux';
import {addCompany } from './../redux/action'


class AddCompany extends Component {
    constructor(props){
        super(props)
        this.state = {
            companyName : '',
            place : ''
        }
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        let company = {
            companyName : this.state.companyName,
            place : this.state.place,
        }
        this.props.addCompany(company)
        // console.log(company)
    }

    render() {
        console.log(this.props.company)
        return (
            <div>
                <form className={styles.inputForm} onSubmit={this.handelSubmit}>
                    <label>Enter Company Name</label>
                    <input type="text" placeholder="Enter Company Name" name='companyName' value={this.state.companyName} onChange={this.handelChange} required/>

                    <label>Enter Job Location</label>
                    <input type="text" placeholder="Enter Location" name='place' value={this.state.place} onChange={this.handelChange} required/>

                    <button type='submit'>Add Company</button>
                </form>

                <div className={styles.goBack}>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    company : state.companyList
})

const mapDispatchToProps = dispatch => ({
    addCompany : (payload) => dispatch(addCompany(payload))
})


export default connect (mapStateToProps, mapDispatchToProps)(AddCompany)