import React, { useState } from 'react'

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [errors, setErrors] = useState({})

    const onChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = 'El nombre es obligatorio'
        else if (form.name.trim().length < 2) errs.name = 'Mínimo 2 caracteres'

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.email)) errs.email = 'Email inválido'

        if (!form.password) errs.password = 'Contraseña obligatoria'
        else if (form.password.length < 6) errs.password = 'Mínimo 6 caracteres'

        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log('Formulario válido:', form)
            alert('Formulario válido — revisa la consola. (No se ha integrado backend)')
            setForm({ name: '', email: '', password: '' })
            setErrors({})
            //Recordatorio, colocar ka coniguracion fireBase
        }
    }

    return (
        <section className="mx-auto" style={{ maxWidth: 600 }}>
            <h2 className="h4 mb-3">Crear cuenta</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className={`form-control ${errors.name ? 'is-invalid' : form.name ? 'is-valid' : ''}`}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        className={`form-control ${errors.email ? 'is-invalid' : form.email ? 'is-valid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        className={`form-control ${errors.password ? 'is-invalid' : form.password ? 'is-valid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-success">Crear cuenta</button>
                </div>
            </form>
        </section>
    )
}
