export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  details: string;
}

export const projects: Project[] = [
  {
    slug: "complete-engine-overhaul",
    title: "Complete Engine Overhaul",
    description: "Full engine rebuild with high performance tuning.",
    image:
      "https://images.unsplash.com/photo-1486262715619-3417ca56c475?auto=format&fit=crop&w=500&h=400",
    details:
      "We performed a complete engine overhaul, replacing worn components, upgrading timing chains, and tuning the system for better fuel economy and power.",
  },
  {
    slug: "transmission-repair",
    title: "Transmission Repair",
    description:
      "Diagnosed and repaired transmission issues to restore smooth shifting.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&h=400",
    details:
      "After extensive diagnostics, we replaced the clutch assembly and resealed the gearbox, resulting in a like-new driving experience.",
  },
  {
    slug: "brake-system-maintenance",
    title: "Brake System Maintenance",
    description: "Service including pad and rotor replacement.",
    image:
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&w=500&h=400",
    details:
      "Brake pads were replaced, rotors resurfaced, and hydraulic lines flushed to ensure optimal stopping power.",
  },
  {
    slug: "electrical-system-repair",
    title: "Electrical System Repair",
    description: "Troubleshot and fixed complex electrical faults.",
    image:
      "https://images.unsplash.com/photo-1515665855100-2d5c7e813b9c?auto=format&fit=crop&w=500&h=400",
    details:
      "Replaced faulty wiring harness, diagnosed alternator issues, and updated the vehicle’s computer for improved diagnostics.",
  },
  {
    slug: "suspension-work",
    title: "Suspension Work",
    description: "Upgraded shocks and alignment service.",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=500&h=400",
    details:
      "Installed new shock absorbers, realigned wheels, and strengthened sway bars for better handling.",
  },
];
