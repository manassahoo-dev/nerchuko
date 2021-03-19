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

    { link: '/dashboard', name: 'Dashboard', icon: <HomeOutlined />, role: 'USER' },
    { link: '/courses', name: 'My Courses', icon: <CodeOutlined />, role: 'USER' },
    { link: '/profile', name: 'My Profile', icon: <UserOutlined />, role: 'USER' },
    { link: '/contact-us', name: 'Contact Us', icon: <MailOutlined />, role: 'USER' },
    { link: '/invoice', name: 'My Invoice', icon: <FilePdfOutlined />, role: 'USER' },
]