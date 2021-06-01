import { useState, useEffect } from 'react'

const useForm = (ValidateData, callback) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({})
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(ValidateData(values))
        setSubmit(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submit){
            callback()
        }
    }, [errors])

    return { values, handleChange, handleSubmit, errors }
}

export default useForm
