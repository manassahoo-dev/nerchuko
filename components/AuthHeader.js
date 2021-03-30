import { DownOutlined, LogoutOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Input, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useContext } from 'react';
import UserContext from '../components/contexts/UserContext';

const { Header } = Layout;

const AuthHeader = () => {
    const { user, logOut } = useContext(UserContext);
    const menu = (
        <Menu>
            <Menu.Item key="profile" icon={<UserOutlined />}><Link href="/profile"><a>Profile</a></Link></Menu.Item>
            <Menu.Item key="contact-us" icon={<MailOutlined />}><Link href="/contact-us"><a>Contact Us</a></Link></Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item key="logOut" icon={<LogoutOutlined />}><Link href="/"><a onClick={logOut}>Logout</a></Link></Menu.Item>
        </Menu>
    );
    return (
        <Header className="text-center">
            <Dropdown overlay={menu} className="float-right" placement="bottomCenter">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Avatar>A</Avatar>
                    <DownOutlined />
                </a>
            </Dropdown>
        </Header>
    )
};

export default AuthHeader;