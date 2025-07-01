import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Server, Users, FileText, Mail } from "lucide-react"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"

export default function PrivacyPolicy() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        {/* Header */}
        <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-purple-200 hover:text-white hover:bg-purple-800/50"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-white">Simple Cup</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 text-white">
                <Shield className="h-8 w-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-lg text-purple-200">Your privacy matters to us. Here's how we handle your data.</p>
            </div>

            {/* Privacy Policy Content */}
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg rounded-3xl border border-purple-500/20">
              <CardContent className="p-8 sm:p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <p className="text-sm text-purple-300 mb-6">Effective Date: June 21, 2025</p>
                    <p className="text-purple-100 leading-relaxed">
                      Simple Cup ("we", "our", or "us") respects your privacy. This privacy policy outlines how we
                      handle data in our mobile application, Simple Cup.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <Eye className="h-6 w-6 text-purple-400 mr-3" />
                      <h2 className="text-2xl font-bold text-white">1. Personal Data Collection</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed">
                      We{" "}
                      <strong className="text-white">
                        do not collect, store, or share any personally identifiable information
                      </strong>{" "}
                      (PII) such as your name, email address, phone number, or location.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <FileText className="h-6 w-6 text-purple-400 mr-3" />
                      <h2 className="text-2xl font-bold text-white">2. Analytics and Crash Reporting</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed mb-4">
                      To help us improve the app and ensure it runs smoothly, we use third-party services that collect{" "}
                      <strong className="text-white">non-personal, anonymous usage data</strong>. This includes:
                    </p>
                    <ul className="list-disc list-inside text-purple-100 space-y-2 mb-4 ml-4">
                      <li>App performance metrics</li>
                      <li>Crash logs</li>
                      <li>Device type and operating system version</li>
                      <li>Usage trends (e.g., which features are used most)</li>
                    </ul>
                    <p className="text-purple-100 leading-relaxed mb-4">
                      These analytics do <strong className="text-white">not</strong> identify individual users.
                    </p>
                    <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/20">
                      <p className="text-sm font-semibold text-purple-200 mb-2">Services we may use:</p>
                      <ul className="text-sm text-purple-300 space-y-1">
                        <li>• Apple App Analytics</li>
                        <li>• Firebase Crashlytics</li>
                        <li>• Google Firebase Analytics (with anonymized IPs)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <Server className="h-6 w-6 text-purple-400 mr-3" />
                      <h2 className="text-2xl font-bold text-white">3. Data Security</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed mb-4">
                      We take app performance and data integrity seriously. Any usage data collected through third-party
                      tools is handled by those services in accordance with their own privacy policies.
                    </p>
                    <p className="text-purple-100 leading-relaxed">
                      We do <strong className="text-white">not</strong> store any user data on our own servers.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-purple-400 mr-3" />
                      <h2 className="text-2xl font-bold text-white">4. Children's Privacy</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed">
                      Simple Cup is not directed at children under the age of 13. We do not knowingly collect data from
                      children.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <FileText className="h-6 w-6 text-purple-400 mr-3" />
                      <h2 className="text-2xl font-bold text-white">5. Changes to This Policy</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed">
                      We may update this Privacy Policy from time to time. Updates will be posted on this page with a
                      revised effective date.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <Mail className="h-6 w-6 text-purple-400 mr-3" />
                      <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
                    </div>
                    <p className="text-purple-100 leading-relaxed mb-4">
                      If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/20">
                      <a
                        href="mailto:simplecup@appsupport.email"
                        className="text-purple-400 hover:text-purple-300 font-semibold"
                      >
                        support@simplecup.app
                      </a>
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="border-t border-purple-500/20 pt-8">
                    <p className="text-sm text-purple-300 italic">
                      This policy applies only to the Simple Cup mobile application and not to any third-party services
                      or websites you may access through the app.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Navigation */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Simple Cup
                </Button>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 bg-black/30 border-t border-purple-500/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-white">Simple Cup</span>
              </div>
              <p className="text-purple-200 text-center">© 2025 Simple Cup. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
