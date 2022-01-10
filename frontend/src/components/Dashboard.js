import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccount } from '../actions/accountAction'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const accountData = useSelector(state => state.acc);
    const { account } = accountData;
    console.log(account.id);
    useEffect(() => {
        dispatch(getAccount())
    }, [])
    return (
        <div className="dashboard">
            {account.id && (
                <div className="kyc-msg">
                    <Link className='link' to="/create/account">Create account</Link>
                </div>
            )}
        </div>
    )
}

export default Dashboard
