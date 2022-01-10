import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Documents = ({ nextStep, prevStep, values }) => {
    const [error, setError] = useState(null);
    //go Back 
    const goBack = () => {
        prevStep()
    }
    //continueNext 
    const continueNext = e => {
        e.preventDefault();
        const { document_type, document_sub_type, mime_type, content, setDocuments } = values;
        if (document_type === '') {
            values.setDocumentTypeError('Document type is required.');
        } else if (mime_type === '') {
            values.setMimeTypeError('File is required');
        } else {
            setDocuments([
                {
                    id: uuidv4(),
                    document_type,
                    document_sub_type,
                    mime_type,
                    content
                }
            ])
            nextStep();
            values.setDocumentTypeError(null);
            values.setMimeTypeError(null);
        }
    }
    //handle file 
    const handleFile = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0];
        console.log(file);
        const validExt = ['jpeg', 'jpg', 'pdf'];
        const ext = file.type.toLowerCase();
        //console.log(ext);
        if (ext !== 'image/jpg' && ext !== "image/jpeg" && ext !== "application/pdf") {
            setError('File type not supported,only jpeg,jpg and pdf are supported.')
        } else {
            // console.log(ext);
            setError(null)
            let reader = new FileReader();
            reader.onload = () => {
                values.setMimeType(file.type);
                values.setContent(reader.result.slice(23));
            }
            reader.readAsDataURL(file)
        }
    }
    console.log(values.documents);
    return (
        <div className='detail-section'>
            <h3>Documents</h3>
            <div className='form-group'>
                <label className='label'>Document type</label>
                <select className='form-control' defaultValue={values.document_type} onChange={e => values.setDocumentType(e.target.value)} multiple={false}>
                    <option value="">Select document type</option>
                    <option value="identity_verification">Identity verification</option>
                    <option value="address_verification">Address verification</option>
                    <option value="date_of_birth_verification">Date of birth verification</option>
                    <option value="tax_id_verification">Tax ID verification</option>
                    <option value="account_approval_letter">407 approval letter</option>
                    <option value="w8ben">W-8 BEN tax form</option>
                </select>
            </div>
            {values.document_type_error && <span className='account-error-msg'>{values.document_type_error}</span>}
            <div className='form-group'>
                <label className='label'>Document sub type</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.document_sub_type}
                    onChange={e => values.setDocumentSubType(e.target.value)}
                    placeholder='Document sub type'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Upload document</label>
                <input
                    type="file"
                    className='form-control'
                    placeholder='Upload file'
                    onChange={handleFile}
                />
            </div>
            {error && <span className='account-error-msg'>{error}</span>}
            {values.mime_type_error && <span className='account-error-msg'>{values.mime_type_error}</span>}
            <br />
            <button className='btn' onClick={goBack}>Back</button>
            <button className='btn' onClick={continueNext}>Next</button>
        </div>
    )
}

export default Documents
