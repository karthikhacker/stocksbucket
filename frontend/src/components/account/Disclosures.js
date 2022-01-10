import React from 'react'

const Disclosures = ({ nextStep, prevStep, values }) => {
    //go Back 
    const goBack = () => {
        prevStep()
    }
    //continue next 
    const continueNext = e => {
        e.preventDefault()
        if (values.employment_status === '') {
            values.setEmploymentStatusError("Employment status is required.")
        } else {
            nextStep()
        }
    }
    console.log(values.is_control_person);
    return (
        <div className='detail-section'>
            <h3>Disclosures</h3>
            <div className='form-group'>
                <label className='disclosures-label'>
                    <input
                        type="checkbox"
                        className='form-control-checkbox'
                        defaultValue={values.is_control_person}
                        onChange={e => values.setIsControlPerson(!values.is_control_person)}
                    />
                    Is control person
                </label>
            </div>
            <div className='form-group'>
                <label className='disclosures-label'>
                    <input
                        type="checkbox"
                        className='form-control-checkbox'
                        defaultValue={values.is_affiliated_exchange_or_finra}
                        onChange={e => values.setIsAffiliatedExchangeOrFinra(!values.is_affiliated_exchange_or_finra)}
                    />
                    Is affiliated exchange or finra
                </label>
            </div>
            <div className='form-group'>
                <label className='disclosures-label'>
                    <input
                        type="checkbox"
                        className='form-control-checkbox'
                        defaultValue={values.is_politically_exposed}
                        onChange={e => values.setIsPoliticallyExposed(!values.is_politically_exposed)}
                    />
                    Is Politically exposed
                </label>
            </div>
            <div className='form-group'>
                <label className='disclosures-label'>
                    <input
                        type="checkbox"
                        className='form-control-checkbox'
                        defaultValue={values.immediate_family_exposed}
                        onChange={e => values.setImmediateFamilyExposed(!values.immediate_family_exposed)}
                    />
                    Is immediate family exposed
                </label>
            </div>
            <div className='form-group'>
                <label className='label'>Employment status</label>
                <select className='form-control' defaultValue={values.employment_status} onChange={e => values.setEmploymentStatus(e.target.value)} multiple={false}>
                    <option value="">select employment status</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="employed">Employed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                </select>
            </div>
            {values.employment_status_error && <span className='account-error-msg'>{values.employment_status_error}</span>}
            <div className='form-group'>
                <label className='label'>Employer name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.employer_name}
                    onChange={e => values.setEmployerName(e.target.value)}
                    placeholder='Employer name'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Employer address</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.employer_address}
                    onChange={e => values.setEmployerAddress(e.target.value)}
                    placeholder='Employer address'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Employer position</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.employer_position}
                    onChange={e => values.setEmployerPosition(e.target.value)}
                    placeholder='Employer position'
                />
            </div>
            <button className='btn' onClick={goBack}>Back</button>
            <button className='btn' onClick={continueNext}>Next</button>
        </div>
    )
}

export default Disclosures
