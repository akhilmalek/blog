import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frontend Forge",
  description: "I share insights and tips to empower aspiring and seasoned developers alike",
  keywokds: 'CSS Tricks, HTML5 Best Practices, User Interface Design, UX/UI Tips, Coding for Beginners, Advanced CSS Techniques, Frontend Frameworks, Web Design Tips',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-4xl mx-auto py-4 px-4">
            <header className="max-w-4xl m-auto py-4 px-4 bg-white dark:bg-slate-950">
              <div className="flex items-center justify-between">
                <div className="nav-barnd">
                <Link href="/" className="font-bold	text-xl	">Frontend Forge</Link>
                </div>
               
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
                <div className="px-4">
                <ModeToggle  />
                </div>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
