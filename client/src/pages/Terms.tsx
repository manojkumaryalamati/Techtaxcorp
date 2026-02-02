import { useSEO } from "@/hooks/use-seo";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
  useSEO({
    title: "Terms of Service",
    description: "TechTaxCorp terms of service. Read our service agreement, payment terms, and client responsibilities.",
  });

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Terms of Service
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the TechTaxCorp website and services, you agree to be bound by
              these Terms of Service. If you disagree with any part of these terms, you may not
              access our services.
            </p>

            <h2>Services Description</h2>
            <p>TechTaxCorp provides the following services:</p>
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
              The scope of each website project will be defined in a written proposal or statement of
              work. Any changes to the agreed scope may result in additional charges and timeline
              adjustments.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              Upon full payment, you will own the rights to the final website design and content you
              provide. We retain the right to display the work in our portfolio and marketing
              materials unless otherwise agreed.
            </p>

            <h3>Third-Party Components</h3>
            <p>
              Websites may include third-party components (fonts, plugins, stock images) subject to
              their own licenses. We will inform you of any applicable licensing requirements.
            </p>

            <h2>Accounting Services</h2>
            <h3>Accuracy of Information</h3>
            <p>
              The accuracy of accounting and tax services depends on the completeness and accuracy of
              the information you provide. We are not responsible for errors resulting from
              incomplete or inaccurate data.
            </p>

            <h3>Professional Standards</h3>
            <p>
              Our accounting services are performed in accordance with generally accepted accounting
              principles (GAAP) and applicable tax laws. Tax advice is based on current tax codes,
              which are subject to change.
            </p>

            <h3>Document Retention</h3>
            <p>
              We maintain records in accordance with professional standards and applicable law. You
              are responsible for maintaining your own copies of financial documents.
            </p>

            <h2>Payment Terms</h2>
            <p>
              <strong>Website Projects:</strong> Typically require 50% deposit upfront and 50% upon
              project completion, unless otherwise agreed.
            </p>
            <p>
              <strong>Accounting Services:</strong> Billed monthly in advance. Payment is due within
              15 days of invoice date.
            </p>
            <p>
              Late payments may be subject to a late fee of 1.5% per month or the maximum rate
              permitted by law.
            </p>

            <h2>Confidentiality</h2>
            <p>
              We treat all client information as confidential and will not disclose it to third
              parties except as required by law or with your consent. This includes financial data,
              business information, and personal details.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TechTaxCorp shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages resulting from your
              use of our services. Our total liability shall not exceed the amount paid by you for
              the services in question.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate the service relationship with 30 days written notice.
              Website projects in progress will be subject to payment for work completed. Upon
              termination, we will return all client materials and assist with transition.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services will first be addressed through
              good faith negotiation. If unresolved, disputes will be settled through binding
              arbitration in Texas, USA in accordance with applicable arbitration rules.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify existing clients
              of significant changes. Continued use of our services after changes constitutes
              acceptance of the new terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of [State], without regard to its
              conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:
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
