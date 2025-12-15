export interface Topic {
  id: string;
  title: string;
  description: string;
  group?: string;
  tags?: string[];
  content: string; // HTML content
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // Changed to ReactNode to support components directly
  topics: Topic[];
}
