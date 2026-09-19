import {
  Smartphone,
  Layers,
  Plug,
  BatteryCharging,
  Camera,
  Droplets,
  type LucideIcon,
} from "lucide-react"

export interface ServiceStep {
  title: string
  description: string
}

export interface Service {
  slug: string
  name: string
  shortName: string
  icon: LucideIcon
  image: string
  tagline: string
  summary: string
  priceFrom: string
  turnaround: string
  overview: string
  includes: string[]
  process: ServiceStep[]
  signs: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    shortName: "Screen Replacement",
    icon: Smartphone,
    image: "/services/screen-replacement.png",
    tagline: "Crystal-clear displays, restored in minutes",
    summary:
      "Cracked, black, or unresponsive display? We replace it with a premium panel that matches your device's original color, brightness, and touch response.",
    priceFrom: "$59",
    turnaround: "30–45 min",
    overview:
      "A damaged screen is the most common repair we handle — and the one we've perfected. Our technicians use manufacturer-grade OLED and LCD panels calibrated to match your device's original color accuracy, brightness, and touch sensitivity. Whether it's a hairline crack, spider-webbed glass, dead pixels, or a screen that won't respond, we restore it to like-new condition while preserving Face ID and True Tone where supported.",
    includes: [
      "Premium OLED / LCD replacement panel",
      "Full touch and Face ID functionality preserved",
      "Color and brightness calibration",
      "Tempered-glass protector applied",
      "Post-repair quality testing",
      "30-day parts & labor warranty",
    ],
    process: [
      { title: "Free diagnostic", description: "We inspect the display and confirm the exact panel your device needs." },
      { title: "Precision removal", description: "The damaged screen is safely removed without harming internal components." },
      { title: "Panel installation", description: "A quality-tested display is fitted and every connector re-seated." },
      { title: "Calibration & testing", description: "We calibrate color and touch, then test before handing it back." },
    ],
    signs: [
      "Cracked or shattered glass",
      "Black spots, lines, or dead pixels",
      "Screen won't respond to touch",
      "Flickering or dim display",
      "Ghost touches or unresponsive areas",
    ],
    faqs: [
      {
        question: "Will screen replacement affect Face ID or True Tone?",
        answer:
          "No. Our technicians transfer the original sensors and use panels that preserve Face ID and True Tone on supported devices.",
      },
      {
        question: "How long does a screen replacement take?",
        answer:
          "Most screen replacements are completed in 30–45 minutes while you wait. Complex models may take slightly longer.",
      },
    ],
  },
  {
    slug: "back-glass-repair",
    name: "Back Glass Repair",
    shortName: "Back Glass Repair",
    icon: Layers,
    image: "/services/back-glass-repair.png",
    tagline: "Flawless rear glass without the flagship price",
    summary:
      "Shattered back glass is more than cosmetic — it exposes internals to dust and moisture. We restore a smooth, seamless finish fast.",
    priceFrom: "$69",
    turnaround: "45–90 min",
    overview:
      "Modern phones use glass backs that crack on impact and can leave sharp edges or expose your device to dust and moisture. Rather than paying flagship replacement prices, our laser-assisted process removes the broken glass and installs a precise, color-matched replacement that looks and feels factory-fresh — while keeping wireless charging fully functional.",
    includes: [
      "Color-matched OEM-grade rear glass",
      "Laser-assisted glass removal",
      "Wireless charging preserved",
      "Camera lens area sealed correctly",
      "Full clean-up of glass debris",
      "30-day parts & labor warranty",
    ],
    process: [
      { title: "Assessment", description: "We check the damage and confirm the correct glass and finish for your model." },
      { title: "Safe glass removal", description: "Broken glass is removed with heat and laser tools to protect internals." },
      { title: "New glass fitted", description: "A color-matched panel is bonded for a seamless factory look." },
      { title: "Function check", description: "We verify wireless charging and camera clarity before return." },
    ],
    signs: [
      "Cracked or shattered rear glass",
      "Sharp edges you can feel",
      "Glass lifting or peeling",
      "Wireless charging acting up",
      "Exposed internals near the camera",
    ],
    faqs: [
      {
        question: "Is back glass repair cheaper than a full housing swap?",
        answer:
          "Yes — our glass-only process avoids the cost of replacing the entire housing, saving you significantly versus manufacturer pricing.",
      },
      {
        question: "Will wireless charging still work?",
        answer: "Absolutely. We preserve the wireless charging coil and test it before returning your device.",
      },
    ],
  },
  {
    slug: "charging-port-replacement",
    name: "Charging Port Replacement",
    shortName: "Charging Port Repair",
    icon: Plug,
    image: "/services/charging-port-replacement.png",
    tagline: "Reliable charging and data transfer, restored",
    summary:
      "If your device charges intermittently or only at a certain angle, a worn or damaged port is usually the cause. We clean, repair, or replace it.",
    priceFrom: "$49",
    turnaround: "45–60 min",
    overview:
      "A charging port takes daily wear and collects lint, dust, and corrosion over time. When charging becomes unreliable — needing a wiggle, only working at an angle, or failing entirely — our technicians perform deep cleaning or precision micro-soldering to repair or replace the port, restoring both fast charging and data transfer.",
    includes: [
      "Deep port cleaning and inspection",
      "Bent-pin repair and re-alignment",
      "Full port replacement when needed",
      "Fast-charge and data-transfer testing",
      "Water-resistance seal restored where applicable",
      "30-day parts & labor warranty",
    ],
    process: [
      { title: "Diagnosis", description: "We determine whether the port needs cleaning, repair, or replacement." },
      { title: "Cleaning or removal", description: "Debris is cleared, or the damaged port is desoldered with precision." },
      { title: "Repair / replacement", description: "We install and micro-solder a new port assembly as required." },
      { title: "Charge testing", description: "Fast charging and data transfer are verified before return." },
    ],
    signs: [
      "Charges only at a certain angle",
      "Cable feels loose in the port",
      "Slow or intermittent charging",
      "Device won't charge at all",
      "Data transfer fails when plugged in",
    ],
    faqs: [
      {
        question: "Could it just need cleaning instead of replacement?",
        answer:
          "Often, yes. We always try deep cleaning first — many 'dead' ports simply have compacted lint or debris and cost far less to fix.",
      },
      {
        question: "Do you repair USB-C and Lightning ports?",
        answer: "Yes, we service Lightning, USB-C, and micro-USB ports across all major phone and tablet brands.",
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    shortName: "Battery Replacement",
    icon: BatteryCharging,
    image: "/services/battery-replacement.png",
    tagline: "All-day battery life, back in an afternoon",
    summary:
      "If your device dies early, shuts down unexpectedly, or overheats, a worn battery is the culprit. We install high-capacity cells that restore full life.",
    priceFrom: "$45",
    turnaround: "30–45 min",
    overview:
      "Batteries degrade with every charge cycle, losing capacity until your phone barely lasts a day. We replace worn cells with high-capacity batteries that meet or exceed OEM specifications, then calibrate the charging cycle for accurate battery-health reporting. The result is a device that lasts all day and stops shutting down unexpectedly.",
    includes: [
      "High-capacity OEM-spec battery",
      "Complete power diagnostics",
      "Battery-health recalibration",
      "Safe recycling of the old cell",
      "Overheating and drain testing",
      "30-day parts & labor warranty",
    ],
    process: [
      { title: "Health check", description: "We run diagnostics to confirm the battery is the real cause." },
      { title: "Safe removal", description: "The old cell is removed following strict safety procedures." },
      { title: "New cell installed", description: "A high-capacity battery is fitted and securely sealed." },
      { title: "Calibration", description: "We calibrate the charge cycle so battery health reports accurately." },
    ],
    signs: [
      "Battery drains unusually fast",
      "Device shuts down above 20%",
      "Phone gets hot while charging",
      "Battery health below 80%",
      "Swelling or a bulging back panel",
    ],
    faqs: [
      {
        question: "How do I know if I need a new battery?",
        answer:
          "If your battery health is under 80%, your phone shuts down unexpectedly, or it won't last a day, a replacement will restore full performance. We offer free diagnostics to confirm.",
      },
      {
        question: "Is a swollen battery dangerous?",
        answer:
          "Yes — a swollen battery should be replaced immediately. Stop charging the device and bring it in; we handle swollen cells safely.",
      },
    ],
  },
  {
    slug: "camera-replacement",
    name: "Camera Replacement",
    shortName: "Camera Replacement",
    icon: Camera,
    image: "/services/camera-replacement.png",
    tagline: "Sharp photos and clear video, restored",
    summary:
      "Blurry shots, a cracked lens, or a camera that won't focus? We replace front and rear camera modules and lenses for crisp results.",
    priceFrom: "$55",
    turnaround: "45–60 min",
    overview:
      "From cracked lens covers to modules that won't focus or show black screens, camera problems have many causes. Our technicians diagnose whether it's the lens glass, the camera module, or a software issue, then replace the affected part with a quality-tested component and recalibrate focus for sharp photos and clear video.",
    includes: [
      "Front or rear camera module replacement",
      "Cracked lens-cover replacement",
      "Autofocus recalibration",
      "Flash and stabilization testing",
      "Image-quality verification",
      "30-day parts & labor warranty",
    ],
    process: [
      { title: "Diagnosis", description: "We identify whether the lens, module, or software is at fault." },
      { title: "Component removal", description: "The damaged lens or module is carefully removed." },
      { title: "Replacement", description: "A quality-tested camera part is installed and connected." },
      { title: "Focus testing", description: "We recalibrate autofocus and verify photo and video quality." },
    ],
    signs: [
      "Blurry or out-of-focus photos",
      "Cracked camera lens cover",
      "Black screen in the camera app",
      "Camera won't open or freezes",
      "Spots or haze in every photo",
    ],
    faqs: [
      {
        question: "My lens glass is cracked but photos look fine — should I fix it?",
        answer:
          "Yes. A cracked lens cover lets in dust and moisture and will eventually degrade image quality. Replacing the cover is quick and inexpensive.",
      },
      {
        question: "Can you fix a camera that won't focus?",
        answer:
          "In most cases, yes. Focus issues are usually a faulty module, which we replace and recalibrate for sharp results.",
      },
    ],
  },
  {
    slug: "water-damage-repair",
    name: "Water Damage Repair",
    shortName: "Water Damage Repair",
    icon: Droplets,
    image: "/services/water-damage-repair.png",
    tagline: "Liquid damage rescue with data recovery",
    summary:
      "Dropped your device in water? Fast action saves phones. Our ultrasonic cleaning and board-level repair give your device the best chance.",
    priceFrom: "$79",
    turnaround: "24–72 hrs",
    overview:
      "Liquid damage is time-sensitive — the sooner you act, the higher the recovery rate. Our specialists disassemble the device, use ultrasonic cleaning to remove corrosion, and perform board-level repair on damaged components. We also attempt data recovery so your photos and contacts aren't lost, and apply protective coating to guard against future exposure.",
    includes: [
      "Full disassembly and inspection",
      "Ultrasonic corrosion cleaning",
      "Board-level component repair",
      "Data recovery attempt",
      "Protective coating application",
      "Thorough post-repair testing",
    ],
    process: [
      { title: "Emergency intake", description: "We power down and disassemble the device immediately to limit damage." },
      { title: "Ultrasonic cleaning", description: "Corrosion and residue are removed from the logic board." },
      { title: "Board-level repair", description: "Damaged components are repaired or replaced as needed." },
      { title: "Recovery & testing", description: "We attempt data recovery and thoroughly test every function." },
    ],
    signs: [
      "Device was exposed to liquid",
      "Won't power on after getting wet",
      "Screen shows water lines or spots",
      "Speakers sound muffled",
      "Random restarts after a spill",
    ],
    faqs: [
      {
        question: "How soon should I bring in a water-damaged device?",
        answer:
          "As soon as possible. Do not charge or turn it on. The faster we can begin cleaning, the higher the chance of full recovery.",
      },
      {
        question: "Can you recover my data?",
        answer:
          "We attempt data recovery on every water-damage repair. Success depends on the severity, but we prioritize saving your photos and contacts.",
      },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
