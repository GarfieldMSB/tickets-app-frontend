import React, { useContext, useState } from 'react'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import { Navigate, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const Escritorio = () => {

  const [usuario] = useState(getUsuarioStorage());

  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);

  const [ticket, setTicket] = useState(null);


  useHideMenu(false);

  const salir = () => {
    localStorage.clear();
    navigate('/ingresar');
  }

  const siguienteTicket = () => {
    socket.emit('siguiente-ticket-trabajar', usuario, (ticket) => {
      setTicket(ticket);
    });
  }

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to='/ingresar' />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align='right'>
          <Button
            danger
            type="primary"
            shape="round"
            onClick={salir}
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      {
        ticket && (
          <Row>
            <Col>
              <Text>Esta atendiendo el ticket numero: </Text>
              <Text style={{ fontSize: 30 }} type='danger'>{ticket.numero}</Text>
            </Col>
          </Row>
        )
      }

      <Row>
        <Col offset={18} span={6} align='right'>
          <Button
            onClick={siguienteTicket}
            type="primary"
            shape="round"
          >
            <RightOutlined />
            Siguiente</Button>
        </Col>
      </Row>
    </>
  )
}
