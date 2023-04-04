import React, { useContext } from 'react'

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  Routes,
  Navigate,
} from "react-router-dom";

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { UiContext } from '../context/UiContext';


export const RouterPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { ocultarMenu } = useContext(UiContext);
  return (
      <Layout style={{ height: '100vh' }}>
        <Sider 
          collapsedWidth="0"
          breakpoint='md'
          hidden={ocultarMenu}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to='/ingresar'>Ingresar</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to='/cola'>Cola de tickets</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to='/crear'>Crear ticket</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path='/ingresar' element={ <Ingresar /> } />
              <Route path='/cola' element={ <Cola /> } />
              <Route path='/crear' element={ <CrearTicket /> } />
              <Route path='/escritorio' element={ <Escritorio /> } />

              <Route path='/*' element={ <Navigate to='/ingresar' /> }></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
  )
}
