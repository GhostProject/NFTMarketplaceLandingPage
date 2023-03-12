import 'styles/globals.css';
import { Outfit, Paytone_One } from 'next/font/google';

export const metadata = {
  title: 'NFT Marketplace | Bored Ape',
  description: 'NFT Marketplace Landing Page',
};

const outfit = Outfit({
  subsets: ['latin'],
});
const paytoneOne = Paytone_One({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVariable = {
    '--font-outfit': outfit.style.fontFamily,
    '--font-paytone': paytoneOne.style.fontFamily,
  } as React.CSSProperties;

  return (
    <html lang="en" className={outfit.className} style={fontVariable}>
      <body>{children}</body>
    </html>
  );
}
