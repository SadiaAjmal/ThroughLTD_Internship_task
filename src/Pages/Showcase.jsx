

import React, { useState } from "react";

// Import Mobile Screens
import AreaSelection from "../Components/Screens/Mobile/AreaSelection";
import CreateAccount from "../Components/Screens/Mobile/CreateAccount";
import VerificationCode from "../Components/Screens/Mobile/VerificationCode";

// Import Desktop Screens (add yours later)
import SelectArea from "../Components/Screens/Desktop/SelectArea";
import Register from "../Components/Screens/Desktop/Register";

const Showcase = () => {
    const [view, setView] = useState("desktop"); // mobile | desktop | ''

    return (
        <main className="h-full bg-gray-100 py-10 ">

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
                    className="px-6 py-3 bg-primary text-white rounded-sm font-semibold shadow-md hover:bg-primary/90 cursor-pointer"
                >
                    📱 Mobile Screens
                </button>

                <button
                    onClick={() => setView("desktop")}
                    className="px-6 py-3 bg-secondary text-white rounded-sm font-semibold shadow-md hover:bg-secondary/90 cursor-pointer"
                >
                    🖥️ Desktop Screens
                </button>
            </section>

            {/* RENDER MOBILE SCREENS */}
            {view === "mobile" && (
                <section className="flex md:flex-row flex-col justify-center gap-10 md:px-20 px-2">
                   
                    <AreaSelection />


                    <CreateAccount />

                    <VerificationCode />


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
