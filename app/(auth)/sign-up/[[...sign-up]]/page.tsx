import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
    return (
        <main className="flex justify-center items-center h-screen w-full">
            <SignUp forceRedirectUrl="/" />
        </main>
    );
};

export default SignUpPage;
