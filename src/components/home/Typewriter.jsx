import React, { useState, useEffect } from 'react'

export default function TypeWriter({ appendClass, prefix }) {
    const hats = [
        {
          prep: 'a',
          suffix: 'Frontend Developer'
        },
        {
          prep: 'a',
          suffix: 'Backend Developer'
        },
        {
          prep: 'a',
          suffix: 'Mern Stack Developer'
        },
      ];
    // Outer container base class + append custom class
    let className = "flex flex-col gap-4";
    if (appendClass) className += " " + appendClass;

    // Typewriter effect base class
    const typeWriterClass = " text-[#eb3b5a] font-semibold "
        + "animate-cursor overflow-hidden whitespace-nowrap transition-[width] ease-in-out duration-1000 mr-auto";

    // State of current hat index
    const [currentHat, setCurrentHat] = useState(0);
    // State to toggle word collapse effect
    const [collapseClass, setCollapseClass] = useState(" w-0");

    useEffect(() => {
        setTimeout(() => setCollapseClass(" w-full"), 100);

        const incrementHat = async () => {
            // Set the width to 0 - transition duration is 1000ms
            setCollapseClass(" w-0");
            setTimeout(() => {
                /**
                 * After 1100ms, change the displayed text while the div
                 * is collapsed by incrementing the index
                 */
                setCurrentHat(oldVal => {
                    let hatIndex;
                    if (oldVal >= hats.length - 1) {
                        hatIndex = 0;
                    } else {
                        hatIndex = oldVal + 1;
                    }

                    return hatIndex;
                });
            }, 1000);
            // After 1000ms, set width to 100% - transition duration is 1000ms
            setTimeout(() => {
                setCollapseClass(" w-full");
            }, 3000);
        }
        // Interval timer to change text every 4000ms
        const id = setInterval(incrementHat, 2000);

        // Cleanup interval timer
        return () => clearInterval(id);
    }, []); //  eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={className}>
            <div className="text-4xl w-full text-[#343a40]  lg:text-6xl mt-6  mx-auto">
                Muhammad <span className="text-[#eb3b5a] font-bold">Adil</span>
            </div>
            <div className="flex gap-2 w-fit md:mx-0 mx-auto text-2xl lg:text-3xl ">
                <div className="shrink-0 text-[#343a40] capitalize whitespace-nowrap">
                    {prefix}
                    {hats[currentHat].prep ? ` ${hats[currentHat].prep} ` : ''}
                </div>
                <div className={`${typeWriterClass}${collapseClass}`}>{hats[currentHat].suffix}</div>
            </div>
        </div>
    )
}