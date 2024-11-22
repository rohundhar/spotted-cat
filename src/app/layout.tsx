'use client';
import { FileServiceProvider } from '@/providers/FileServiceProvider';
import '@/styles/global.css';

import { ClerkProvider } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {


  useEffect(() => {
    if ('serviceWorker' in navigator) {
      console.log('Service Worker in Navigator');
      // window.addEventListener('load', () => {
        console.log('attempting to register');
        navigator.serviceWorker
          .register('/service-worker.js') // Path to your service worker file
          .then((registration) => {
            console.log('Service worker registered:', registration);
          })
          .catch((error) => {
            console.error('Service worker registration failed:', error);
          })
          .finally(() => {
            console.log('Finally')
          })
      // });
    }
  }, []);

  return (
    <html lang={props.params.locale}>
      <body suppressHydrationWarning>
        <ClerkProvider>
          <FileServiceProvider>
          {props.children}
          </FileServiceProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
