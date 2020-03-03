import React, { Component } from 'react';
import styles from './Table.module.css';
import { connect } from 'react-redux';
import {deleteCompany,editJob } from './../redux/action';
import { Link } from 'react-router-dom'


class Table extends Component {
    render() {
        return (
            <>
            <div className={styles.tableHeader}>
                {['Comany','Location','Job Title','No of Opening','Salary','Edit','Delete'].map((item,index)=>
                    <div key={index}>
                        <div>{item}</div>
                    </div>
                )}
            </div>

            <div>
                {this.props.jobList.map((item,index)=>
                <div className={styles.tableHeader} key={index}>
                    <div>{item.companyName}</div>
                    <div>{item.place}</div>
                    <div>{item.jobTitle}</div>
                    <div>{item.jobQuantity}</div>
                    <div>{item.salary}</div>
                    <div><Link to={`/Edit/${index}`}>Edit</Link></div>
                    <button onClick={()=>this.props.deleteCompany(index)}>Delete</button>
                </div>
                )}
            </div>
            </>
        ) 
    }
}

const mapStateToProps = (state) => ({
    jobList : state.jobList
})


const mapDispatchToProps = dispatch => ({
    deleteCompany : (payload)=> dispatch(deleteCompany(payload))
})



export default connect (mapStateToProps, mapDispatchToProps) (Table)