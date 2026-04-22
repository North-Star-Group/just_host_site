'use client';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { MoreVertical, Calendar, Plus, Minus, Maximize2 } from 'lucide-react';

// Using a reliable public TopoJSON file for world countries
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Map specific countries to our customized mockup regions
const regions = {
    western: ["France", "Germany", "Netherlands", "Belgium", "Luxembourg", "Switzerland", "Austria"],
    southern: ["Spain", "Italy", "Portugal", "Greece", "Croatia", "Slovenia"],
    eastern: ["Poland", "Czechia", "Hungary", "Romania", "Bulgaria", "Slovakia", "Ukraine", "Belarus"],
    northern: ["United Kingdom", "Ireland", "Sweden", "Norway", "Finland", "Denmark"]
};

type GeographyFeature = {
    rsmKey: string;
    properties: {
        name: string;
    };
};

// Assign colors based on the region mapping
const getColor = (geoName: string) => {
    if (regions.western.includes(geoName)) return 'var(--color-accent-blue)';
    if (regions.southern.includes(geoName)) return 'var(--color-accent-teal)';
    if (regions.eastern.includes(geoName)) return 'var(--color-accent-gold)';
    if (regions.northern.includes(geoName)) return '#D1D5DB'; // Gray
    return '#E5E7EB'; // Lighter gray for undefined/out-of-bounds countries
};

export default function EuropeanMapCard() {
    return (
        <div
            className="w-full max-w-2xl p-6 rounded-2xl shadow-sm relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-cream)' }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 relative z-10">
                <h2
                    className="text-lg font-bold"
                    style={{ color: 'var(--color-primary)' }}
                >
                    Active Integrations
                </h2>

            </div>

            {/* Map Container */}
            <div className="relative w-full h-[320px] flex items-center justify-center -mt-8">

                <ComposableMap
                    projection="geoAzimuthalEqualArea"
                    projectionConfig={{
                        rotate: [-15.0, -52.0, 0], // Center exactly on Europe
                        scale: 850 // Zoom level
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }: { geographies: GeographyFeature[] }) =>
                            geographies.map((geo: GeographyFeature) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={getColor(geo.properties.name)}
                                    stroke="#ffffff"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none", transition: "all 250ms" },
                                        hover: { outline: "none", opacity: 0.8, cursor: "pointer", transition: "all 250ms" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ComposableMap>

                {/* Data Overlay Box (Bottom Left) */}
                <div
                    className="absolute bottom-2 left-2 p-4 rounded-xl shadow-md text-white z-10"
                    style={{ backgroundColor: 'var(--color-accent-blue)' }}
                >
                    <p className="text-2xl font-bold tracking-tight">4,250</p>
                    <p className="text-sm font-medium opacity-90">Western Europe</p>
                </div>
            </div>
        </div>
    );
}
