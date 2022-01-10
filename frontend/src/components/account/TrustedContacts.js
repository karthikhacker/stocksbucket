import React from 'react'
import Loading from '../Loading'
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../actions/accountAction';


const TrustedContacts = ({ prevStep, values }) => {
    const dispatch = useDispatch();
    const accountData = useSelector(state => state.acc);
    const { account, accLoading, error } = accountData;
    //go Back 
    const goBack = () => {
        prevStep()
    }

    // handleSubmit 
    const handleSubmit = e => {
        e.preventDefault();
        const {
            email_address,
            phone_number,
            street_address,
            city,
            state,
            postal_code,
            country,
            given_name,
            family_name,
            date_of_birth,
            tax_id,
            tax_id_type,
            country_of_citizenship,
            country_of_birth,
            country_of_tax_residence,
            funding_source,
            visa_type,
            visa_expiration_date,
            date_of_departure_from_usa,
            permanent_resident,
            annual_income_min,
            annual_income_max,
            liquid_net_worth_min,
            liquid_net_worth_max,
            total_net_worth_min,
            total_net_worth_max,
            is_control_person,
            is_affiliated_exchange_or_finra,
            is_politically_exposed,
            immediate_family_exposed,
            agreements,
            documents
        } = values;
        const contact = {
            email_address,
            phone_number,
            street_address,
            city,
            state,
            postal_code,
            country
        }
        const identity = {
            given_name,
            family_name,
            date_of_birth,
            tax_id,
            tax_id_type,
            country_of_citizenship,
            country_of_birth,
            country_of_tax_residence,
            funding_source,
            visa_type,
            visa_expiration_date,
            date_of_departure_from_usa,
            permanent_resident,
            annual_income_min,
            annual_income_max,
            liquid_net_worth_min,
            liquid_net_worth_max,
            total_net_worth_min,
            total_net_worth_max
        }
        const disclosures = {
            is_control_person,
            is_affiliated_exchange_or_finra,
            is_politically_exposed,
            immediate_family_exposed
        }
        const trusted_contact = {
            given_name,
            family_name,
            email_address
        }

        //console.log({ contact, identity, disclosures, agreements, documents, trusted_contact })
        dispatch(createAccount(contact, identity, disclosures, agreements, documents, trusted_contact))
    }
    console.log(accountData);
    return (
        <div className='detail-section'>
            <h3>Trusted contacts</h3>
            {account.message && (
                <div className='account-success-alert'>
                    <p>{account.message}</p>
                </div>
            )}
            {error && (
                <div className='account-error-alert'>
                    <p>{error.message}</p>
                </div>
            )}
            <div className='form-group'>
                <label className='label'>Name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.given_name}
                    onChange={e => values.setGivenName(e.target.value)}
                    placeholder='Family name'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Family name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.family_name}
                    onChange={e => values.setFamilyName(e.target.value)}
                    placeholder='Family name'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Email</label>
                <input
                    type="email"
                    className='form-control'
                    defaultValue={values.email_address}
                    onChange={e => values.setEmailAddress(e.target.value)}
                    placeholder='Email address'
                />
            </div>
            <button className='btn' onClick={goBack}>Back</button>
            {accLoading ? <Loading /> : <button className='btn' onClick={handleSubmit}>Submit</button>}

        </div>
    )
}

export default TrustedContacts
