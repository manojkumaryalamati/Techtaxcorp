import { useSEO } from "@/hooks/use-seo";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
  useSEO({
    title: "Terms of Service | TTCorp Solutions",
    description: "TTCorp Solutions terms of service—service agreement, payment terms, client responsibilities, and policies for websites, software, and accounting-related offerings.",
    canonicalPath: "/terms",
    robots: "index, follow",
  });

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the TTCorp Solutions website and services, you agree to be bound by these Terms of
              Service. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>Services Description</h2>
            <p>TTCorp Solutions provides the following services:</p>
            <ul>
              <li>Website design and development</li>
              <li>Website maintenance and support</li>
              <li>Bookkeeping and accounting services</li>
              <li>Tax preparation and filing</li>
              <li>Payroll services</li>
              <li>Financial consulting and advisory</li>
            </ul>

            <h2>Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Review and approve deliverables within agreed timeframes</li>
              <li>Pay invoices according to agreed payment terms</li>
              <li>Maintain confidentiality of account credentials</li>
            </ul>

            <h2>Website Design Services</h2>
            <h3>Project Scope</h3>
            <p>
              The scope of each website project will be defined in a written proposal or statement of work. Any changes
              to the agreed scope may result in additional charges and timeline adjustments.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              Upon full payment, you will own the rights to the final website design and content you provide. We retain
              the right to display the work in our portfolio and marketing materials unless otherwise agreed.
            </p>

            <h3>Third-Party Components</h3>
            <p>
              Websites may include third-party components (fonts, plugins, stock images) subject to their own licenses.
              We will inform you of any applicable licensing requirements.
            </p>

            <h2>Accounting Services</h2>
            <h3>Accuracy of Information</h3>
            <p>
              The accuracy of accounting and tax services depends on the completeness and accuracy of the information you
              provide. We are not responsible for errors resulting from incomplete or inaccurate data.
            </p>

            <h3>Professional Standards</h3>
            <p>
              Our accounting services are performed in accordance with generally accepted accounting principles (GAAP)
              and applicable laws and regulations.
            </p>

            <h2>Payment Terms</h2>
            <ul>
              <li>Web design projects: 50% deposit required to begin, balance due upon completion</li>
              <li>Monthly services: Invoiced at the beginning of each month</li>
              <li>Tax preparation: Payment due upon completion</li>
              <li>Late payments may incur interest charges of 1.5% per month</li>
            </ul>

            <h2>Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information, financial data, and business
              information. We will not disclose your information to third parties without your consent, except as
              required by law.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              TTCorp Solutions's liability is limited to the amount paid for the specific service giving rise to the claim.
              We are not liable for indirect, consequential, or incidental damages.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate services with 30 days written notice. You are responsible for payment of all
              services rendered through the termination date.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Texas, USA. Any disputes will be resolved in the
              courts of Texas.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify clients of significant changes.
              Continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about these terms, please contact us at:</p>
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
