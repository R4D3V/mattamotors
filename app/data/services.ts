export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  projects: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "engine-services",
    title: "Engine Services",
    description:
      "Complete engine overhaul, tuning, and performance enhancement services for all vehicle types.",
    projects: "Over 500 projects completed",
  },
  {
    slug: "transmission-drivetrain",
    title: "Transmission & Drivetrain",
    description:
      "Expert transmission repairs, replacements, and automatic/manual gearbox maintenance.",
    projects: "Over 300 projects completed",
  },
  {
    slug: "electrical-systems",
    title: "Electrical Systems",
    description:
      "Battery replacement, wiring repairs, starter motor service, and electrical diagnostics.",
    projects: "Over 400 projects completed",
  },
  {
    slug: "brake-systems",
    title: "Brake Systems",
    description:
      "Complete brake system service, pad replacement, rotor work, and hydraulic repairs.",
    projects: "Over 450 projects completed",
  },
  {
    slug: "suspension-steering",
    title: "Suspension & Steering",
    description:
      "Suspension upgrades, shock absorber service, alignment, and steering component repairs.",
    projects: "Over 350 projects completed",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    description:
      "AC system recharge, compressor repair, refrigerant handling, and climate control service.",
    projects: "Over 250 projects completed",
  },
];
