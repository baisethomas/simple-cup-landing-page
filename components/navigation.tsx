"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Smartphone } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">Simple Cup</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-purple-200 hover:text-white transition-colors duration-200">
              Features
            </Link>
            <Link href="#how-it-works" className="text-purple-200 hover:text-white transition-colors duration-200">
              How It Works
            </Link>
            <Link href="#support" className="text-purple-200 hover:text-white transition-colors duration-200">
              Support
            </Link>
            <Link href="/privacy" className="text-purple-200 hover:text-white transition-colors duration-200">
              Privacy
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://apps.apple.com/us/app/simple-cup/id6747607568"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-white hover:bg-gray-100 text-black rounded-lg px-4 py-2 font-semibold">
                <Smartphone className="mr-2 h-4 w-4" />
                Download
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-purple-200 hover:text-white hover:bg-purple-800/50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-purple-200 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-purple-200 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#support"
                className="text-purple-200 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="text-purple-200 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <div className="pt-4 border-t border-purple-500/20">
                <Link
                  href="https://apps.apple.com/us/app/simple-cup/id6747607568"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    size="sm"
                    className="w-full bg-white hover:bg-gray-100 text-black rounded-lg px-4 py-2 font-semibold"
                  >
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download on App Store
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
