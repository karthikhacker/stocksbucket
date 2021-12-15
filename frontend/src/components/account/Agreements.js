import React from 'react'

const Agreements = ({ nextStep, prevStep, values }) => {
    // handle continue 
    const handleContinue = (e) => {
        e.preventDefault()
        nextStep()
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
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div>
    )
}

export default Agreements
