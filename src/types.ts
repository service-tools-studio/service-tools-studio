
type ProjectCategory = 'custom' | 'structured' | 'one-pager';

export type Project = {
  slug?: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  liveUrl: string;
  previewTitle: string;
  description: string[];
  pills: string[];
  overview?: string;
};