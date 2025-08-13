import React from "react";

const CancellationAndRefund = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto", lineHeight: "1.6" }}>
      <h1>Cancellation & Refund Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Nature of Services</h2>
      <p>
        This website is a portfolio project for demonstration purposes only.
        No actual products or services are being sold, and no real
        transactions are processed.
      </p>

      <h2>2. Cancellation</h2>
      <p>
        As no real orders are placed through this website, there is no
        applicable cancellation process.
      </p>

      <h2>3. Refunds</h2>
      <p>
        Since no actual payments are collected, refunds do not apply.
        Any payment examples shown are for test purposes only.
      </p>

      <h2>4. Contact Information</h2>
      <p>
        For queries related to this policy, please refer to the Contact
        page of this website.
      </p>
    </div>
  );
};

export default CancellationAndRefund;
