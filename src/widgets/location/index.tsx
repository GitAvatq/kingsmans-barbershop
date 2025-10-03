"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});

const Location = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1240px] px-5 mx-auto">
                <div className="py-7">
                    <h1 className="text-6xl mt-6 pt-10 text-center text-black font-base max-md:text-4xl">
                        Our Location
                    </h1>

                    <div className="w-full h-[500px] mt-10 rounded-2xl overflow-hidden shadow-lg">
                        <MapContainer
                            center={[42.856393, 74.623572]}
                            zoom={13}
                            scrollWheelZoom={true}
                            className="h-full w-full"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[42.856393, 74.623572]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[42.826, 74.625]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[42.832360390803665, 74.61544247132706]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[42.83700706938686, 74.6160526285736]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[42.83456527702979, 74.62106745390092]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[43.00178842892593, 74.4372651478935]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[51.13353748033525, 71.40790781249845]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[50.892196342270914, 72.133225196635]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                            <Marker position={[35.730518852547256, 139.1263121191388]} icon={markerIcon}>
                                <Popup>KINGSMANS Barbershop</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
