import {  useState } from "react"


function Input({ name = 'default', type, id, value, placeholder, icon }) {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <div className="relative w-[100%] mb-4">
            <input
                name={name}
                type={type === 'password' ? passwordVisible ? 'text' : 'password' : 'text'}
                id={id}
                defaultValue={value}
                placeholder={placeholder}
                className="input-box"
            />
            <i className={`fi ${icon} input-icon`}></i>
            {
                type === 'password' && <i onClick={() => setPasswordVisible(!passwordVisible)} className={`fi ${passwordVisible  ? 'fi-rr-eye' : 'fi-rs-crossed-eye'} input-icon left-auto right-4 cursor-pointer`}></i>
            }
        </div>
    )
}

export default Input