/** @format */

import './globals.scss';

export const metadata = {
  title: 'MIXWATCH',
  description: 'devide team for overwatch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <img
          src="/images/overwatchLogo.png"
          alt="logo"
          className="backgroundImg"
        />
        {children}
      </body>
    </html>
  );
}
