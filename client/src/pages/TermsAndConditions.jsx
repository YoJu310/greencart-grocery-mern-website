import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto", lineHeight: "1.6" }}>
      <h1>Terms and Conditions</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        Welcome to our website. This platform is created as part of a personal
        portfolio project to showcase web development skills. The following
        terms and conditions govern your use of this website.
      </p>

      <h2>1. Nature of the Website</h2>
      <p>
        This is a demonstration website. Any products, services, or payment
        gateways displayed are for educational and testing purposes only.
        No actual commercial transactions take place through this platform.
      </p>

      <h2>2. User Responsibilities</h2>
      <p>
        By accessing this website, you agree not to misuse any features,
        attempt to process real payments, or provide false information.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All code, design, and content on this website are the intellectual
        property of the creator and may not be reproduced without permission.
      </p>

      <h2>4. Changes to These Terms</h2>
      <p>
        We reserve the right to update or change these terms at any time
        without prior notice.
      </p>

      <p>
        If you have any questions, please contact us via the details provided
        on the Contact page.
      </p>
    </div>
  );
};

export default TermsAndConditions;
