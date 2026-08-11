"use client";

import { useEffect } from "react";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials({ className = "" }) {
  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What our customers say"
          subtitle="Thousands of Atlanta locals trust Mobile Care to keep their devices running. Here's what they think."
          className="mb-12"
        />
        {/* Elfsight Google Reviews Widget */}
        <div
          className="elfsight-app-d3c7508c-be91-4856-8b11-894c2c0e7d75"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
