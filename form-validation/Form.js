import React, { useState } from 'react'

import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './form.css'

const Form = () => {
    const [submit, setSubmit] = useState(false)
    const submitForm = () => {
        setSubmit(true)
    }
    return (
        <div>
            {
                !submit ? (
                    <FormSignup submitForm={submitForm} />
                ):(
                    <FormSuccess />
                )
            }
        </div>
    )
}

export default Form
