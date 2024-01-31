'use client';

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation"
import Image from "next/image";
import InfoBox from "@/components/layout/InfoBox"
import SuccessBox from "@/components/layout/SuccessBox"

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState(session?.data?.user?.name || '');
    const [userImage, setUserImage] = useState(session?.data?.user?.image || false)
    const [saved, setSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [savedUserImage, setSavedUserImage] = useState(true)
    const { status } = session;

    useEffect(() => {
        if (status === "authenticated") {
            setUserName(session.data.user.name);
            // setUserImage(localStorage.getItem("recent-image"))
        };
    }, [session, status])

    useEffect(() => {
        if (status === "authenticated" && localStorage.getItem("recent-image") !== null) {
            // setSavedUserImage(!savedUserImage)
            setUserImage(localStorage.getItem("recent-image"))
        };
    }, [savedUserImage])



    // console.log(userImage)

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const response = await fetch('api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName }),
        });
        setIsSaving(false);
        if (response.ok) {
            setSaved(true)
        }
    }

    async function handleFileChange(ev) {
        const files = ev.target.files;
        // if (files?.length === 1) {
        //     const data = new FormData();
        //     data.set('file', files[0])
        //     await fetch('/api/upload', {
        //         method: 'POST',
        //         body: data,
        //         // headers: { 'Content-Type': 'image' },
        //     })
        // }
        // console.log(files)

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (localStorage.getItem("recent-image") === null) {
                localStorage.setItem("recent-image", reader.result)
                setSavedUserImage(!savedUserImage)
            } else {
                localStorage.removeItem("recent-image");
                localStorage.setItem("recent-image", reader.result)
                setSavedUserImage(!savedUserImage)
            }

        })
        reader.readAsDataURL(files[0])
        setUserImage(localStorage.getItem("recent-image"))
    }

    if (status === 'loading') {
        return 'Loading...';
    }
    if (status === 'unauthenticated') {
        return redirect('/login')
    }

    // const userImage = session.data.user?.image;
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Profile
            </h1>
            {saved && (
                <SuccessBox>Profile saved!</SuccessBox>
            )}
            {isSaving && (
                <InfoBox>Saving...</InfoBox>
            )}
            <div className=" max-w-xl mx-auto">
                <div className="flex gap-4">
                    <div>
                        <div className=" p-2 rounded-lg relative max-w-[170px]">
                            <div className="relative">
                                {userImage ? (
                                    <Image className="rounded-lg w-full h-full mb-1 avatar"
                                        src={userImage}
                                        width={250}
                                        height={250}
                                        priority={true}
                                        alt={'avatar'} />
                                ) : (
                                    <Image className="rounded-lg w-full h-full mb-1 avatar"
                                        src={"/avatar-blue.jpg"}
                                        width={250}
                                        height={250}
                                        priority={true}
                                        alt={'avatar'} />
                                )}


                            </div>
                            <label>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                                <span className="block text-center border border-gray-300 rounded-lg p-2 cursor-pointer">Edit</span>
                            </label>
                            {/* <button type="button">Edit</button> */}
                        </div>

                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate} >
                        <input type="text" placeholder="first and last nbame"
                            value={userName} onChange={ev => setUserName(ev.target.value)} />
                        <input type="email" disabled={true} value={session.data.user.email}></input>
                        <input type="tel" placeholder="Phone number" />
                        <input type="text" placeholder="Street address" />
                        <div className="flex gap-4">
                            <input type="text" placeholder="City" />
                            <input type="text" placeholder="Post code" />
                        </div>
                        <input type="text" placeholder="Country" />


                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}