import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'
import ContextProvider from '@/components/context-provider';

import '../styles/globals.css';

import SideNav from '@/components/side-nav';

import Header from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SustAir',
  description: 'Sustanable Air',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta>
        </meta>
        <title>SustAir</title>
        <script>
          
        </script>

      </head>
      <body className={inter.className}>
        <ContextProvider>
          <div className="flex">
            <SideNav />
            <div className="w-full">
              <div className="sm:h-[calc(100vh-60px)] overflow-auto ">
                <div className="w-full flex justify-center mx-auto   h-[calc(100vh - 120px)] overflow-y-auto ">
                  <div className="p-5 w-full">{children}</div>
                </div>
              </div>
            </div>
          </div>
          <Script src="scripts/index.js"></Script>
        </ContextProvider>
      </body>
    </html>
  );
}
