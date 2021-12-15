import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Documents = ({ nextStep, prevStep, values }) => {
    const [error, setError] = useState(null);
    const [preview, setPreview] = useState(null);
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
    //handle file 
    const handleFile = (e) => {
        const selected = e.target.files[0];
        // console.log(selected);
        const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'];
        if (selected && allowedTypes.includes(selected.type)) {
            // console.log('selected');
            let reader = new FileReader();
            reader.onloadend = () => {
                setPreview(selected);
                const mime_type = selected.type;
                const content = reader.result;
                const { document_type, document_sub_type } = values;
                const docData = {
                    id: uuidv4(),
                    mime_type,
                    content,
                    document_type,
                    document_sub_type,
                    createdAt: Date.now()
                }
                values.setDocuments([docData])
                setError(null)
            }
            reader.readAsDataURL(selected);
        } else {
            setError('File not supported.')
            setPreview(null)
        }
    }
    //console.log(values.documents);
    return (
        <div className='detail-section'>
            <h3>Documents</h3>
            <div className='form-group'>
                <label className='label'>Select document type</label>
                <select className='form-control' onChange={e => values.setDocumentType(e.target.value)}>
                    <option>Select a document type</option>
                    <option value="identity_verification	">Identity verification</option>
                    <option value="address_verification	">Address verification</option>
                    <option value="date_of_birth_verification">Date of birth verification</option>
                    <option value="tax_id_verification">Tax ID verification</option>
                    <option value="account_approval_letter">407 approval letter</option>
                    <option value="w8ben">W-8 BEN tax form</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='label'>Document sub type</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.document_sub_type}
                    onChange={e => values.setDocumentSubType(e.target.value)}
                    placeholder="Document sub type"
                />
            </div>
            <div className='form-group'>
                <button className='file-btn'>
                    <i className="fas fa-cloud-upload-alt"></i>
                    Choose a file to upload
                </button>
                <input
                    type="file"
                    onChange={handleFile}
                />
            </div>
            <p>{preview ? preview.name : null}</p>
            {error ? <span className='file-error'>{error}</span> : null}
            <br />
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div>
    )
}

export default Documents
