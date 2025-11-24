
import React, { useMemo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";


const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0"));
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const years = Array.from({ length: 100 }, (_, i) => String(new Date().getFullYear() - i));


const CreateAccount = () => {

    const [account, setAccount] = useState("personal"); // "personal" | "organization"
    const [form, setForm] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
        day: "",
        month: "",
        year: "",
        password: "",
        confirm: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [verifiedVia, setVerifiedVia] = useState(""); // "phone" | "email" | ""
    const [touched, setTouched] = useState({});

    const update = (key, value) => setForm((s) => ({ ...s, [key]: value }));
    const onBlur = (key) => setTouched((t) => ({ ...t, [key]: true }));

    const errors = useMemo(() => {
        const e = {};
        if (touched.name && form.name.trim().length < 2) e.name = "Enter your full name";
        if (touched.email && form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
        if (touched.phone && form.phone && !/^\+?[\d\s\-()]{7,}$/.test(form.phone)) e.phone = "Invalid phone";
        if (touched.password && form.password.length < 8) e.password = "Password must be 8+ chars";
        if (touched.confirm && form.confirm !== form.password) e.confirm = "Passwords do not match";
        return e;
    }, [form, touched]);

    const isValid =
        form.name.trim().length >= 2 &&
        /^\S+@\S+\.\S+$/.test(form.email) &&
        form.password.length >= 8 &&
        form.password === form.confirm &&
        (form.phone.trim().length > 0 || verifiedVia === "email");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            phone: true,
            password: true,
            confirm: true,
        });
        if (!isValid) return;
        console.log("Registering account:", { account, ...form, verifiedVia });
        alert("Form submitted — check console for payload.");
    };


    return (
        <main className="min-h-screen max-w-md w-full relative bg-white px-2 py-10  flex flex-col items-cente overflow-hidden rounded-lg text-gray-500">


            <button
                aria-label="Back"
                onClick={() => window.history.back()}
                className="  absolute items-center text-primary font-medium top-2 cursor-pointer left-0"
            >
                <IoIosArrowBack className="  text-xl" />

            </button>


            <header className="mb-5">
                <h1 className="text-2xl text-primary text-center font-semibold my-2">Create an account</h1>
                <p className="text-sm ">
                    Already have an account?{" "}
                    <a href="#" className="text-white underline">
                        Sign in
                    </a>
                </p>
            </header>

            <form onSubmit={handleSubmit} noValidate>
                {/* Account type */}
                <fieldset className="flex items-center justify-between gap-1 mb-2">
                    <p className=" bg-white rounded-sm  text-gray-700 text-[12px] p-1">Verify with *</p>
                    {["personal", "organization"].map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => setAccount(type)}
                            className={`px-2 py-1 rounded text-sm font-medium cursor-pointer ${account === type
                                ? "bg-secondary text-white shadow"
                                : "text-white/80 bg-amber-950"
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </fieldset>

                {/* Inputs */}
                <div className="space-y-3 mb-3">
                    <input
                        placeholder="Full Name*"
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        onBlur={() => onBlur("name")}
                        aria-invalid={!!errors.name}
                        required
                    />


                    <input
                        placeholder="Email*"
                        type="email"
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        onBlur={() => onBlur("email")}
                        aria-invalid={!!errors.email}
                        required
                    />


                    <input
                        placeholder="Phone Number*"
                        type="tel"
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        onBlur={() => onBlur("phone")}
                        aria-invalid={!!errors.phone}
                        required
                    />



                </div>

                {/* DOB */}

                <label htmlFor="" className=" text-gray-500 pb-2">DOB*</label>
                <fieldset className="grid grid-cols-3 gap-3 mb-3">

                    <select
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.day}
                        onChange={(e) => update("day", e.target.value)}
                    >
                        <option value="">Date</option>
                        {days.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>

                    <select
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.month}
                        onChange={(e) => update("month", e.target.value)}
                    >
                        <option value="">Month</option>
                        {months.map((m, idx) => (
                            <option key={m} value={String(idx + 1).padStart(2, "0")}>
                                {m}
                            </option>
                        ))}
                    </select>

                    <select
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.year}
                        onChange={(e) => update("year", e.target.value)}
                    >
                        <option value="">Year</option>
                        {years.map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>
                </fieldset>

                {/* Passwords */}
                <div className="space-y-3 mb-4">
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password*"
                            className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                            value={form.password}
                            onChange={(e) => update("password", e.target.value)}
                            onBlur={() => onBlur("password")}
                            required
                        />
                        <input type="checkbox" className=" cursor-pointer" />
                        <label htmlFor="" className=" text-sm pl-2">Show password</label>


                    </div>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password*"
                        className="w-full p-2 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"
                        value={form.confirm}
                        onChange={(e) => update("confirm", e.target.value)}
                        onBlur={() => onBlur("confirm")}
                        required
                    />
                    <input type="checkbox" className="cursor-pointer" />
                    <label htmlFor="" className=" text-sm pl-2">Show password</label>
                </div>

                {/* Verify with */}

                <select
                    className="w-full p-2 mb-1 rounded-sm border border-gray-300 bg-white outline-none text-gray-800"

                >
                    <option value="">Verify with</option>
                    <option value="">Phone Number</option>
                    <option value="">Email</option>

                </select>

                <footer className="mb-4 text-xs ">
                    By signing up, I accept the OneDayID Cloud{" "}
                    <a href="#" className="underline text-primary">
                        terms of service
                    </a>{" "}
                    and acknowledge the{" "}
                    <a href="#" className="underline text-primary">
                        privacy policy
                    </a>
                    .
                </footer>

                <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full py-2 mt-5 text-white bg-primary rounded-sm font-semibold transition cursor-pointer"
                >
                    Create
                </button>


            </form>

            

        </main>
    );
};

export default CreateAccount;
