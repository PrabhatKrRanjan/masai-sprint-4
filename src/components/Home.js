import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'
import styles from './Table.module.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Add Job Details</h1>
                <div className={styles.tableHeader}>
                    <Link to='/AddCompany'> Add Company</Link>
                    <Link to='/AddJobs'> Add Jobs</Link>
                </div>
                <div style={{border : '1px solid black', margin:10}}>
                    <Table/>
                </div>
            </div>
        )
    }
}
