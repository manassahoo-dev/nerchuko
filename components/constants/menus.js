import {
    CodeOutlined, FileImageOutlined,
    FilePdfOutlined, HomeOutlined,
    MailOutlined,
    QuestionOutlined, ReadOutlined, UnorderedListOutlined, UserOutlined, VideoCameraOutlined
} from '@ant-design/icons';

export const menus = [
    { link: '/admin/banners', name: 'Banners', icon: <FileImageOutlined />, role: 'ADMIN' },
    { link: '/admin/courses', name: 'courses', icon: <CodeOutlined />, role: 'ADMIN' },
    { link: '/admin/new-batches', name: 'New Batches', icon: <UnorderedListOutlined />, role: 'ADMIN' },
    { link: '/admin/videos', name: 'videos', icon: <VideoCameraOutlined />, role: 'ADMIN' },
    { link: '/admin/blog', name: 'Blog', icon: <ReadOutlined />, role: 'ADMIN' },
    { link: '/admin/users', name: 'Users', icon: <UserOutlined />, role: 'ADMIN' },
    { link: '/admin/quiz', name: 'Quiz', icon: <QuestionOutlined />, role: 'ADMIN' },
    { link: '/admin/images', name: 'Login Images', icon: <FileImageOutlined /> },

    { link: '/accounts/dashboard', name: 'Dashboard', icon: <HomeOutlined />, role: 'USER' },
    { link: '/accounts/profile', name: 'My Profile', icon: <UserOutlined />, role: 'USER' },
]