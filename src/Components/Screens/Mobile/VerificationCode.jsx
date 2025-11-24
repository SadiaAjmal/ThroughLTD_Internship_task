import React, { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";

const PRIMARY = "border-blue-600";
const SECONDARY = "border-red-500";
const PRIMARY_BG = "bg-blue-600";
const INPUT_SIZE = "w-12 h-12";

const VerificationCode = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState(false);
    const inputsRef = useRef([]);

    const handleChange = (index, value) => {
        // Allow only numbers
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setError(false);

            // Move to next input automatically
            if (value && index < otp.length - 1) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            // Clear current box
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                // Move focus to previous box if empty
                inputsRef.current[index - 1].focus();
            }
        } else if (e.key >= "0" && e.key <= "9") {
            // For number keys, prevent default to handle manual input change
            e.preventDefault();
            handleChange(index, e.key);
        }
    };

    const handleVerify = () => {
        const code = otp.join("");
        if (code === "1234") {
            alert("Code verified successfully!");
        } else {
            setError(true);
        }
    };

    const handleResend = () => {
        alert("Verification code resent!");
        setOtp(["", "", "", ""]);
        setError(false);
        inputsRef.current[0].focus();
    };

    return (
        <main className="min-h-screen max-w-md w-full rounded-lg  bg-white px-2 py-10 flex flex-col items-center relative">
            {/* Back Button */}
            <button
                aria-label="Back"
                onClick={() => window.history.back()}
                className="absolute left-0 top-2 items-center text-primary font-medium cursor-pointer flex gap-1"
            >
                <IoIosArrowBack className="text-xl" /> 
            </button>

            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-2xl text-primary font-semibold ">Enter verification code</h1>
            </header>

            {/* Verification Section */}
            <section className="text-center w-full max-w-sm">
                <p className="text-gray-700 mb-1">We sent the code to</p>
                <p className="font-semibold text-gray-900 mb-6">0521255379</p>

                {/* OTP Inputs */}
                <div className="flex justify-center gap-3 mb-5">
                    {otp.map((value, index) => {
                        const isError = error;
                        const baseBorder = isError ? "border-secondary" : "border-primary";
                        const baseBg = value ? "bg-primary" : "bg-white";

                        return (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className={`text-center text-xl rounded-lg ${INPUT_SIZE} border ${baseBorder} ${baseBg} text-white focus:outline-none transition`}
                            />
                        );
                    })}
                </div>

                <p className="text-gray-500 text-sm mb-6">Code expires in 1:30 min</p>

                {/* Action Buttons */}
                <div className="flex justify-between gap-4">
                    <button
                        type="button"
                        onClick={handleResend}
                        className="w-1/2 border border-primary text-primary py-2 rounded-sm font-medium cursor-pointer"
                    >
                        Send again
                    </button>

                    <button
                        type="button"
                        onClick={handleVerify}
                        className="w-1/2 bg-primary text-white py-2 rounded-sm font-medium cursor-pointer"
                    >
                        Verify
                    </button>
                </div>
            </section>
        </main>
    );
};

export default VerificationCode;
