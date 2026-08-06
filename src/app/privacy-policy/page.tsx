import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="py-20 px-6 sm:px-10 lg:px-20 max-w-4xl mx-auto w-full min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-bold font-condensed mb-8 text-gray-900 tracking-wide">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p className="mb-6 text-gray-500 italic">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Wellset India Events & Promotions. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. The Data We Collect About You</h2>
        <p className="mb-4">
          We may collect, use, store and transfer different kinds of personal data about you when you interact with our event management services, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data:</strong> includes billing address, email address, and telephone numbers.</li>
          <li><strong>Event Data:</strong> details about the events, campaigns, or activations you inquire about or book with us.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. How We Use Your Personal Data</h2>
        <p className="mb-4">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., managing your event or campaign).</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Data Security</h2>
        <p className="mb-4">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy or our privacy practices, please contact us at <strong>wellset017@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
