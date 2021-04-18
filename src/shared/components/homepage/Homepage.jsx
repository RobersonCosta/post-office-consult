import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Modal, Collapse, Form, Input, InputNumber, Select, Button, Checkparcel } from 'antd';
import MaskedInput from 'antd-mask-input'

import { FaAngleRight, FaAngleDown, FaInfoCircle } from 'react-icons/fa'
import {
    clearPostOfficeStatus
} from '@web/redux/postOffice/actions';
import { pushNotification, popNotification } from '@web/redux/notifications/actions';
import notify from '@web/components/common/Notification';
import {
    Container,
} from './Homepage.styles';


const Homepage = () => {
    const dispatch = useDispatch();

    const {
        notificationsQueue
    } = useSelector(state => state.Notifications)

    const {
        postOfficeError,
        postOfficeSuccess
    } = useSelector(state => state.PostOffice);

    const showNotification = useCallback((notification) => {
        notify(
            notification.type,
            notification.title,
            notification.text
        );
        dispatch(popNotification());
    });

    useEffect(() => {
        if (notificationsQueue.length > 0)
            showNotification(notificationsQueue[0]);
        if (postOfficeError.status === true) handleError();
        if (postOfficeSuccess.status === true) handleSuccess();
    }, [dispatch, postOfficeError, postOfficeSuccess, notificationsQueue,])


    const handleError = useCallback(() => {
        dispatch(
            pushNotification(
                'error',
                postOfficeError.message,
                ''
            )
        );
        dispatch(
            clearPostOfficeStatus()
        );
    })

    const handleSuccess = useCallback(() => {
        dispatch(
            pushNotification(
                'success',
                postOfficeSuccess.message,
                ''
            )
        );
        dispatch(
            clearPostOfficeStatus()
        );
    })

    const [parcelOptionsModal, setParcelOptionsModal] = useState(false);
    const fetchPrecoPrazoForm = React.useRef()


    const handleChangeType = (option) => {
        fetchPrecoPrazoForm.current.setFieldsValue({
            nCdFormato: option.formato,
            nVlAltura: option.altura,
            nVlLargura: option.largura,
            nVlComprimento: option.comprimento
        });
        setParcelOptionsModal(false)
    }

    const consultZipCode = (values) => {
        console.log(values)
    }

    const orderTracking = (values) => {
        console.log(values)
    }


    const fetchPrecoPrazo = (values) => {
        console.log(values)
    }



    const parcelOptions = [
        {
            url: "http://www2.correios.com.br/sistemas/precosprazos/img/tipo_1.png",
            nome: "Caixa de Encomenda Correios - Tipo 1",
            largura: "18",
            comprimento: "13.5",
            altura: "9",
            formato: "1"
        },
        {
            url: "http://www2.correios.com.br/sistemas/precosprazos/img/tipo_2.png",
            nome: "Caixa de Encomenda Correios - Tipo 2",
            largura: "27",
            comprimento: "18",
            altura: "9",
            formato: "1"
        },
        {
            url: "http://www2.correios.com.br/sistemas/precosprazos/img/tipo_3.png",
            nome: "Caixa de Encomenda Correios - Tipo 3",
            largura: "36",
            comprimento: "27",
            altura: "18",
            formato: "1"
        },
        {
            url: "http://www2.correios.com.br/sistemas/precosprazos/img/tipo_5.png",
            nome: "Caixa de Encomenda Correios - Tipo 5",
            largura: "54",
            comprimento: "36",
            altura: "27",
            formato: "1"
        },
        {
            url: "http://www2.correios.com.br/sistemas/precosprazos/img/tipo_6.png",
            nome: "Caixa de Encomenda Correios - Tipo 6",
            largura: "36",
            comprimento: "27",
            altura: "27",
            formato: "1"
        },
        {
            url: "http://www2.correios.com.br/sistemas/precosprazos/img/tipo_7.png",
            nome: "Caixa de Encomenda Correios - Tipo 7",
            largura: "36",
            comprimento: "28",
            altura: "4",
            formato: "1"
        },
    ]


    return (
        <>
            <Container>
                <Collapse
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => isActive ? <FaAngleDown /> : <FaAngleRight />}
                    className="main-collapse"
                >
                    <Collapse.Panel header="Consultar CEP" key="1">
                        <div align="center">
                            <Form
                                name="consultZipCode"
                                onFinish={consultZipCode}
                            >
                                <Form.Item
                                    label="CEP"
                                    name="cep"
                                    rules={[{ required: true, message: 'Por favor insira o CEP!' }]}
                                >
                                    <MaskedInput mask="11111-111" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">Consultar</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel header="Realizar o rastreio de encomenda" key="2">
                        <div align="center">
                            <Form
                                name="orderTracking"
                                onFinish={orderTracking}
                            >
                                <Form.Item
                                    label="Código de rastreio"
                                    name="trackingCode"
                                    rules={[{ required: true, message: 'Por favor insira o código de rastreio!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">Rastrear encomenda</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel header="Calcular preço e prazo de determinada encomenda" key="3">
                        <div align="center">
                            <Form
                                name="fetchPrecoPrazo"
                                onFinish={fetchPrecoPrazo}
                                ref={fetchPrecoPrazoForm}
                            >
                                <>
                                    <span>Remetente e Destinarário</span>
                                    <hr /><br />
                                    <Form.Item
                                        label="CEP de origem"
                                        name="sCepOrigem"
                                        rules={[{ required: true, message: 'Por favor insira o CEP de origem!' }]}
                                    >
                                        <MaskedInput mask="11111-111" />
                                    </Form.Item>
                                    <Form.Item
                                        label="CEP de destino"
                                        name="sCepDestino"
                                        rules={[{ required: true, message: 'Por favor insira o CEP de destino!' }]}
                                    >
                                        <MaskedInput mask="11111-111" />
                                    </Form.Item>
                                </>
                                <>
                                    <span>Encomenda</span>
                                    <hr /><br />
                                    <Button type="dashed" onClick={() => setParcelOptionsModal(true)}>Selecionar tipo de encomenda</Button><br /><br />
                                    <Form.Item
                                        label="Altura (cm)"
                                        name="nVlAltura"
                                        tooltip={{
                                            title: "Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0).",
                                            icon: <FaInfoCircle />
                                        }}
                                        rules={[{ required: true, message: 'Por favor insira o altura (cm)!' }]}
                                    >
                                        <InputNumber min={0} style={{ width: "100%" }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Largura (cm)"
                                        name="nVlLargura"
                                        tooltip={{
                                            title: "Largura da encomenda (incluindo embalagem), em centímetros.",
                                            icon: <FaInfoCircle />
                                        }}
                                        rules={[{ required: true, message: 'Por favor insira o largura (cm)!' }]}
                                    >
                                        <InputNumber min={0} style={{ width: "100%" }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Comprimento (cm)"
                                        name="nVlComprimento"
                                        tooltip={{
                                            title: "Comprimento da encomenda (incluindo embalagem), em centímetros.",
                                            icon: <FaInfoCircle />
                                        }}
                                        rules={[{ required: true, message: 'Por favor insira o comprimento (cm)!' }]}
                                    >
                                        <InputNumber min={0} style={{ width: "100%" }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Peso estimado (kg)"
                                        name="nVlPeso"
                                        tooltip={{
                                            title: "Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg.",
                                            icon: <FaInfoCircle />
                                        }}
                                        rules={[{ required: true, message: 'Por favor insira o peso estimado (kg)!' }]}
                                    >
                                        <Select required placeholder="Selecione o peso estimado (kg)">
                                            <Option value="0.3">0.3 kg</Option>
                                            <Option value="1">1 kg</Option>
                                            <Option value="2">2 kg</Option>
                                            <Option value="3">3 kg</Option>
                                            <Option value="4">4 kg</Option>
                                            <Option value="5">5 kg</Option>
                                            <Option value="6">6 kg</Option>
                                            <Option value="7">7 kg</Option>
                                            <Option value="8">8 kg</Option>
                                            <Option value="9">9 kg</Option>
                                            <Option value="10">10 kg</Option>
                                            <Option value="11">11 kg</Option>
                                            <Option value="12">12 kg</Option>
                                            <Option value="13">13 kg</Option>
                                            <Option value="14">14 kg</Option>
                                            <Option value="15">15 kg</Option>
                                            <Option value="16">16 kg</Option>
                                            <Option value="17">17 kg</Option>
                                            <Option value="18">18 kg</Option>
                                            <Option value="19">19 kg</Option>
                                            <Option value="20">20 kg</Option>
                                            <Option value="21">21 kg</Option>
                                            <Option value="22">22 kg</Option>
                                            <Option value="23">23 kg</Option>
                                            <Option value="24">24 kg</Option>
                                            <Option value="25">25 kg</Option>
                                            <Option value="26">26 kg</Option>
                                            <Option value="27">27 kg</Option>
                                            <Option value="28">28 kg</Option>
                                            <Option value="29">29 kg</Option>
                                            <Option value="30">30 kg</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="Formato"
                                        name="nCdFormato"
                                        tooltip={{
                                            title: "Formato da encomenda (incluindo embalagem).",
                                            icon: <FaInfoCircle />
                                        }}
                                        rules={[{ required: true, message: 'Por favor insira o formato!' }]}
                                    >
                                        <Select required placeholder="Selecione o formato">
                                            <Option value="1">Formato caixa/pacote</Option>
                                            <Option value="2">Formato rolo/prisma</Option>
                                            <Option value="3">Envelope</Option>
                                        </Select>
                                    </Form.Item>
                                </>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">Calcular</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Collapse.Panel>
                </Collapse>
                <Modal
                    visible={parcelOptionsModal}
                    title="Selecionar tipo de encomenda"
                    onCancel={() => setParcelOptionsModal(false)}
                    footer={[
                        <Button key="back" onClick={() => setParcelOptionsModal(false)}>Voltar</Button>,
                        <Button key="submit" type="primary" onClick={() => setParcelOptionsModal(false)}>Ok</Button>
                    ]}
                >
                    {parcelOptions.map(option => {
                        return (
                            <div style={{ margin: "5px", border: "1px dashed", backgroundColor: "white", color: "black" }} align="center">
                                <div style={{ display: "inline-block" }}>
                                    <img src={option.url} style={{ width: "auto", maxHeight: "120px" }} />
                                </div>
                                <div style={{ display: "inline-block", paddingLeft: "25px", paddingTop: "15px" }} >
                                    <span style={{ display: "block" }}>{option.nome}</span>
                                    <span style={{ display: "block" }}><b>Dimensões (LxCxA):</b> {option.largura} x {option.comprimento} x {option.altura} cm</span>
                                    <Button key="submit" type="primary" onClick={() => handleChangeType(option)} style={{ marginTop: "10px" }}>Selecionar esse tipo</Button>
                                </div>
                            </div>
                        )
                    })}
                </Modal>
            </Container>
        </>
    );
}



export default Homepage;