import { projects, Project } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="p-16">
        <h1 className="text-3xl font-bold text-gray-100">Project not found</h1>
        <p className="text-gray-300">
          The project you are looking for does not exist.
        </p>
        <Link href="/projects" className="text-blue-400 hover:underline">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-transparent">
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-8">{project.description}</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-8 text-gray-300 neumorph-card p-6">
          <p>{project.details}</p>
        </div>
      </section>

      <section className="py-12 text-center">
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Back to all projects
        </Link>
      </section>
    </main>
  );
}
