import React, { useState } from "react";



const languages = [{ code: "en", label: "English", flag: "🇬🇧" }];
const currencies = [{ code: "BDT", label: "BDT" }];
const countries = [{ code: "BD", label: "Bangladesh", flag: "🇧🇩" }];
const cities = ["- Select -", "Dhaka", "Rajshahi", "Khulna", "Barishal", "Sylhet"];

const AreaSelection = () => {
    const [language, setLanguage] = useState(languages[0].code);
    const [currency, setCurrency] = useState(currencies[0].code);
    const [country, setCountry] = useState(countries[0].code);
    const [city, setCity] = useState(cities[0]);

    const onContinue = () => {
        // wire up navigation / form submit here
        console.log({ language, currency, country, city });
    };

    const autoLocate = () => {
        // placeholder for geolocation logic
        console.log("Attempt auto location");
    };

    return (
        <main className="min-h-screen bg-white px-5 py-8 flex items-start justify-center">
            <div className="w-full max-w-md">
                <header className="text-center mb-8">
                    <button
                        aria-label="Back"
                        className="text-primary mb-4 inline-flex items-center"
                       
                        onClick={() => window.history.back()}
                    >
                        {/* simple back chevron */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    <h1
                        className="text-2xl font-semibold text-primary"
                     
                    >
                        Select to continue
                    </h1>
                </header>

                <section className="space-y-5 bg-white/80 p-6 rounded shadow-sm">
                    {/* Language */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                        <div className="relative">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 appearance-none"
                            >
                                {languages.map((l) => (
                                    <option key={l.code} value={l.code}>
                                        {l.flag} {l.label}
                                    </option>
                                ))}
                            </select>

                            {/* chevron */}
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.672l3.71-3.483a.75.75 0 111.02 1.1l-4.2 3.94a.75.75 0 01-1.02 0l-4.2-3.94a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Currency */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <div className="relative">
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 appearance-none"
                            >
                                {currencies.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.label}
                                    </option>
                                ))}
                            </select>

                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.672l3.71-3.483a.75.75 0 111.02 1.1l-4.2 3.94a.75.75 0 01-1.02 0l-4.2-3.94a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                        <div className="relative">
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 appearance-none"
                            >
                                {countries.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.flag} {c.label}
                                    </option>
                                ))}
                            </select>

                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.672l3.71-3.483a.75.75 0 111.02 1.1l-4.2 3.94a.75.75 0 01-1.02 0l-4.2-3.94a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <div className="relative">
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 appearance-none"
                            >
                                {cities.map((ct) => (
                                    <option key={ct} value={ct}>
                                        {ct}
                                    </option>
                                ))}
                            </select>

                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.672l3.71-3.483a.75.75 0 111.02 1.1l-4.2 3.94a.75.75 0 01-1.02 0l-4.2-3.94a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Or separator */}
                    <div className="flex items-center my-1">
                        <div className="flex-1 h-px bg-gray-200" />
                        <div className="px-3 text-sm text-gray-500">Or</div>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Set location automatically */}
                    <div>
                        <button
                            type="button"
                            onClick={autoLocate}
                            className="w-full rounded-lg py-2 text-sm font-medium outline-primary"
                            style={{
                                border: "1.5px solid var(--primary)",
                                color: "var(--primary)",
                                background: "transparent",
                            }}
                        >
                            Set location automatically
                        </button>
                    </div>

                    {/* Continue */}
                    <div>
                        <button
                            type="button"
                            onClick={onContinue}
                            className="w-full rounded-lg py-3 text-white font-semibold"
                            style={{
                                background: "var(--primary)",
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </section>
            </div>

           
        </main>
    );
};

export default AreaSelection;