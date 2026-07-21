import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from './theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThirtyNine.INC — Digital Growth Agency',
  description: 'ThirtyNine.INC builds digital growth engines for ambitious African brands — turning followers into revenue, visibility into trust, and online presence into lasting business results. Tahqeeq Al-Ahlam. Realising dreams. One brand at a time.',
  keywords: 'Digital Marketing, Social Media, SEO, Web Development, African Agency, Kenya, East Africa',
  authors: [{ name: 'ThirtyNine.INC' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'ThirtyNine.INC — Digital Growth Agency',
    description: 'Building digital growth engines for ambitious African brands. Results over aesthetics. Partnership over transaction.',
    image: '/logo.png',
    url: 'https://thirtynine.inc',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThirtyNine.INC — Digital Growth Agency',
    description: 'Building digital growth engines for ambitious African brands.',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#00C2FF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
