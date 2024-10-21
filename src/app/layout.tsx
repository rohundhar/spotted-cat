'use client';
import { FileServiceProvider } from '@/providers/FileServiceProvider';
import '@/styles/global.css';

import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {

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
