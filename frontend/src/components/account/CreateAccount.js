import React, { useState } from 'react'
import Contact from './Contact';
import Identity from './Identity';
import Disclosures from './Disclosures';
import Agreements from './Agreements';
import Documents from './Documents';
import TrustedContacts from './TrustedContacts';

const CreateAccount = () => {
    const [step, setStep] = useState(1);
    //contact
    const [email_address, setEmailAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [street_address, setStreetAddress] = useState([]);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postal_code, setPostalcode] = useState('');
    const [email_address_error, setEmailError] = useState(null);
    const [phone_number_error, setPhoneNumberError] = useState(null);
    const [street_address_error, setStreetAddressError] = useState(null);
    const [cityError, setCityError] = useState(null);
    const [stateError, setStateError] = useState(null);
    // identity 
    const [given_name, setGivenName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [tax_id, setTaxId] = useState('');
    const [tax_id_type, setTaxIdType] = useState('');
    const [country_of_citizenship, setCountryOfCitizenship] = useState('');
    const [country_of_birth, setCountryOfBirth] = useState('');
    const [country_of_tax_residence, setCountryOfTaxResidence] = useState('');
    const [visa_type, setVisaType] = useState('');
    const [visa_expiration_date, setVisaExpirationDate] = useState('');
    const [date_of_departure_from_usa, setDateOfDepartureFromUsa] = useState('');
    const [permanent_resident, setPermanentResident] = useState('');
    const [funding_source, setFundingSource] = useState('');
    const [annual_income_min, setAnnualIncomeMin] = useState('');
    const [annual_income_max, setAnnualIncomeMax] = useState('');
    const [liquid_net_worth_min, setLiquidNetWorthMin] = useState('');
    const [liquid_net_worth_max, setLiquidNetWorthMax] = useState('');
    const [total_net_worth_min, setTotalNetWorthMin] = useState('');
    const [total_net_worth_max, setTotalNetWorthMax] = useState('');
    //Disclousures
    const [is_control_person, setIsControlPerson] = useState(false);
    const [is_affiliated_exchange_or_finra, setIsAffiliatedExchangeOrFinra] = useState(false);
    const [is_politically_exposed, setIsPoliticallyExposed] = useState(false);
    const [immediate_family_exposed, setImmediateFamilyExposed] = useState(false);
    const [employment_status, setEmploymentStatus] = useState('');
    const [employer_name, setEmployerName] = useState('');
    const [employer_address, setEmployerAddress] = useState('');
    const [employment_position, setEmploymentPosition] = useState('');
    //Agreements 
    const [agreements, setAgreements] = useState('');
    const [signed_at, setSignedAt] = useState('');
    const [ip_address, setIpAddress] = useState('');
    const [revision, setRevision] = useState('');
    //Document
    const [documents, setDocuments] = useState([]);
    const [document_type, setDocumentType] = useState('');
    const [document_sub_type, setDocumentSubType] = useState('');
    //trusted contacts
    const [trusted_name, setTrustedName] = useState('');
    const [trusted_family_name, setTrustedFamilyName] = useState('');
    //Next step 
    const nextStep = () => {
        setStep(step + 1);
    }
    //prev step 
    const prevStep = () => {
        setStep(step - 1)
    }
    const values = {
        email_address,
        setEmailAddress,
        phone_number,
        setPhoneNumber,
        street_address,
        setStreetAddress,
        city,
        setCity,
        state,
        setState,
        postal_code,
        setPostalcode,
        given_name,
        setGivenName,
        family_name,
        setFamilyName,
        date_of_birth,
        setDateOfBirth,
        tax_id,
        setTaxId,
        tax_id_type,
        setTaxIdType,
        country_of_birth,
        setCountryOfBirth,
        country_of_citizenship,
        setCountryOfCitizenship,
        country_of_tax_residence,
        setCountryOfTaxResidence,
        visa_type,
        setVisaType,
        visa_expiration_date,
        setVisaExpirationDate,
        date_of_departure_from_usa,
        setDateOfDepartureFromUsa,
        permanent_resident,
        setPermanentResident,
        funding_source,
        setFundingSource,
        annual_income_min,
        setAnnualIncomeMin,
        annual_income_max,
        setAnnualIncomeMax,
        liquid_net_worth_min,
        setLiquidNetWorthMin,
        liquid_net_worth_max,
        setLiquidNetWorthMax,
        total_net_worth_max,
        total_net_worth_min,
        setTotalNetWorthMin,
        setTotalNetWorthMax,
        is_control_person,
        setIsControlPerson,
        is_affiliated_exchange_or_finra,
        setIsAffiliatedExchangeOrFinra,
        is_politically_exposed,
        setIsPoliticallyExposed,
        immediate_family_exposed,
        setImmediateFamilyExposed,
        employment_status,
        setEmploymentStatus,
        employer_name,
        setEmployerName,
        employer_address,
        setEmployerAddress,
        employment_position,
        setEmploymentPosition,
        agreements, setAgreements,
        signed_at,
        setSignedAt,
        ip_address,
        setIpAddress,
        revision,
        setRevision,
        documents,
        setDocuments,
        document_type,
        setDocumentType,
        document_sub_type,
        setDocumentSubType,
        trusted_name,
        setTrustedName,
        trusted_family_name,
        setTrustedFamilyName,
        email_address_error,
        setEmailError,
        phone_number_error,
        setPhoneNumberError,
        street_address_error,
        setStreetAddress,
        cityError,
        setCityError,
        stateError,
        setStateError
    };
    // show Step
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <Contact
                    nextStep={nextStep}
                    values={values}
                />
            case 2:
                return <Identity
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={values}
                />
            case 3:
                return <Disclosures
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={values}
                />
            case 4:
                return <Agreements
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={values}
                />
            case 5:
                return <Documents
                    prevStep={prevStep}
                    nextStep={nextStep}
                    values={values}
                />
            case 6:
                return <TrustedContacts
                    prevStep={prevStep}
                    values={values}
                />

        }
    }
    return (
        <div className="account">
            <h1>Create account</h1>
            {showStep(step)}
        </div>
    )
}

export default CreateAccount