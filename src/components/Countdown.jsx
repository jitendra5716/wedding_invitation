
import { useEffect, useState } from "react";

const Countdown = () => {
    const weddingDate = new Date("2026-07-07T00:00:00");

    const getTimeLeft = () => {
        const difference = weddingDate - new Date();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (value) => String(value).padStart(2, "0");

    return (
        <section
            style={{
                background: "linear-gradient(135deg, #f7efe4 0%, #f3d8be 100%)",
                minHeight: "45vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "18px",
                padding: "60px 20px",
                color: "#6f4332",
            }}
        >
            <h1 style={{ margin: 0, fontSize: "clamp(1.7rem, 4vw, 3rem)", color: "#8b5a3c" }}>
                The Wedding Day
            </h1>
            <h3 style={{ margin: 0, letterSpacing: "2px", fontSize: "clamp(1.4rem, 2vw, 1rem)" }}>
                TUESDAY, 07TH JULY 2026
            </h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                }}
            >
                {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                    <div
                        key={item.label}
                        style={{
                            minWidth: "90px",
                            padding: "14px 10px",
                            background: "rgba(255, 255, 255, 0.45)",
                            borderRadius: "12px",
                            boxShadow: "0 4px 12px rgba(111, 67, 50, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <h3 style={{ margin: 0, fontSize: "2rem", color: "#7a4d3a" }}>
                            {formatNumber(item.value)}
                        </h3>
                        <p style={{ margin: "6px 0 0", fontSize: "0.9rem", textTransform: "uppercase" }}>
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Countdown;