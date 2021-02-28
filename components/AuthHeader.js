import Link from 'next/link';
import { useContext } from 'react';
import UserContext from '../components/contexts/UserContext';

import { Layout, Input, Avatar, Badge, Dropdown } from 'antd';
import { Menu, } from 'antd';
const { Header } = Layout;
const { Search } = Input;
import { BellOutlined, DownOutlined } from '@ant-design/icons';
import { UserOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons';

const AuthHeader = () => {
    const { user, logOut } = useContext(UserContext);
    const menu = (
        <Menu style={{ minWidth: '150px' }}>
            <Menu.Item key="profile" icon={<UserOutlined />}><Link href="/profile"><a>Profile</a></Link></Menu.Item>
            <Menu.Item key="contact-us" icon={<MailOutlined />}><Link href="/contact-us"><a>Contact Us</a></Link></Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item key="logOut" icon={<LogoutOutlined />}><Link href="/"><a onClick={logOut}>Logout</a></Link></Menu.Item>
        </Menu>
    );
    return (
        <Header style={{ textAlign: 'center' }}>
            {/* <Search placeholder="input search text" style={{ width: 250, margin: '16px' }} /> */}
            <Dropdown overlay={menu} className="float-end" placement="bottomCenter">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <img src="/image/profile.png" height="40" style={{ margin: '12px' }} /> <DownOutlined />
                </a>
            </Dropdown>
            <div className="float-end" style={{ margin: '0 16px' }}>
                <Badge dot>
                    <Avatar icon={<BellOutlined />} size={32} style={{ color: '#ff4d4f', backgroundColor: '#f9f9f9' }} />
                </Badge>
            </div>
        </Header>
    )
};

export default AuthHeader;