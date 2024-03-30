import { Link } from "react-router-dom"
import Input from "../components/input.component"
import google from '../imgs/google.png'
import AnimationWrapper from "../common/page-animation"
import { useRef, useState } from "react"

function UserAuthForm({ type }) {
    const authForm = useRef()
    function handleClick(e) {
        e.preventDefault()
        const form = new FormData(authForm.current)
        const formData = {}
        for (let [key, value] of form.entries()) {
            formData[key] = value
        }
        console.log('form : ', formData)

    }
    return (
        <AnimationWrapper keyvalue={type}>
            <section className="h-cover flex items-center justify-center ">
                <form ref={authForm} className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-6">
                        {type === 'sign in' ? 'welcome back' : 'join us today'}
                    </h1>
                    {
                        type === 'sign in' && <Input name='fullname' type='text' placeholder='Full Name' icon='fi-rr-user' />
                    }
                    <Input name='email' type='email' placeholder='Email' icon='fi-rr-envelope' />
                    <Input name='password' type='password' placeholder='Password' icon='fi-rr-lock' />
                    <button onClick={handleClick} type="submit" className="btn-dark center mt-14">{type}</button>
                    <div className="relative w-full flex items-center gap-2 my-10 opacity uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        or
                        <hr className="w-1/2 border-black" />
                    </div>
                    <button className="btn-dark w-[90%] center flex justify-center py-4 gap-6 items-center">
                        <img className="w-6" src={google} />
                        continue with google
                    </button>
                    {
                        type === 'sign in' ? <p className="mt-6 text-dark-grey text-xl text-center">
                            Don't have an account ?
                            <Link to='/signup' className='underline text-black text-xl ml-1'>
                                join us today
                            </Link>
                        </p> : <p className="mt-6 text-dark-grey text-xl text-center">
                            Already a member ?
                            <Link to='/signin' className='underline text-black text-xl ml-1'>
                                Sign in here
                            </Link>
                        </p>
                    }
                </form>
            </section>
        </AnimationWrapper>

    )
}

export default UserAuthForm