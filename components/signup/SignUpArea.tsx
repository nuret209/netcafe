"use client"
import React, { FormEvent, useState } from 'react'
import Image from 'next/image';
import { FaGoogle } from "react-icons/fa";
import { useSignUp } from '@clerk/nextjs';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Signup = () => {
    const [passwordShown, setPasswordShown] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { setActive, isLoaded, signUp } = useSignUp();
    const handleGoogleSignUp = async () => {
        setLoading(true);
        try {
            if (signUp !== undefined) {
                signUp.authenticateWithRedirect({
                    strategy: 'oauth_google',
                    redirectUrl: '/',  // The URL to redirect after sign-up
                    redirectUrlComplete: '/',    // After completion
                })
            }
        } catch (err) {
            setErr('Google sign-up failed');
            setLoading(false);
            console.log(err);
        }
    }
    const check = () => {
        if (!firstName)
            return "İsim boş olamaz!"
        if (!lastName)
            return "Soy isim boş olamaz!"
        if (!email)
            return "Email boş olamaz!"
        if (!password)
            return "Şifre boş olamaz!"
        if (password.length < 8)
            return "Şifre 8 hane veya uzun olmalıdır!"
        if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            return "Geçerli bir email girin!"
        return "checked"
    }
    async function signUpForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isLoaded) return;
        if (check() != "checked") setErr(check())
        else
            if (signUp)
                try {
                    setLoading(true);
                    const signUpAttempt = await signUp.create({
                        emailAddress: email,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
                    });
                    if (signUpAttempt.status === 'complete') {
                        alert("Başarıyla kayıt oldunuz!");
                        await setActive({ session: signUpAttempt.createdSessionId })
                        router.push(`/`);
                    }
                } catch (err: unknown) {
                    if (typeof err === 'object' && err !== null && 'errors' in err &&
                        Array.isArray((err as { errors: unknown[] }).errors) &&
                        (err as { errors: unknown[] }).errors[0] &&
                        typeof ((err as { errors: { message: string }[] }).errors[0].message) === 'string') {
                        setErr((err as { errors: { message: string }[] }).errors[0].message);
                    } else {
                        setErr('An unexpected error occurred');
                    }
                    setLoading(false);
                }
    }
    return (
        <div className='h-full flex items-center justify-center'>
            <div className='flex flex-col gap-10'>
                <span className='flex gap-2'>
                    <Image src={"/images/sitelogo.svg"} alt='logo' width={24} height={24} />
                    wagmigg
                </span>

                <h3 className='text-label-xl'>Hoşgeldin!</h3>
                <form onSubmit={signUpForm} className='flex flex-col gap-4 relative'>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder='İsim' className='w-full [box-shadow:rgba(25,_26,_32,_0.2)_0px_0px_0px_1px_inset] placeholder:text-[rgba(25,26,32,0.6)] h-[54px] outline-none rounded-lg p-4' />
                        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder='Soy İsim' className='w-full [box-shadow:rgba(25,_26,_32,_0.2)_0px_0px_0px_1px_inset] placeholder:text-[rgba(25,26,32,0.6)] h-[54px] outline-none rounded-lg p-4' />
                    </div>
                    <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Email' className='w-[350px] sm:w-[520px] [box-shadow:rgba(25,_26,_32,_0.2)_0px_0px_0px_1px_inset] placeholder:text-[rgba(25,26,32,0.6)] h-[54px] outline-none rounded-lg p-4' />
                    <input value={password} onChange={e => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} placeholder='Şifre' className='w-[350px] sm:w-[520px] [box-shadow:rgba(25,_26,_32,_0.2)_0px_0px_0px_1px_inset] placeholder:text-[rgba(25,26,32,0.6)] h-[54px] outline-none rounded-lg p-4' />
                    <div onClick={() => setPasswordShown(!passwordShown)} className='cursor-pointer absolute bottom-[163px] right-3'>
                        {passwordShown ? <RiEyeLine size={24} /> : <RiEyeOffLine size={24} />}
                    </div>
                    <button type='submit' disabled={loading} className='bg-black transition-all disabled:opacity-50 text-white p-3 rounded-lg text-label-[16px]'>Kayıt Ol</button>
                    <div className={`text-[12px] ${err ? "scale-100 " : "scale-0 mt-[-48px]"} p-3 transition-all duration-300 bg-[#e02424] text-white rounded-lg`}>{err}</div>
                    <div className='flex justify-between text-label-sm'>
                        <Link href="/sign-in" className='hover:underline'>Giriş Yap</Link>
                        <a href="#" className='hover:underline'>Şifremi Unuttum</a>
                    </div>
                    <button onClick={handleGoogleSignUp} disabled={loading} className="transition-all disabled:opacity-50 flex items-center justify-center gap-1 shadow-md rounded-lg h-[40px] w-full bg-black text-white">
                        <FaGoogle />
                        Google
                    </button>
                </form>
                <div id="clerk-captcha" />
            </div>
        </div>
    )
}

export default Signup