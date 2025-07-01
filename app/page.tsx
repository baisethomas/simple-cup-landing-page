import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Coffee,
  Timer,
  Calculator,
  BookOpen,
  Wifi,
  Smartphone,
  Star,
  Mail,
  ChevronRight,
  Play,
  Save,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function SimpleCupLanding() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden pt-16 bg-white">
          <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Now Available on iOS
                  </Badge>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black">Simple Cup</h1>
                  <p className="text-xl sm:text-2xl text-gray-600 font-medium">Your Perfect Coffee, Every Time.</p>
                  <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                    Brew better coffee with just one screen. A minimalist coffee brewing assistant that combines
                    precision with simplicity.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="https://apps.apple.com/us/app/simple-cup/id6747607568"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-black hover:bg-gray-800 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg w-full sm:w-auto"
                    >
                      <Smartphone className="mr-2 h-5 w-5" />
                      Download on the App Store
                    </Button>
                  </Link>
                  <Link href="/privacy">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl px-8 py-4 text-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-200 bg-transparent w-full sm:w-auto"
                    >
                      View Privacy Policy
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <video
                    src="/Simple Cup 2.mp4"
                    width="450"
                    height="450"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything You Need in One Screen</h2>
              <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                Designed for coffee lovers who value precision, simplicity, and the perfect brew ritual.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="h-8 w-8" />,
                  title: "All-in-One Interface",
                  description: "Ratio calculator, timer, and brewing guide in one elegant screen",
                },
                {
                  icon: <Calculator className="h-8 w-8" />,
                  title: "Smart Ratio Calculator",
                  description: "Enter coffee or water amount and get real-time perfect ratios",
                },
                {
                  icon: <Timer className="h-8 w-8" />,
                  title: "Intelligent Timer",
                  description: "Phase-based timer with bloom, steep, and smart notifications",
                },
                {
                  icon: <Settings className="h-8 w-8" />,
                  title: "Method Selector",
                  description: "Pour-over, French Press, AeroPress, Espresso & more",
                },
                {
                  icon: <Save className="h-8 w-8" />,
                  title: "Save Recipes",
                  description: "Save up to 50 brews with personal notes and ratings",
                },
                {
                  icon: <Wifi className="h-8 w-8" />,
                  title: "Offline Mode",
                  description: "Brew anywhere, even off the grid - no internet required",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl border border-purple-500/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-purple-200">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 sm:py-24 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Perfect Coffee in Four Steps</h2>
              <p className="text-lg text-purple-200">Simple, intuitive, and designed for your daily ritual</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Method",
                  description: "Select your preferred brewing method from our curated list",
                },
                {
                  step: "02",
                  title: "Enter Amount",
                  description: "Input coffee or water amount - we'll calculate the perfect ratio",
                },
                {
                  step: "03",
                  title: "Follow Timer",
                  description: "Tap start and follow our intelligent phase-based timer",
                },
                {
                  step: "04",
                  title: "Save & Rate",
                  description: "Save your brew with notes and rate your perfect cup",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white font-bold text-xl mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-purple-200">{step.description}</p>
                  {index < 3 && <ChevronRight className="h-6 w-6 text-purple-400 mx-auto mt-6 hidden lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Tips */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Daily Coffee Wisdom</h2>
              <p className="text-lg text-purple-200">Learn something new about coffee every day</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden border border-purple-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Coffee className="h-8 w-8 text-purple-400 mr-3" />
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Today's Tip
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">The Perfect Grind Size</h3>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    For pour-over methods, aim for a medium-fine grind that feels like coarse sea salt. This allows for
                    optimal extraction time and prevents over or under-extraction.
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-purple-300">Swipe for more tips</span>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Hook */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-800/50 to-black/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Star className="h-12 w-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join Thousands of Mindful Brewers</h2>
              <p className="text-xl text-purple-200 mb-8">
                Perfecting their daily ritual, one cup at a time. Discover the joy of intentional coffee brewing.
              </p>
              <Link
                href="https://apps.apple.com/us/app/simple-cup/id6747607568"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black rounded-xl px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Support & Contact */}
        <section id="support" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-lg text-purple-200">We're here to help you brew better coffee</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg rounded-2xl border border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Support Center</h3>
                  <p className="text-purple-200 mb-4">Find answers to common questions</p>
                  <Link href="#" className="text-purple-400 hover:text-purple-300 font-medium">
                    Visit Support →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg rounded-2xl border border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                  <p className="text-purple-200 mb-4">Get in touch with our team</p>
                  <a href="mailto:support@simplecup.app" className="text-purple-400 hover:text-purple-300 font-medium">
                    support@simplecup.app
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg rounded-2xl border border-purple-500/20">
                <CardContent className="p-8 text-center">
                  <Settings className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Privacy Policy</h3>
                  <p className="text-purple-200 mb-4">Learn how we protect your data</p>
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300 font-medium">
                    Read Policy →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black/30 border-t border-purple-500/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <span className="text-xl font-bold text-white">Simple Cup</span>
              </div>

              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <Link href="https://www.instagram.com/simplecupapp/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200">
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.tiktok.com/@simple.cup" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200">
                  <FaTiktok className="h-6 w-6" />
                </Link>
              </div>

              <p className="text-purple-200 text-center md:text-right">© 2025 Simple Cup. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
