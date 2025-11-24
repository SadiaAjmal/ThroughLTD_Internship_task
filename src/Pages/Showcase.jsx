/**
 * SHOWCASE PAGE
 * -------------------------------------------
 * Shows 2 categories:
 * - Mobile UI Screens
 * - Desktop UI Screens
 * -------------------------------------------
 * Mentor/HR clicks a button → relevant UI loads.
 */

import React, { useState } from "react";

// Import Mobile Screens
import AreaSelection from "../Components/Screens/Mobile/AreaSelection";
import CreateAccount from "../Components/Screens/Mobile/CreateAccount";
import VerificationCode from "../Components/Screens/Mobile/VerificationCode";

// Import Desktop Screens (add yours later)
import SelectArea from "../Components/Screens/Desktop/SelectArea";
import Register from "../Components/Screens/Desktop/Register";

const Showcase = () => {
    const [view, setView] = useState(""); // mobile | desktop | ''

    return (
        <main className="h-full bg-gray-100">

            {/* HEADER SECTION */}
            <header className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900">UI Showcase</h1>
                <p className="text-gray-600 mt-2">
                    Select a category to preview your screens
                </p>
            </header>

            {/* SELECTOR BUTTONS */}
            <section className="flex justify-center gap-5 mb-10">
                <button
                    onClick={() => setView("mobile")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700"
                >
                    📱 Mobile Screens
                </button>

                <button
                    onClick={() => setView("desktop")}
                    className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold shadow-md hover:bg-gray-900"
                >
                    🖥️ Desktop Screens
                </button>
            </section>

            {/* RENDER MOBILE SCREENS */}
            {view === "mobile" && (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* MOBILE DEVICE FRAME */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 border">
                        <h3 className="font-semibold text-center mb-2">Area</h3>
                        <div className="w-full aspect-[9/19] border-2 rounded-xl overflow-hidden">
                            <AreaSelection />
                        </div>
                    </div>

                    

                    <div className="bg-white rounded-2xl shadow-lg p-4 border">
                        <h3 className="font-semibold text-center mb-2">Create Account</h3>
                        <div className="w-full aspect-[9/19] border-2 rounded-xl overflow-hidden">
                            <CreateAccount />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-4 border">
                        <h3 className="font-semibold text-center mb-2">Verification Code</h3>
                        <div className="w-full aspect-[9/19] border-2 rounded-xl overflow-hidden">
                            <VerificationCode />
                        </div>
                    </div>

                </section>
            )}

            {/* RENDER DESKTOP SCREENS */}
            {view === "desktop" && (
                <section className="h-auto gap-10">
 <SelectArea />
                   
 <Register />
                  

                </section>
            )}

            {/* BLANK STATE */}
            {!view && (
                <p className="text-center text-gray-500 mt-10">
                    Choose a category above to begin.
                </p>
            )}
        </main>
    );
};

export default Showcase;
