import React from 'react';

export default function TermsOfService() {
  return (
    <div className="py-20 px-6 sm:px-10 lg:px-20 max-w-4xl mx-auto w-full min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-bold font-condensed mb-8 text-gray-900 tracking-wide">Terms of Service</h1>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p className="mb-6 text-gray-500 italic">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using the website and services of Wellset India Events & Promotions, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Description of Service</h2>
        <p className="mb-4">
          Wellset India Events & Promotions provides event management, rural marketing, retail campaigns, BTL activations, and community engagement services across India. We reserve the right to modify or discontinue, temporarily or permanently, the services with or without notice.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Booking and Cancellations</h2>
        <p className="mb-4">
          All event bookings and campaigns are subject to a formal agreement and deposit. Cancellations or modifications to booked services must be communicated in writing. Cancellation fees may apply depending on the proximity to the event date and the costs already incurred by our team.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Intellectual Property</h2>
        <p className="mb-4">
          The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall Wellset India Events & Promotions be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services, or for the cost of procurement of substitute services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      </div>
    </div>
  );
}
