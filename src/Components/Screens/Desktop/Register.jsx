import React, { useMemo, useState } from "react";

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

export default function Register() {
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
        if (touched.name && form.name.trim().length < 2) e.name = "Please enter your full name.";
        if (touched.email && form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
        if (touched.phone && form.phone && !/^\+?[\d\s\-()]{7,}$/.test(form.phone)) e.phone = "Invalid phone.";
        if (touched.password && form.password.length < 8) e.password = "Password must be 8+ characters.";
        if (touched.confirm && form.confirm !== form.password) e.confirm = "Passwords do not match.";
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
        // Replace with real API call
        console.log("Registering account:", { account, ...form, verifiedVia });
        // temporary UX feedback
        alert("Form submitted — check console for payload.");
    };

    return (
        <div className="min-h-screen bg-[#052f49] flex items-center justify-center p-6">
            <div className="w-full max-w-6xl bg-[#063552] rounded-md shadow-2xl border-4 border-[#0c425f] overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left illustration */}
                <div className="relative bg-white p-8 md:p-12 flex items-center justify-center">
                    <div
                        className="w-full h-full rounded-md flex flex-col items-center justify-center text-center"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at center, rgba(3,59,105,0.04) 0%, rgba(3,59,105,0.02) 40%, rgba(3,59,105,0.00) 60%)",
                        }}
                        aria-hidden
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a4b8a] mb-6">
                            An App for
                            <br />
                            Reading the Right News
                        </h2>

                        {/* Simple illustration - replace with your actual SVG/PNG */}
                        <div className="w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-inner mx-auto">
                            <svg
                                width="180"
                                height="180"
                                viewBox="0 0 200 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="illustration"
                            >
                                <circle cx="100" cy="100" r="98" stroke="#e6f2ff" strokeWidth="4" fill="#fff" />
                                <rect x="36" y="46" width="128" height="108" rx="8" fill="#f7fbff" stroke="#cfe9ff" />
                                <path d="M56 72h88v8H56z" fill="#cfe9ff" />
                                <path d="M56 92h88v8H56z" fill="#e8f4ff" />
                                <circle cx="64" cy="132" r="18" fill="#fff" stroke="#cfe9ff" />
                                <rect x="96" y="128" width="36" height="32" rx="4" fill="#0a6fb8" />
                            </svg>
                        </div>

                        <p className="text-xs text-gray-400 mt-8">from</p>
                        <img
                            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='24'><text x='0' y='16' font-family='Arial' font-size='14' fill='%23063b5a'>Through+</text></svg>"
                            alt="brand"
                            className="mt-2 opacity-60"
                        />
                    </div>
                </div>

                {/* Right form */}
                <div className="p-8 md:p-12 text-white">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
                        <p className="text-sm text-gray-200 mb-6">
                            Already have an account?{" "}
                            <a href="#" className="text-white underline">
                                Sign in
                            </a>
                        </p>

                        <form onSubmit={handleSubmit} noValidate>
                            {/* Account type */}
                            <div className="flex items-center gap-3 mb-4">
                                <label className="inline-flex items-center bg-white/5 rounded-md cursor-pointer">
                                    <input
                                        type="radio"
                                        name="account-type"
                                        checked={account === "personal"}
                                        onChange={() => setAccount("personal")}
                                        className="sr-only"
                                        aria-label="Personal account"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setAccount("personal")}
                                        className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${account === "personal"
                                                ? "bg-[#f38a21] text-white shadow"
                                                : "text-white/80 bg-amber-950 hover:bg-white/5"
                                            }`}
                                    >
                                        Personal
                                    </button>
                                </label>

                                <label className="inline-flex items-center bg-white/5 rounded-md p-1">
                                    <input
                                        type="radio"
                                        name="account-type"
                                        checked={account === "organization"}
                                        onChange={() => setAccount("organization")}
                                        className="sr-only"
                                        aria-label="Organization account"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setAccount("organization")}
                                        className={`px-3 py-1 rounded text-sm font-medium ${account === "organization"
                                                ? "bg-[#f38a21] text-white shadow"
                                                : "text-white/80 hover:bg-white/5"
                                            }`}
                                    >
                                        Organization
                                    </button>
                                </label>
                            </div>

                            {/* Inputs */}
                            <div className="space-y-3 mb-3">
                                <div>
                                    <label className="text-sm font-medium block mb-1" htmlFor="name">
                                        Name*
                                    </label>
                                    <input
                                        id="name"
                                        className="w-full px-3 py-2 rounded border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#0ea5a7]"
                                        value={form.name}
                                        onChange={(e) => update("name", e.target.value)}
                                        onBlur={() => onBlur("name")}
                                        aria-invalid={!!errors.name}
                                        required
                                    />
                                    {errors.name && <p className="text-xs text-orange-300 mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-medium block mb-1" htmlFor="gender">
                                        Select Gender
                                    </label>
                                    <select
                                        id="gender"
                                        className="w-full px-3 py-2 rounded border border-white/10 bg-white/5"
                                        value={form.gender}
                                        onChange={(e) => update("gender", e.target.value)}
                                    >
                                        <option value="">-- Choose --</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Non-binary</option>
                                        <option>Prefer not to say</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium block mb-1" htmlFor="email">
                                        Email*
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-3 py-2 rounded border border-white/10 bg-white/5"
                                        value={form.email}
                                        onChange={(e) => update("email", e.target.value)}
                                        onBlur={() => onBlur("email")}
                                        aria-invalid={!!errors.email}
                                        required
                                    />
                                    {errors.email && <p className="text-xs text-orange-300 mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-medium block mb-1" htmlFor="phone">
                                        Phone Number*
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="w-full px-3 py-2 rounded border border-white/10 bg-white/5"
                                        value={form.phone}
                                        onChange={(e) => update("phone", e.target.value)}
                                        onBlur={() => onBlur("phone")}
                                        aria-invalid={!!errors.phone}
                                        placeholder="+1 (555) 555-5555"
                                        required
                                    />
                                    {errors.phone && <p className="text-xs text-orange-300 mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            {/* DOB */}
                            <div className="mb-3">
                                <label className="text-sm font-medium block mb-2">Date of birth</label>
                                <div className="grid grid-cols-3 gap-3">
                                    <select
                                        className="px-3 py-2 rounded border border-white/10 bg-white/5"
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
                                        className="px-3 py-2 rounded border border-white/10 bg-white/5"
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
                                        className="px-3 py-2 rounded border border-white/10 bg-white/5"
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
                                </div>
                            </div>

                            {/* Passwords */}
                            <div className="space-y-3 mb-4">
                                <div>
                                    <label className="text-sm font-medium block mb-1" htmlFor="password">
                                        Password*
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            className="w-full px-3 py-2 rounded border border-white/10 bg-white/5"
                                            value={form.password}
                                            onChange={(e) => update("password", e.target.value)}
                                            onBlur={() => onBlur("password")}
                                            aria-invalid={!!errors.password}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((s) => !s)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-gray-200 bg-white/5 rounded"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-xs text-orange-300 mt-1">{errors.password}</p>}
                                </div>

                                <div>
                                    <label className="text-sm font-medium block mb-1" htmlFor="confirm">
                                        Confirm password*
                                    </label>
                                    <input
                                        id="confirm"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full px-3 py-2 rounded border border-white/10 bg-white/5"
                                        value={form.confirm}
                                        onChange={(e) => update("confirm", e.target.value)}
                                        onBlur={() => onBlur("confirm")}
                                        aria-invalid={!!errors.confirm}
                                        required
                                    />
                                    {errors.confirm && <p className="text-xs text-orange-300 mt-1">{errors.confirm}</p>}
                                </div>
                            </div>

                            {/* Verify with */}
                            <div className="mb-4">
                                <label className="text-sm font-medium block mb-2">Verify with*</label>
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setVerifiedVia("phone")}
                                        className={`px-3 py-2 rounded w-1/2 font-medium ${verifiedVia === "phone" ? "bg-[#f38a21] text-white" : "bg-white/5 text-white/80"
                                            }`}
                                    >
                                        Phone number
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setVerifiedVia("email")}
                                        className={`px-3 py-2 rounded w-1/2 font-medium ${verifiedVia === "email" ? "bg-[#f38a21] text-white" : "bg-white/5 text-white/80"
                                            }`}
                                    >
                                        Email
                                    </button>
                                </div>
                            </div>

                            <p className="text-xs text-gray-300 mb-4">
                                By signing up, I accept the OneDayID Cloud{" "}
                                <a href="#" className="underline text-white">
                                    terms of service
                                </a>{" "}
                                and acknowledge the{" "}
                                <a href="#" className="underline text-white">
                                    privacy policy
                                </a>
                                .
                            </p>

                            <div className="mb-4">
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className={`w-full py-2 rounded text-white font-semibold transition ${isValid ? "bg-[#f38a21] hover:opacity-95" : "bg-white/10 opacity-60 cursor-not-allowed"
                                        }`}
                                >
                                    Continue
                                </button>
                            </div>

                            <div className="text-center">
                                <a href="#" className="text-sm text-gray-300 underline">
                                    Back
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}