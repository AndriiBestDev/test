import React, { useState, useEffect } from "react";

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState(599);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(intervalId);

                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="w-full bg-[#F9B22D] flex justify-center items-center h-[35px]">
            <h1 className="text-white font-bold">
                Reserved price for : {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </h1>
        </div>
    );
};

export default Timer;
