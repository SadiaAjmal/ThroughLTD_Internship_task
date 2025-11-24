import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";


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
    bd: ["Dhaka Division", "Chittagong Division", "Khulana Division", "Barishal Division"],
    us: ["New York", "San Francisco", "Los Angeles"],
};

/* ======================
   CUSTOM DROPDOWN
======================= */
function CustomSelect({ label, value, onChange, options }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const selected = options.find((o) => o.code === value) || { label: value, flag: "" };

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
            <label className="block text-sm font-medium text-primary mb-2">{label}</label>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full border border-gray-300 rounded-sm px-3 py-2 flex justify-between items-center bg-white text-gray-800 cursor-pointer"
            >
                <span className="flex items-center gap-2">
                    {selected?.flag} {selected?.label}
                </span>
                <MdOutlineArrowDropDown className="text-gray-500 text-xl cursor-pointer" />
            </button>

            {open && (
                <ul className="absolute left-0 top-20 w-full bg-white border border-gray-200 rounded-sm max-h-48 overflow-y-auto z-20 cursor-pointer">
                    {options.map((opt) => (
                        <li
                            key={opt.code || opt.label}
                            onClick={() => {
                                onChange(opt.code || opt.label);
                                setOpen(false);
                            }}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
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
const AreaSelection = () => {
    const [language, setLanguage] = useState(languages[0].code);
    const [currency, setCurrency] = useState(currencies[0].code);
    const [country, setCountry] = useState(countries[0].code);
    const [city, setCity] = useState(cities[countries[0].code][0]);

    const handleCountryChange = (newCountry) => {
        setCountry(newCountry);
        setCity(cities[newCountry][0]);
    };

    const onContinue = () => {
        console.log({ language, currency, country, city });
        alert(`Selected: ${language}, ${currency}, ${country}, ${city}`);
    };

    const autoLocate = () => {
        console.log("Attempt auto location");
        alert("Location permission requested (demo)");
    };

    return (
        <main className="min-h-screen max-w-md w-full rounded-lg bg-white text-gray-500 px-2 py-10  flex flex-col items-center relative">
            
             <button
                    aria-label="Back"
                    onClick={() => window.history.back()}
                    className="  absolute items-center text-primary font-medium top-2 left-0 cursor-pointer"
                >
                    <IoIosArrowBack className="  text-xl"/>

                </button>
          
                {/* HEADER */}
               
                
                
                <header className="text-center mb-5">
                

                    <h1 className="text-2xl font-semibold text-primary">
                        Select to continue
                    </h1>
                </header>

                {/* FORM CARD */}
                <section className="space-y-5 w-full">
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

                    <CustomSelect
                        label="Country"
                        value={country}
                        onChange={handleCountryChange}
                        options={countries}
                    />

                    <CustomSelect
                        label="City"
                        value={city}
                        onChange={setCity}
                        options={cities[country].map((c) => ({ code: c, label: c }))}
                    />

                    <div className="flex items-center my-2">
                        <div className="flex-1 h-px bg-gray-200" />
                        <div className="px-3 text-sm text-gray-500">Or</div>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <button
                        type="button"
                        onClick={autoLocate}
                        className="w-full rounded-sm py-2 text-sm font-medium border border-primary text-primary hover:bg-primary/5 transition cursor-pointer"
                    >
                        Set location automatically
                    </button>

                    <button
                        type="button"
                        onClick={onContinue}
                        className="w-full rounded-sm py-2 bg-primary text-white font-semibold cursor-pointer hover:bg-primary/90 transition"
                    >
                        Continue
                    </button>
                </section>

        </main>
    );
};

export default AreaSelection;
