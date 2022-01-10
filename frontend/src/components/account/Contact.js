import React from 'react'

const Contact = ({ nextStep, prevStep, values }) => {
    const { email_address, phone_number, street_address, city, state, postal_code, country } = values;

    //go Back 
    const goBack = () => {
        prevStep()
    }

    //continue next 
    const continueNext = (e) => {
        e.preventDefault();
        if (email_address === '') {
            values.setEmailError("Email address is required.")
        } else if (phone_number === '') {
            values.setPhoneNumberError("Phone number is required.")
        } else if (street_address === '') {
            values.setStreetAddressError('Street address is required.')
        } else if (city === '') {
            values.setCityError("City is required");
        } else if (state === '') {
            values.setStateError('State is required.')
        } else if (country === '') {
            values.setCountryError("Country is required.")
        } else {
            nextStep();
        }
    }
    return (
        <div className='detail-section'>
            <h3>Contact details</h3>
            <div className='form-group'>
                <label className='label'>Email</label>
                <input
                    type="email"
                    className='form-control'
                    defaultValue={email_address}
                    onChange={e => values.setEmailAddress(e.target.value)}
                    placeholder='Email address'
                />
            </div>
            {values.email_address_error && <span className='account-error-msg'>{values.email_address_error}</span>}
            <div className='form-group'>
                <label className='label'>Phone number</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={phone_number}
                    onChange={e => values.setPhoneNumber(e.target.value)}
                    placeholder='Phone number'
                />
            </div>
            {values.phone_number_error && <span className='account-error-msg'>{values.phone_number_error}</span>}
            <div className='form-group'>
                <label className='label'>Street address</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={street_address}
                    onChange={e => values.setStreetAddress([e.target.value])}
                    placeholder='Street address'
                />
            </div>
            {values.street_address_error && <span className='account-error-msg'>{values.street_address_error}</span>}
            <div className='form-group'>
                <label className='label'>City</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={city}
                    onChange={e => values.setCity(e.target.value)}
                    placeholder='City'
                />
            </div>
            {values.cityError && <span className='account-error-msg'>{values.cityError}</span>}
            <div className='form-group'>
                <label className='label'>State</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={state}
                    onChange={e => values.setState(e.target.value)}
                    placeholder='State'
                />
            </div>
            {values.stateError && <span className='account-error-msg'>{ }values.stateError</span>}
            <div className='form-group'>
                <label className='label'>Postal code</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={postal_code}
                    onChange={e => values.setPostalcode(e.target.value)}
                    placeholder='Postal code'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Country</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={country}
                    onChange={e => values.setCountry(e.target.value.toUpperCase())}
                    placeholder='Country'
                />
            </div>
            {values.countryError && <span className='account-error-msg'>{values.countryError}</span>}
            <br />
            <button className='btn' onClick={goBack}>Back</button>
            <button className='btn' onClick={continueNext}>Next</button>
        </div>
    )
}

export default Contact
