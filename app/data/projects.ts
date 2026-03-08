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
      "https://images.unsplash.com/photo-1598327107402-02cdcf5972c5?auto=format&fit=crop&w=500&h=400",
    details:
      "We performed a complete engine overhaul, replacing worn components, upgrading timing chains, and tuning the system for better fuel economy and power.",
  },
  {
    slug: "transmission-repair",
    title: "Transmission Repair",
    description:
      "Diagnosed and repaired transmission issues to restore smooth shifting.",
    image:
      "https://images.unsplash.com/photo-1627787692754-5d7165e8931a?auto=format&fit=crop&w=500&h=400",
    details:
      "After extensive diagnostics, we replaced the clutch assembly and resealed the gearbox, resulting in a like-new driving experience.",
  },
  {
    slug: "brake-system-maintenance",
    title: "Brake System Maintenance",
    description: "Service including pad and rotor replacement.",
    image:
      "https://images.unsplash.com/photo-1614037860885-8d8d0dba8e21?auto=format&fit=crop&w=500&h=400",
    details:
      "Brake pads were replaced, rotors resurfaced, and hydraulic lines flushed to ensure optimal stopping power.",
  },
  {
    slug: "electrical-system-repair",
    title: "Electrical System Repair",
    description: "Troubleshot and fixed complex electrical faults.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&h=400",
    details:
      "Replaced faulty wiring harness, diagnosed alternator issues, and updated the vehicle’s computer for improved diagnostics.",
  },
  {
    slug: "suspension-work",
    title: "Suspension Work",
    description: "Upgraded shocks and alignment service.",
    image:
      "https://images.unsplash.com/photo-1566405869680-d6d7dedb050c?auto=format&fit=crop&w=500&h=400",
    details:
      "Installed new shock absorbers, realigned wheels, and strengthened sway bars for better handling.",
  },
];
