'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  _id: string;
  title: string;
  slug: string;
  imageUrl: string;
};

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
        >
          <Link href={`/projeto/${project.slug}`} className="group block h-full w-full">
            <div className="flex flex-col cursor-pointer bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image 
                  src={project.imageUrl || '/placeholder.jpg'} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Text Area */}
              <div className="p-8 md:p-10 flex justify-center items-center flex-grow bg-white">
                <h3 className="text-verde-claro-1 font-serif text-xl md:text-2xl tracking-widest uppercase text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
