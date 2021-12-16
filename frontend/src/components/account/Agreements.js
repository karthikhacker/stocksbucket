import React from 'react'

const Agreements = ({ nextStep, prevStep, values }) => {
    // handle continue 
    const handleContinue = (e) => {
        e.preventDefault();
        if (values.agreements === '') {
            values.setAgreementsError('Agreement is required.')
        } else if (values.signed_at === '') {
            values.setSignedAtError('Signing time is required.')
        } else if (values.ip_address === '') {
            values.setIpAddressError('Ip address is required.');
        } else if (values.revision === '') {
            values.setRevisionError('Revsion is required.')
        } else {
            nextStep()
        }
    }
    // handleBack
    const handleBack = (e) => {
        e.preventDefault()
        prevStep();
    }
    return (
        <div className='detail-section'>
            <h3>Agreements</h3>
            <div className='form-group'>
                <label className='label'>Agreements</label>
                <select className='form-control' defaultValue={values.agreements} onChange={e => values.setAgreements(e.target.value)}>
                    <option>Select an agreement type</option>
                    <option value="margin_agreement">Margin agreement</option>
                    <option value="account_agreement">Account agreement</option>
                    <option value="customer_agreement">Customer agreement</option>
                </select>
            </div>
            {values.agreementsError && <span className='account-error-msg'>{values.agreementsError}</span>}
            <div className='form-group'>
                <label className='label'>Singed at</label>
                <input
                    type="time"
                    className='form-control'
                    defaultValue={values.singed_at}
                    onChange={e => values.setSignedAt(e.target.value)}
                    placeholder='Signed at'
                />
            </div>
            {values.signed_at_error && <span className='account-error-msg'>{values.signed_at_error}</span>}
            <div className='form-group'>
                <label className='label'>Ip address</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.ip_address}
                    onChange={e => values.setIpAddress(e.target.value)}
                    placeholder='Ip address'
                />
            </div>
            {values.ip_address_error && <span className='account-error-msg'>{values.ip_address_error}</span>}
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
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div>
    )
}

export default Agreements
