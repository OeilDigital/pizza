"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials', { email, password, redirect: true, callbackUrl: "http://localhost:3000" })


        setLoginInProgress(false);

    }
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" name="email" placeholder="email" value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="password" name="password" placeholder="password" value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)} />
                <button type="submit" disabled={loginInProgress}>
                    Login</button>
                <div className="my-4 text-center text-gray-500">or login with</div>
                <button type="button" onClick={() => signIn('google', { redirect: true, callbackUrl: "http://localhost:3000" })} className="flex gap-4 justify-center">
                    <Image className="googleIcon" src={'/google.png'} width={24} height={24} alt={'google icon'} />
                    Login with Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>
    );
}