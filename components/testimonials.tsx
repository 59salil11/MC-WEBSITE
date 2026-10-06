import { SectionHeading } from "@/components/section-heading";
import { ElfsightReviews } from "@/components/elfsight-reviews";

export function Testimonials({ className = "" }) {
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
        <ElfsightReviews />
      </div>
    </section>
  );
}
