"use client"
import { useState } from "react";

export default function DisplayIP() {
    const [ip, setIP] = useState(null);
    const [error, setError] = useState(null);

    const fetchIP = async () => {
        try {
            const response = await fetch('/api/scrape')
            const data = await response.json();
            if (data.ip) {
                setIP(data.ip);
            } else if (data.error) {
                setError(data.error);
            }
        } catch (error) {
          console.log(error)
            setError("Failed to fetch IP");
        }
    };

    return (
        <div>
            <button onClick={fetchIP}>Get IP Address</button>
            <>
            {ip && <p>Your IP address is: {ip}</p>}
            {error && <p>{error}</p>}
            </>
        </div>
    );
}
