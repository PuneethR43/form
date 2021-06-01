import React from 'react'

import useForm from './custom/useForm'
import ValidateData from './validation/ValidateData'
import './form.css'

const FormSignup = ({submitForm}) => {
    const {values, handleChange, handleSubmit, errors } = useForm(ValidateData, submitForm)
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-inputs">
                    <label className="form-label">username</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={values.username}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">password</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">confirm password</label>
                    <input 
                        type="password"
                        name="password2"
                        placeholder="confirm password"
                        value={values.password2}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div>
                    <button type="submit" className="submit-btn">Sign-up</button>
                </div>
                <span>Already have an account? Login here</span>
            </form>
        </div>
    )
}

export default FormSignup

