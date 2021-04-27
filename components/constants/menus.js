import { HomeOutlined, ToolOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

export const menus = [
    { link: '/admin/users', name: 'Users', icon: <UserOutlined />, role: 'ADMIN' },
    { link: '/admin/seo', name: 'SEO', icon: <ToolOutlined />, role: 'ADMIN' },
    { link: '/admin/topics', name: 'Topics', icon: <UnorderedListOutlined />, role: 'ADMIN' },

    { link: '/accounts/dashboard', name: 'Dashboard', icon: <HomeOutlined />, role: 'USER' },
    { link: '/accounts/profile', name: 'My Profile', icon: <UserOutlined />, role: 'USER' },
]