import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Akashic Domains',
  description: 'Akashic Domains Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}