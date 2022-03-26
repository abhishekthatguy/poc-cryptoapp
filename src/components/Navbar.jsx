import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, UserOutlined, SettingOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';

const logoIcon = <img src="https://i.pinimg.com/564x/c3/39/d2/c339d276924d297fc6f5032ff7b59934.jpg" width={80} height={80}/>;

const Navbar = () => {
  return (
      <div className="nav-container">
          <div className='logo-container'>
              <Avatar src={logoIcon} size="large" className='company-logo'/>
              <Typography.Title level={2} className="logo ">
                  <Link to="/">{"<Crypto-App/>"}</Link>
                  {/* <Button className='menu-control-container'></Button> */}
              </Typography.Title>
               </div>
              <Menu theme="light">
                  <Menu.Item icon={<HomeOutlined />} >
                      <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item icon={<FundOutlined />} >
                      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                  </Menu.Item>
                  <Menu.Item icon={<MoneyCollectOutlined />} >
                      <Link to="/exchange">Exchange</Link>
                  </Menu.Item>
                  <Menu.Item icon={<BulbOutlined />} >
                      <Link to="/news">News</Link>
                  </Menu.Item>

              </Menu>
         
    </div>
  )
}

export default Navbar