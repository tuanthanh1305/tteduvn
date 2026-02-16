
export type Language = 'vi' | 'en';
export type Theme = 'light' | 'dark';

export enum CourseCategory {
  PROGRAMMING_K12 = 'Lập trình K12',
  ROBOTICS = 'Robotics & IoT',
  AI_BLOCKCHAIN = 'AI & Blockchain',
  EXAM_PREP = 'Luyện thi & Chuyên sâu',
  FREE = 'Khóa học Cộng đồng'
}

export interface Course {
  id: string;
  title: Record<Language, string>;
  category: CourseCategory;
  description: Record<Language, string>;
  image: string;
  roadmap: Record<Language, string[]>;
  targetAudience: Record<Language, string>;
  fee: string;
  originalFee?: string; // Giá gốc để gạch đi
  duration: Record<Language, string>;
  level: 'Cơ bản' | 'Trung cấp' | 'Chuyên sâu';
}

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  image: string;
  type: 'Giảng viên' | 'Chuyên gia' | 'Cố vấn';
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastUpdate: string;
}

export interface BlogPost {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  target: 'Cá nhân' | 'Doanh nghiệp' | 'Tổ chức';
  icon: string;
}

export interface SiteSettings {
  heroTitle: Record<Language, string>;
  heroDesc: Record<Language, string>;
  slogan: Record<Language, string>;
}
