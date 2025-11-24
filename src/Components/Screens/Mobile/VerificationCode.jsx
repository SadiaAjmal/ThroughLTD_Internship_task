/**
 * MOBILE SCREEN — VERIFICATION CODE
 */

import React from "react";

const VerificationCode = () => {
    return (
        <main className="min-h-screen bg-white px-5 py-8">

            <header className="text-center mb-10">
                <h1 className="text-xl font-semibold text-gray-900">
                    Enter verification code
                </h1>
            </header>

            <section className="text-center">

                <p className="text-gray-700 mb-3">We sent the code to</p>
                <p className="font-semibold text-gray-900">0521255379</p>

                {/* OTP BOXES */}
                <div className="flex justify-center gap-3 mt-6 mb-5">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <input
                            key={index}
                            maxLength={1}
                            className="w-12 h-12 border rounded-lg text-center text-xl"
                        />
                    ))}
                </div>

                <p className="text-gray-500 text-sm mb-6">Code expires in 1:30 min</p>

                {/* ACTION BUTTONS */}
                <div className="flex justify-between gap-4">
                    <button className="w-1/2 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium">
                        Send again
                    </button>

                    <button className="w-1/2 bg-blue-600 text-white py-2 rounded-lg font-medium">
                        Verify
                    </button>
                </div>
            </section>
        </main>
    );
};

export default VerificationCode;
