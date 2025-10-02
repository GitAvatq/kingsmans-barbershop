"use client";
import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

export default function WorldMapWithHover() {
    const [hoveredCountry, setHoveredCountry] = useState("");
    const [scaleValue, setScaleValue] = useState(210);
    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateScale = () => {
            const width = window.innerWidth;
            if (width < 480) setScaleValue(200);
            else if (width < 768) setScaleValue(140);
            else if (width < 1024) setScaleValue(180);
            else setScaleValue(210);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <section className="relative max-w-[1240px] px-5 mx-auto mt-17 bg-white">
            <div className='py-7 text-base'>
                <h1 className='pt-10 text-6xl font-accent text-center mb-30'>Franchising</h1>
            </div>
            <div className="relative w-full h-[500px] -left-80 max-lg:-left-55  max-lg:h-[400px] max-md:-left-40 max-sm:h-[300px] max-sm:-left-30">
                <ComposableMap projectionConfig={{ scale: scaleValue }} >
                    <Geographies geography={geoUrl} >
                        {({ geographies }) =>
                            geographies.filter((geo) => ["USA", "Malaysia", "Kyrgyzstan", "Russia", "Mongolia", "Moldova", "Estonia", "Germany", "Switzerland", "Turkey", "China", "Italy", "United Kingdom", "Philippines", "Saudi Arabia", "Kazakhstan"].includes(geo.properties.name)).map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() =>
                                        setHoveredCountry(geo.properties.name || "Unknown")
                                    }
                                    onMouseLeave={() => setHoveredCountry("")}
                                    style={{
                                        default: { fill: "#212121", outline: "none" },
                                        hover: { fill: "#d29c4e", outline: "none" },
                                        pressed: { fill: "#d29c4e", outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ComposableMap>
            </div>

            <div>
                {hoveredCountry && (
                    <>
                        <button>fefef</button>
                        <div className="absolute top-1/2 right-[100px] bg-accent  dark:bg-black p-2 rounded shadow-lg z-10 h-40 w-50 text-center z-20">
                            <h3 className="font-bold font-base text-2xl">{hoveredCountry}</h3>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
