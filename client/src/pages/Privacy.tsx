import { useSEO } from "@/hooks/use-seo";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  useSEO({
    title: "Privacy Policy",
    description: "TechTaxCorp privacy policy. Learn how we collect, use, and protect your personal information.",
  });

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              TechTaxCorp ("we," "our," or "us") respects your privacy and is committed to protecting
              your personal data. This privacy policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect information you provide directly to us, such as:</p>
            <ul>
              <li>Name, email address, phone number, and company name</li>
              <li>Information submitted through contact forms</li>
              <li>Financial documents and records for accounting services</li>
              <li>Communications with our team</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referral sources</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates about our services</li>
              <li>Analyze website usage and performance</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We may use cookies and similar tracking technologies to collect information about your
              browsing activities. You can control cookies through your browser settings.
            </p>
            <p>
              If enabled, we may use Google Analytics and Google Tag Manager to analyze website usage.
              These services may collect information about your visits using cookies and other
              technologies.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the Internet is 100% secure.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may share your information with third-party service providers who assist us in
              operating our website, conducting our business, or providing services to you. These
              parties are obligated to keep your information confidential.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for
              which it was collected, including for legal, accounting, or reporting requirements.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly
              collect personal data from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please
              contact us at:
            </p>
            <p>
              <strong>Email:</strong> techtaxcorp@gmail.com
              <br />
              <strong>Address:</strong> Texas, USA
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
