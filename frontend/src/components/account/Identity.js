import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { createAccount } from '../../actions/accountAction';

const Identity = ({ values, nextStep }) => {
    // const dispatch = useDispatch();
    const accData = useSelector(state => state.acc);
    const { error } = accData;

    const continueNext = e => {
        e.preventDefault();
        const { given_name, family_name, date_of_birth, tax_id, tax_id_type, country_of_citizenship, country_of_birth, country_of_tax_residence, visa_type, visa_expiration_date, date_of_departure_from_usa, permanent_resident, funding_source, annual_income_min, annual_income_max, liquid_net_worth_min, liquid_net_worth_max, total_net_worth_min, total_net_worth_max } = values;
        if (given_name === '') {
            values.setGivenNameError('Name is required');
        } else if (family_name === '') {
            values.setFamilyNameError('Fmaily name is required')
        } else if (date_of_birth === '') {
            values.setDateOfBirthError("Date of birth is required");
        } else if (tax_id === '') {
            values.setTaxIdError("Tax id is required.")
        } else if (tax_id_type === '') {
            values.setTaxIdTypeError('Tax id type is required.')
        } else if (country_of_tax_residence === '') {
            values.setCountryOfTaxResidenceError("Country of tax residence is required.")
        } else if (funding_source === null) {
            values.setFundingSourceError("Funding source is required.")
        } else {
            nextStep()
            // console.log({ given_name, family_name, date_of_birth, tax_id, tax_id_type, country_of_citizenship, country_of_birth, country_of_tax_residence, funding_source })
            // const identity = {
            //     given_name,
            //     family_name,
            //     date_of_birth,
            //     tax_id, tax_id_type,
            //     country_of_citizenship,
            //     country_of_birth,
            //     country_of_tax_residence,
            //     funding_source,
            //     visa_type,
            //     visa_expiration_date,
            //     date_of_departure_from_usa,
            //     permanent_resident,
            //     annual_income_min,
            //     annual_income_max,
            //     liquid_net_worth_min,
            //     liquid_net_worth_max,
            //     total_net_worth_min,
            //     total_net_worth_max
            // }
            // dispatch(createAccount(identity))
        }
    }
    //console.log(accData);

    // tax type 
    const taxType = [
        "USA_SSN",
        "ARG_AR_CUIT",
        "AUS_TFN",
        "AUS_ABN",
        "BOL_NIT",
        "BRA_CPF",
        "CHL_RUT",
        "COL_NIT",
        "CRI_NITE",
        "DEU_TAX_ID",
        "DOM_RNC",
        "ECU_RUC",
        "FRA_SPI",
        "GBR_UTR",
        "GBR_NINO",
        "GTM_NIT",
        "HND_RTN",
        "HUN_TIN",
        "IDN_KTP",
        "IND_PAN",
        "ISR_TAX_ID",
        "ITA_TAX_ID	",
        "JPN_TAX_ID",
        "MEX_RFC",
        "NIC_RUC",
        "NLD_TIN",
        "PAN_RUC",
        "PER_RUC",
        "PRY_RUC",
        "SGP_NRIC",
        "SGP_FIN",
        "SGP_ASGD",
        "SGP_ITR",
        "SLV_NIT",
        "SWE_TAX_ID",
        "URY_RUT",
        "VEN_RIF"
    ];
    const visa = [
        "B1",
        "B2",
        "DACA",
        "E1",
        "E2",
        "E3",
        "F1",
        "G4",
        "H1B",
        "J1",
        "L1",
        "Other",
        "O1",
        "TN1"
    ]
    // console.log(error);
    return (
        <div className='detail-section'>
            <h3>Identity</h3>
            <div className='form-group'>
                <label className='label'>Name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.given_name}
                    onChange={e => values.setGivenName(e.target.value)}
                    placeholder='Name'
                />
            </div>
            {values.given_name_error && <span className='account-error-msg'>{values.given_name_error}</span>}
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
            {values.family_name_error && <span className='account-error-msg'>{values.family_name_error}</span>}
            <div className='form-group'>
                <label className='label'>Date of birth</label>
                <input
                    type="date"
                    className='form-control'
                    defaultValue={values.date_of_birth}
                    onChange={e => values.setDateOfBirth(e.target.value)}
                />
            </div>
            {values.date_of_birth_error && <span className='account-error-msg'>{values.date_of_birth_error}</span>}
            <div className='form-group'>
                <label className='label'>Tax id</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.tax_id}
                    onChange={e => values.setTaxId(e.target.value)}
                    disabled={values.tax_id_type === '' ? true : false}
                    placeholder='Tax id'
                />
            </div>
            {values.tax_id_error && <span className='account-error-msg'>{values.tax_id_error}</span>}
            <div className='form-group'>
                <label className='label'>Tax id type</label>
                <select className='form-control' defaultValue={values.tax_id_type} onChange={e => values.setTaxIdType(e.target.value)} multiple={false}>
                    <option value="">Select tax id type</option>
                    {taxType.map(tax => (
                        <option value={tax} key={tax}>{tax}</option>
                    ))}
                </select>
            </div>
            {values.tax_id_type_error && <span className='account-error-msg'>{values.tax_id_type_error}</span>}
            <div className='form-group'>
                <label className='label'>Country of citizenship</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.country_of_citizenship}
                    onChange={e => values.setCountryOfCitizenship(e.target.value.toUpperCase())}
                    placeholder='Country of citizenship'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Country of Birth</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.country_of_birth}
                    onChange={e => values.setCountryOfBirth(e.target.value.toUpperCase())}
                    placeholder='Country of Birth'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Country of tax residence</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.country_of_tax_residence}
                    onChange={e => values.setCountryOfTaxResidence(e.target.value.toUpperCase())}
                    placeholder='Country of tax residence'
                />
            </div>
            {values.country_of_tax_residence_error && <span className='account-error-msg'>{values.country_of_tax_residence_error}</span>}
            <div className='form-group'>
                <label className='label'>Visa type</label>
                <select className='form-control' defaultValue={values.visa_type} onChange={e => values.setVisaType(e.target.value)} multiple={false}>
                    <option value="">Visa type</option>
                    {visa.map(v => (
                        <option value={v} key={v}>{v}</option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label className='label'>Visa expiration date</label>
                <input
                    type="date"
                    className='form-control'
                    defaultValue={values.visa_expiration_date}
                    onChange={e => values.setVisaExpirationDate(e.target.value)}
                    placeholder='Visa expiration date'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Date of deperature from usa</label>
                <input
                    type="date"
                    className='form-control'
                    defaultValue={values.date_of_departure_from_usa}
                    onChange={e => values.setDateOfDepartureFromUsa(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='label'>Permanent residence</label>
                <select className='form-control' defaultValue={values.permanent_resident}>
                    <option value="">Is permanent resident</option>
                    <option values="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='label'>Funding source</label>
                <select className='form-control' defaultValue={values.funding_source} onChange={e => values.setFundingSource([e.target.value])} multiple={false}>
                    <option value="">Select funding source</option>
                    <option value="employment_income">Employment income</option>
                    <option value="investment">Investments</option>
                    <option value="inheritance">Inheritance	</option>
                    <option value="business_income">Business income</option>
                    <option value="savings">Savings</option>
                    <option value="family">family</option>
                </select>
            </div>
            {values.funding_source_error && <span className='account-error-msg'>{values.funding_source_error}</span>}
            <div className='form-group'>
                <label className='label'>Annual income minimum</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.annual_income_min}
                    onChange={e => values.setAnnualIncomeMin(e.target.value)}
                    placeholder='Annual income minimum'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Annual income maximum</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.annual_income_max}
                    onChange={e => values.setAnnualIncomeMax(e.target.value)}
                    placeholder='Annual income maximum'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Liquid net worth minimum</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.liquid_net_worth_min}
                    onChange={e => values.setLiquidNetWorthMin(e.target.value)}
                    placeholder='Liquid net worth minimum'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Liquid net worth maximum</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.liquid_net_worth_max}
                    onChange={e => values.setLiquidNetWorthMax(e.target.value)}
                    placeholder='Liquid net worth maximum'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Total net worth minimum</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.total_net_worth_min}
                    onChange={e => values.setTotalNetWorthMin(e.target.value)}
                    placeholder='Total net worth minimum'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Total net worth maximum</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.total_net_worth_max}
                    onChange={e => values.setTotalNetWorthMax(e.target.value)}
                    placeholder='Total net worth maximum'
                />
            </div>
            <br />
            <button className='btn' onClick={continueNext}>Next</button>
        </div >
    )
}

export default Identity
