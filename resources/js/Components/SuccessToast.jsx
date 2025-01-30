import React, {useState, useEffect} from "react";
import {FaCheckCircle} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";

const SuccessToast = ({message = "Product successfully deleted!", duration = 2000}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleDismiss();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            handleDismiss();
        }
    };

    if (!isVisible) return null;

    return (
        <div
            role="alert"
            aria-live="polite"
            className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
                isExiting
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
            } ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <div
                className="flex items-center justify-between w-full max-w-xs md:max-w-sm bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                    <FaCheckCircle className="h-6 w-6 flex-shrink-0" aria-hidden="true"/>
                    <p className="text-sm md:text-base font-medium">{message}</p>
                </div>
                <button
                    onClick={handleDismiss}
                    className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Close notification"
                >
                    <IoMdClose className="h-5 w-5"/>
                </button>
            </div>
        </div>
    );
};

export default SuccessToast;
