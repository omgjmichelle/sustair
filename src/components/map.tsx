'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import React,{useState} from "react";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { icon } from "leaflet"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';

const ICON = icon({
  iconUrl: "download.png",
 
  shadowUrl:"marker-shadow.png",
})



const EventMap = () => {
  const [location, setLocation] = useState([51.505, -0.09]);
  return (
    <div className='container px-0 mx-auto py-0'>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-5'>
        <div className='left_part bg-cyan-800 p-5 rounded-md h-screen'>
          <div className='flex flex-col gap-5'>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </div>
        <div className='map_part h-screen col-span-4'>
        <MapContainer center={[3.856839, 11.52386]} zoom={15} scrollWheelZoom={true} style={{height:'100%', width:'100%'}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker  icon={ICON} position={[3.856839, 11.52386]}>
            <Popup>
              Résidence  la Patience.
            </Popup>
          </Marker>
        </MapContainer>
        </div>

      </div>

    </div>

  )
}

  

export default EventMap;