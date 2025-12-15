import { getModule, getAllModules } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';

// Required for static export/build optimization if needed, but works for dynamic too
export function generateStaticParams() {
    return getAllModules().map((module) => ({
        slug: [module.id],
    }));
}

export default function ModulePage({ params }: { params: { slug: string[] } }) {
    // If we had [...slug], it would be an array. But I'll modify the folder structure to be docs/[moduleId]/page.tsx
    // Wait, I am writing to a dynamic route path?
    // Let's assume the folder structure is docs/[moduleId]/page.tsx

    const moduleId = params.slug[0];
    const moduleData = getModule(moduleId);

    if (!moduleData) {
        return notFound();
    }

    // Group topics by their 'group' property
    const topicsByGroup = moduleData.topics.reduce((acc, topic) => {
        const groupName = topic.group || 'Geral';
        if (!acc[groupName]) acc[groupName] = [];
        acc[groupName].push(topic);
        return acc;
    }, {} as Record<string, typeof moduleData.topics>);

    return (
        <div className="p-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Início
            </Link>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    {moduleData.icon}
                </div>
                <div>
                    <h1 className="text-3xl font-bold">{moduleData.title}</h1>
                    <p className="text-muted-foreground">{moduleData.description}</p>
                </div>
            </div>

            <div className="mt-8 space-y-10">
                {Object.entries(topicsByGroup).map(([groupName, topics]) => (
                    <div key={groupName}>
                        <h2 className="text-lg font-semibold flex items-center mb-4 text-muted-foreground border-b border-border/40 pb-2">
                            <Layers className="w-4 h-4 mr-2" />
                            {groupName}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {topics.map(topic => (
                                <Link
                                    key={topic.id}
                                    href={`/docs/${moduleData.id}/${topic.id}`} // We need to handle this route
                                    className="glass-card p-5 rounded-xl block group"
                                >
                                    <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                        {topic.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {topic.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
