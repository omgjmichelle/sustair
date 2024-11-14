import React from 'react';
import PageTitle from '@/components/page-title';
import EventMap from'@/components/map'
import { useEffect } from 'react';
import dynamic from 'next/dynamic';





export default function MapPage() {
    return (
      <EventMap/>
    );
}