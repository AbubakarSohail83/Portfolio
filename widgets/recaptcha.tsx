"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

type ReCaptchaProps = {
    setIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
    error?: boolean;
    setError?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReCaptcha = ({ setIsVerified, error, setError }: ReCaptchaProps) => {
    const [isLoading, setIsLoading] = useState(false);

    async function handleCaptchaSubmission(token: string | null) {
        if (!token) {
            setIsVerified(false);
            setError?.(true);
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch('/api/recaptcha', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });

            if (response.ok) {
                setIsVerified(true);
                setError?.(false);
            } else {
                setIsVerified(false);
                setError?.(true);
            }
        } catch {
            setIsVerified(false);
            setError?.(true);
        } finally {
            setIsLoading(false);
        }
    }

    function handleExpired() {
        setIsVerified(false);
        setError?.(true);
    }

    return (
        <div className="flex flex-col gap-2">
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={handleCaptchaSubmission}
                onExpired={handleExpired}
                className={`${error ? 'border-red-500' : ''}`}
            />
            {error && (
                <p className="text-red-500 text-sm">
                    Please complete the reCAPTCHA verification
                </p>
            )}
            {isLoading && (
                <p className="text-gray-500 text-sm">
                    Verifying...
                </p>
            )}
        </div>
    );
};