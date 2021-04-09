import {
    CodeOutlined, FileImageOutlined,
    FilePdfOutlined, HomeOutlined,
    MailOutlined,
    QuestionOutlined, ReadOutlined, UnorderedListOutlined, UserOutlined, VideoCameraOutlined
} from '@ant-design/icons';

export const menus = [
    { link: '/admin/users', name: 'Users', icon: <UserOutlined />, role: 'ADMIN' },

    { link: '/accounts/dashboard', name: 'Dashboard', icon: <HomeOutlined />, role: 'USER' },
    { link: '/accounts/profile', name: 'My Profile', icon: <UserOutlined />, role: 'USER' },
]