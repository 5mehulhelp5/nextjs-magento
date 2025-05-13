'use client';

import { useEffect, useRef } from 'react';

export const InpostGeoWidget=({ token }: { token: string })=> {
  const widgetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Dodaj style tylko raz
    const existingCss = document.querySelector("link[href*='inpost-geowidget.css']");
    if (!existingCss) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://geowidget.inpost.pl/inpost-geowidget.css';
      document.head.appendChild(link);
    }

    // Dodaj script tylko raz
    const existingScript = document.querySelector("script[src*='inpost-geowidget.js']");
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://geowidget.inpost.pl/inpost-geowidget.js';
      script.defer = true;
      document.body.appendChild(script);
    }

    // Listener na wybór paczkomatu
    const handler = (event: any) => {
      const selectedPoint = event?.detail;
      console.log('Wybrany paczkomat:', selectedPoint);
      // Możesz tutaj zapisać do Redux, state, wysłać do serwera itd.
    };

    document.addEventListener('onpointselect', handler);

    return () => {
      document.removeEventListener('onpointselect', handler);
    };
  }, []);

  return (
    <div style={{position:'fixed',top:'10%',left:'10%',height:'80vh',width:'80vw'}}
      dangerouslySetInnerHTML={{
        __html: `<inpost-geowidget onpoint="onpointselect" token="${token}" language="pl" config="parcelcollect"></inpost-geowidget>`,
      }}
    />
  );
}
