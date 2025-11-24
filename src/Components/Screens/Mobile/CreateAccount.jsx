/**
 * MOBILE SCREEN — CREATE ACCOUNT
 */

import React from "react";

const CreateAccount = () => {
    return (
        <main className="min-h-screen bg-white px-5 py-8">
            <header className="text-center mb-10">
                <h1 className="text-xl font-semibold text-gray-900">Create an account</h1>
            </header>

            <form className="space-y-5">

                {/* Name */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Name*</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Phone*</label>
                    <input
                        type="tel"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                </div>

                {/* DOB */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Date of birth*</label>
                    <input
                        type="date"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Password*</label>
                    <input
                        type="password"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Confirm password*</label>
                    <input
                        type="password"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />
                </div>

                {/* Verify with */}
                <div>
                    <label className="text-sm font-medium text-gray-700">Verify with</label>
                    <select className="w-full border rounded-lg px-3 py-2 mt-1">
                        <option>Phone</option>
                        <option>Email</option>
                    </select>
                </div>

                {/* Terms note */}
                <p className="text-xs text-gray-500">
                    By signing up, I accept the OneSync Cloud terms of service and privacy policy.
                </p>

                {/* CREATE BUTTON */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                    Create
                </button>
            </form>
        </main>
    );
};

export default CreateAccount;
