import React from 'react'
import axios from 'axios';

const Agreements = ({ nextStep, prevStep, values }) => {
    const { margin_agreement, account_agreement, customer_agreement, signed_at, ip_address, revision } = values;

    //go Back 
    const goBack = () => {
        prevStep()
    }
    // get ip address 
    const getIp = async () => {
        const res = await axios.get('https://api.ipify.org/?format=json');
        //console.log(res.data.ip);
        values.setIpAddress(res.data.ip);
    }
    getIp();
    // continueNext 
    const continueNext = e => {
        e.preventDefault();
        if (values.margin_agreement === '') {
            values.setMarginAgreementError("Margin agreement is required.")
        } else if (values.account_agreement === '') {
            values.setAccountAgreementError("Account error is required.")
        } else if (values.customer_agreement === '') {
            values.setCustomerAgreementError('Customer agreement is required.')
        } else if (values.revision === '') {
            values.setRevisionError("Revision is required.")
        } else {
            const date = new Date();
            values.setAgreements([
                {
                    agreement: margin_agreement,
                    signed_at: date.toISOString(),
                    ip_address,
                    revision
                },
                {
                    agreement: account_agreement,
                    signed_at: date.toISOString(),
                    ip_address,
                    revision
                },
                {
                    agreement: customer_agreement,
                    signed_at: date.toISOString(),
                    ip_address,
                    revision
                }
            ])
            nextStep()
        }
    }
    console.log(margin_agreement, account_agreement, customer_agreement);
    return (
        <div className='detail-section'>
            <h3>Agreements</h3>
            <div className='form-group'>
                <label className='label'>margin agreement</label>
                <select
                    className='form-control'
                    defaultValue={values.margin_agreement}
                    onChange={e => values.setMarginAgreement(e.target.value)}
                    multiple={false}
                >
                    <option value="">Select the agreement</option>
                    <option value="margin_agreement">Margin agreement</option>
                </select>
            </div>
            {values.margin_agreement_error && <span className='account-error-msg'>{values.margin_agreement_error}</span>}
            <div className='form-group'>
                <label className='label'>Account agreement</label>
                <select
                    className='form-control'
                    defaultValue={values.account_agreement}
                    onChange={e => values.setAccountAgreement(e.target.value)}
                    multiple={false}
                >
                    <option value="">Select the agreement</option>
                    <option value="account_agreement">Account agreement</option>
                </select>
            </div>
            {values.account_agreement_error && <span className='account-error-msg'>{values.account_agreement_error}</span>}
            <div className='form-group'>
                <label className='label'>Customer agreement</label>
                <select
                    className='form-control'
                    defaultValue={values.customer_agreement}
                    onChange={e => values.setCustomerAgreement(e.target.value)}
                    multiple={false}
                >
                    <option value="">Select the agreement</option>
                    <option value="customer_agreement">Customer agreement</option>
                </select>
            </div>
            {values.customer_agreement_error && <span className='account-error-msg'>{values.customer_agreement_error}</span>}
            <div className='form-group'>
                <label className='label'>Revision</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.revision}
                    onChange={e => values.setRevision(e.target.value)}
                    placeholder='Revision'
                />
            </div>
            {values.revisionError && <span className='account-error-msg'>{values.revisionError}</span>}
            <br />
            <button className='btn' onClick={goBack}>Back</button>
            <button className='btn' onClick={continueNext}>Next</button>
        </div>
    )
}

export default Agreements
