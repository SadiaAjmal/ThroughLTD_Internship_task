import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

/* ======================
   DATA
======================= */
const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "bn", label: "Bangla", flag: "🇧🇩" },
];

const currencies = [
    { code: "USD", label: "USD $" },
    { code: "BDT", label: "BDT ৳" },
];

const countries = [
    { code: "bd", label: "Bangladesh", flag: "🇧🇩" },
    { code: "us", label: "United States", flag: "🇺🇸" },
];

const cities = {
    bd: ["Dhaka Division", "Chittagong Division", "Khulana Division","Barishal Division"],
    us: ["New York", "San Francisco", "Los Angeles"],
};

/* ======================
   CUSTOM DROPDOWN
======================= */
function CustomSelect({ label, value, onChange, options }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const selected = options.find((o) => o.code === value);

    // Close on outside click
    useEffect(() => {
        function close(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div ref={wrapperRef} className="flex flex-col w-full relative cursor-pointer">
            <span className="text-sm text-gray-300 mb-1">{label}</span>

            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full bg-white text-gray-800 rounded-sm px-4 py-2 flex justify-between items-center
                           border-none transition"
            >
                <span className="flex items-center gap-2">
                    {selected?.flag} {selected?.label}
                </span>
                <MdOutlineArrowDropDown className="text-gray-600 cursor-pointer text-xl" />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <ul
                    className="absolute left-0 top-20 w-full bg-white text-gray-800 rounded-sm shadow-lg  
                               max-h-48 overflow-y-auto z-20 animate-fade-in"
                >
                    {options.map((opt) => (
                        <li
                            key={opt.code}
                            onClick={() => {
                                onChange(opt.code);
                                setOpen(false);
                            }}
                            className="px-4 py-2 hover:bg-orange-100 flex items-center gap-2 cursor-pointer"
                        >
                            {opt.flag} {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

/* ======================
   MAIN COMPONENT
======================= */
export default function SelectArea() {
    const [language, setLanguage] = useState(languages[0].code);
    const [currency, setCurrency] = useState(currencies[0].code);
    const [country, setCountry] = useState(countries[0].code);
    const [city, setCity] = useState(cities[countries[0].code][0]);

    function handleCountryChange(newCountry) {
        setCountry(newCountry);
        setCity(cities[newCountry][0]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Selected: ${language}, ${currency}, ${country}, ${city}`);
    }

    return (
        <main className="min-h-screen my-5 bg-[#073d57] flex items-center justify-center p-6">
            <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* LEFT SIDE */}
                <article className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center text-center">
                    <header className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0A63B7] leading-snug">
                            An App for <br /> Reading the Right News
                        </h3>
                    </header>

                    <figure className="mb-6">
                   <img src="/select.jpg" alt="" className="h-40" />
                    </figure>

                    <footer>
                        <p className="text-xs text-gray-400">from</p>
                        <p className="text-sm text-[#0A63B7] font-semibold">Through™</p>
                    </footer>
                </article>

                {/* RIGHT SIDE — FORM */}
                <article className="flex items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full px-8 rounded-lg shadow-md text-white space-y-6"
                    >
                        <header>
                            <h2 className="text-3xl font-semibold">Select an area</h2>
                            <p className="text-sm text-gray-300 mt-1">
                                Already have an account?{" "}
                                <span className="underline text-white cursor-pointer">
                                    Sign In
                                </span>
                            </p>
                        </header>

                        {/* LANGUAGE + CURRENCY — 50% WIDTH EACH */}
                        <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <CustomSelect
                                label="Language"
                                value={language}
                                onChange={setLanguage}
                                options={languages}
                            />

                            <CustomSelect
                                label="Currency"
                                value={currency}
                                onChange={setCurrency}
                                options={currencies}
                            />
                        </fieldset>

                        {/* COUNTRY — FULL WIDTH */}
                        <fieldset>
                            <CustomSelect
                                label="Country"
                                value={country}
                                onChange={handleCountryChange}
                                options={countries}
                            />
                        </fieldset>

                        {/* CITY — FULL WIDTH */}
                        <fieldset>
                            <CustomSelect
                                label="City"
                                value={city}
                                onChange={setCity}
                                options={cities[country].map((c) => ({
                                    code: c,
                                    label: c,
                                    flag: "",
                                }))}
                            />
                        </fieldset>

                        {/* TERMS */}
                        <p className="text-xs text-gray-400">
                            By signing up, I accept the OneSignID
                            <span className="underline cursor-pointer"> terms of service </span>
                            and acknowledge the
                            <span className="underline cursor-pointer"> privacy policy</span>.
                        </p>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 rounded-md transition"
                        >
                            Continue
                        </button>

                        <div className="flex items-center gap-3">
                            <hr className="flex-1 border-gray-500" />
                            <span className="text-xs text-gray-300">Or</span>
                            <hr className="flex-1 border-gray-500" />
                        </div>

                        <button
                            type="button"
                            onClick={() => alert("Location permission requested (demo)")}
                            className="w-full border border-orange-500 text-orange-300 hover:bg-orange-500/10 py-3 rounded-md transition cursor-pointer"
                        >
                            Allow Location automatically
                        </button>

                        <p className="text-center">
                            <span className="text-sm text-gray-300 underline cursor-pointer">
                                Back
                            </span>
                        </p>
                    </form>
                </article>
            </section>
        </main>
    );
}
