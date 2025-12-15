import { getAllModules } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const modules = getAllModules();

  return (
    <div className="p-8 max-w-7xl mx-auto relative z-10">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
          Base de Conhecimento
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Navegue pelos módulos abaixo para encontrar documentação, guias e referências técnicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={`/docs/${module.id}`}
            className="group relative overflow-hidden rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 block"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <div className="scale-150 transform">{module.icon}</div>
            </div>

            <div className="relative z-10">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                {module.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {module.title}
              </h3>

              <p className="text-muted-foreground mb-6 line-clamp-2">
                {module.description}
              </p>

              <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                Acessar Módulo
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
