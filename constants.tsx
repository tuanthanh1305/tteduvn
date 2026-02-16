
import { Course, CourseCategory, Service, TeamMember, Language, ForumPost } from './types';

export const COMMUNITY_URL = 'https://www.facebook.com/groups/985454792560891';
export const GIFT_LINK = 'https://www.facebook.com/TranTuanThanh1305';
export const FOUNDER_IMAGE = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaV7aoxvlavfh9Gm_AgU7Lc7an6Q5wBW46yxqijWuT1EDorpHmsJnrhjy5qyFzWpD-aLKyraRYJz29de8tEehzIGFzdHRvJw2Cb27So7Usg0Tx4HdaGcnaHoZ-k2_bimo4wbvkQ3mqwxpHvWYSaC8y0xNP2H63Lr10-836FxFDKSj_fVbB4GuqLeeIeY0/s1200/627252633_10163437696303080_5107776064495840363_n.jpg';

export const TRANSLATIONS = {
  vi: {
    heroTitle: "Kiến tạo Tương lai số",
    heroDesc: "TT International Digital Knowledge Center - Nơi hội tụ và sẻ chia tri thức công nghệ chuẩn quốc tế. TT.EDU.VN hân hạnh là cầu nối đưa tri thức Công nghệ số tiên tiến đến gần hơn với thế hệ trẻ và doanh nghiệp Việt Nam.",
    navHome: "Trang chủ",
    navTraining: "Đào tạo",
    navServices: "Giải pháp",
    navAbout: "Giới thiệu",
    navCommunity: "Cộng đồng",
    navBlog: "Tin tức",
    login: "Đăng nhập",
    trainingHeading: "Quà tặng Tri thức Tết Bính Ngọ 2026",
    trainingSubheading: "Nhân dịp Tết Bính Ngọ 2026, TT.EDU.VN quyết định mở cửa hoàn toàn MIỄN PHÍ toàn bộ các khóa học để lan tỏa tri thức số đến mọi nhà.",
    teamHeading: "Người đồng hành",
    teamSubheading: "Dẫn dắt bởi Trần Tuấn Thành cùng các cộng sự tâm huyết, TT.EDU.VN luôn đặt sự khiêm nhường và tiến bộ của người học lên hàng đầu.",
    communityFocus: "Ưu tiên Cộng đồng",
    communityDesc: "TT.EDU.VN nguyện dành 30% tài nguyên để phổ cập tri thức số hoàn toàn miễn phí, góp phần nhỏ bé vào sự phát triển bền vững của xã hội số.",
    registerNow: "Nhận lì xì tri thức",
    learnMore: "Tìm hiểu thêm",
    contactUs: "Liên hệ tư vấn",
    statsMembers: "Học viên",
    statsProjects: "Giải pháp số",
    statsRating: "Sự tin cậy",
    phone: "0789109941",
    email: "contact@tt.edu.vn"
  },
  en: {
    heroTitle: "Building Digital Future",
    heroDesc: "TT International Digital Knowledge Center - A hub for international tech knowledge. TT.EDU.VN bridges the gap between advanced digital knowledge and Vietnam's community.",
    navHome: "Home",
    navTraining: "Training",
    navServices: "Solutions",
    navAbout: "About",
    navCommunity: "Community",
    navBlog: "News",
    login: "Sign In",
    trainingHeading: "Lunar New Year 2026 Gift",
    trainingSubheading: "On the occasion of Year of the Horse 2026, TT.EDU.VN offers ALL courses for FREE to spread digital literacy.",
    teamHeading: "Our Mentors",
    teamSubheading: "Led by Tran Tuan Thanh and dedicated associates, prioritizing modesty and progress.",
    communityFocus: "Community First",
    communityDesc: "TT.EDU.VN commits 30% of resources to free digital education.",
    registerNow: "Claim Your Gift",
    learnMore: "Explore More",
    contactUs: "Contact Us",
    statsMembers: "Students",
    statsProjects: "Solutions",
    statsRating: "Reliability",
    phone: "0789109941",
    email: "contact@tt.edu.vn"
  }
};

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Trần Tuấn Thành',
    role: { 
      vi: 'Founder & Giảng viên Chuyên gia Blockchain & AI', 
      en: 'Founder, Blockchain & AI Expert Faculty' 
    },
    bio: { 
      vi: `Ông Trần Tuấn Thành là giảng viên và chuyên gia trong lĩnh vực Blockchain và Trí tuệ nhân tạo. Đặc biệt, ông Trần Tuấn Thành là Giảng viên đầu tiên theo chứng chỉ chức danh nghề nghiệp của Bộ Giáo dục & Đào tạo tại đơn vị chuyên trách về Blockchain và Trí tuệ nhân tạo ở Việt Nam. Ông hiện là giảng viên cơ hữu Viện ABAII, Co-Founder & CEO IMTA TECH.`, 
      en: `Mr. Tran Tuan Thanh is the first lecturer with a professional title certificate from the Ministry of Education & Training at a specialized Blockchain and AI unit in Vietnam.` 
    },
    image: FOUNDER_IMAGE,
    type: 'Chuyên gia'
  }
];

export const INITIAL_COURSES: Course[] = [
  // CƠ BẢN
  {
    id: 'digital-literacy',
    title: { vi: 'Năng lực số cho Mầm non & Tiểu học', en: 'Early Digital Literacy' },
    category: CourseCategory.PROGRAMMING_K12,
    description: { vi: 'Xây dựng nền tảng tư duy máy tính và sử dụng công nghệ an toàn ngay từ khi còn nhỏ.', en: 'Building computational thinking and safe tech usage for young kids.' },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Tư duy máy tính', 'An toàn Internet', 'Sáng tạo số'], en: ['Computational Thinking', 'Internet Safety', 'Digital Creativity'] },
    targetAudience: { vi: 'Học sinh 5-8 tuổi', en: 'Ages 5-8' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '2.500.000 VNĐ',
    duration: { vi: '8 buổi', en: '8 sessions' },
    level: 'Cơ bản'
  },
  {
    id: 'scratch-k12',
    title: { vi: 'Lập trình Scratch: Kiến tạo Thế giới', en: 'Scratch Programming' },
    category: CourseCategory.PROGRAMMING_K12,
    description: { vi: 'Khởi đầu tư duy lập trình thông qua ngôn ngữ kéo thả Scratch chuẩn quốc tế.', en: 'Start programming via Scratch.' },
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Logic cơ bản', 'Lập trình Game', 'Dự án hoạt hình'], en: ['Basic Logic', 'Game Dev', 'Animation'] },
    targetAudience: { vi: 'Học sinh 8-12 tuổi', en: 'Ages 8-12' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '3.500.000 VNĐ',
    duration: { vi: '10 buổi', en: '10 sessions' },
    level: 'Cơ bản'
  },
  {
    id: 'python-kids',
    title: { vi: 'Python cho Thiếu nhi: Từ số 0 đến 1', en: 'Python for Kids' },
    category: CourseCategory.PROGRAMMING_K12,
    description: { vi: 'Ngôn ngữ lập trình phổ biến nhất thế giới được tối giản cho trẻ em.', en: 'The world\'s most popular language simplified for kids.' },
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Cấu trúc Python', 'Giải thuật cơ bản', 'Ứng dụng thực tế'], en: ['Python Syntax', 'Basic Algorithms', 'Real-world Apps'] },
    targetAudience: { vi: 'Học sinh 12-16 tuổi', en: 'Ages 12-16' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '4.500.000 VNĐ',
    duration: { vi: '12 buổi', en: '12 sessions' },
    level: 'Cơ bản'
  },
  // TRUNG CẤP & THI ĐẤU
  {
    id: 'young-it-exam',
    title: { vi: 'Luyện thi Tin học trẻ & Thuật toán', en: 'Youth IT Contest Prep' },
    category: CourseCategory.EXAM_PREP,
    description: { vi: 'Chương trình đào tạo thuật toán chuyên sâu cho các kỳ thi Tin học trẻ quốc gia.', en: 'Algorithms training for national IT contests.' },
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Thuật toán Pascal/C++', 'Cấu trúc dữ liệu', 'Luyện đề thi'], en: ['Pascal/C++', 'Data Structures', 'Exam Prep'] },
    targetAudience: { vi: 'Học sinh tiểu học & THCS', en: 'Primary & Secondary' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '5.200.000 VNĐ',
    duration: { vi: '16 buổi', en: '16 sessions' },
    level: 'Chuyên sâu'
  },
  {
    id: 'robotics-vex',
    title: { vi: 'Chế tạo Robotics VEX IQ/EDR', en: 'Robotics VEX IQ/EDR' },
    category: CourseCategory.ROBOTICS,
    description: { vi: 'Lắp ráp và lập trình Robot tham gia các giải vô địch Robotics toàn cầu.', en: 'Build and program robots for global championships.' },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Cơ cấu máy', 'Lập trình C++ Robotics', 'Chiến thuật thi đấu'], en: ['Mechanics', 'C++ Robotics', 'Match Strategy'] },
    targetAudience: { vi: 'Học sinh 10-18 tuổi', en: 'Ages 10-18' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '6.500.000 VNĐ',
    duration: { vi: '12 buổi', en: '12 sessions' },
    level: 'Trung cấp'
  },
  // CHUYÊN SÂU & DOANH NGHIỆP
  {
    id: 'vibe-coding-ai',
    title: { vi: 'Vibe Coding: Lập trình kỷ nguyên AI', en: 'Vibe Coding with AI' },
    category: CourseCategory.AI_BLOCKCHAIN,
    description: { vi: 'Lập trình hiện đại kết hợp AI để tạo ứng dụng Fullstack siêu tốc.', en: 'Modern coding with AI to build Fullstack apps fast.' },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Prompt Engineering', 'AI Coding Tools', 'Product Deployment'], en: ['Prompt Eng', 'AI Tools', 'Deployment'] },
    targetAudience: { vi: 'Sinh viên & Devs', en: 'Students & Devs' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '7.800.000 VNĐ',
    duration: { vi: '12 buổi', en: '12 sessions' },
    level: 'Trung cấp'
  },
  {
    id: 'blockchain-dev',
    title: { vi: 'Lập trình Blockchain & Smart Contract', en: 'Blockchain & Smart Contract' },
    category: CourseCategory.AI_BLOCKCHAIN,
    description: { vi: 'Xây dựng ứng dụng phi tập trung (dApps) trên nền tảng Ethereum & Solidity.', en: 'Build dApps on Ethereum & Solidity.' },
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['Solidity Core', 'Web3 Integration', 'Smart Contract Security'], en: ['Solidity', 'Web3', 'Security'] },
    targetAudience: { vi: 'Lập trình viên chuyên nghiệp', en: 'Professional Devs' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '12.000.000 VNĐ',
    duration: { vi: '20 buổi', en: '20 sessions' },
    level: 'Chuyên sâu'
  },
  {
    id: 'ai-enterprise',
    title: { vi: 'AI cho Quản lý & Lãnh đạo', en: 'AI for Managers' },
    category: CourseCategory.AI_BLOCKCHAIN,
    description: { vi: 'Ứng dụng AI tạo sinh để tối ưu hóa hiệu suất và quy trình doanh nghiệp.', en: 'Apply GenAI to optimize business performance.' },
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=800&auto=format&fit=crop',
    roadmap: { vi: ['AI Strategy', 'Automation Tools', 'AI Policy'], en: ['AI Strategy', 'Automation', 'Policy'] },
    targetAudience: { vi: 'Quản lý doanh nghiệp', en: 'Managers' },
    fee: '0 VNĐ (Tết 2026)',
    originalFee: '8.500.000 VNĐ',
    duration: { vi: '10 buổi', en: '10 sessions' },
    level: 'Chuyên sâu'
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: 's1',
    title: { vi: 'AI Nội bộ (Offline/Local)', en: 'Private & Local AI' },
    description: { vi: 'Triển khai mô hình ngôn ngữ lớn trên hạ tầng nội bộ, đảm bảo bảo mật dữ liệu tuyệt đối.', en: 'Deploy LLMs locally for absolute data security.' },
    target: 'Doanh nghiệp',
    icon: 'Lock'
  },
  {
    id: 's2',
    title: { vi: 'Nền tảng AI Online', en: 'AI Online Platforms' },
    description: { vi: 'Xây dựng các hệ thống AI Cloud phục vụ kinh doanh và vận hành thông minh.', en: 'Build Cloud AI systems for smart operations.' },
    target: 'Doanh nghiệp',
    icon: 'Globe'
  },
  {
    id: 's3',
    title: { vi: 'Giải pháp Blockchain', en: 'Blockchain Solutions' },
    description: { vi: 'Phát triển Smart Contracts và ứng dụng phi tập trung minh bạch.', en: 'Develop transparent Smart Contracts and dApps.' },
    target: 'Tổ chức',
    icon: 'Network'
  }
];

export const SERVICES = INITIAL_SERVICES;
export const TEAM = INITIAL_TEAM;
export const COURSES = INITIAL_COURSES;
export const FORUM_THREADS: ForumPost[] = [
  { id: 'f1', title: 'Lộ trình học AI cho người mới bắt đầu', author: 'Trần Tuấn Thành', category: 'AI', replies: 12, views: 340, lastUpdate: '1 giờ trước' }
];
