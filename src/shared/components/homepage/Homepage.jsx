import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Modal, Collapse, Form, Input, InputNumber, Select, Button, Checkparcel } from 'antd';
import MaskedInput from 'antd-mask-input'

import { FaAngleRight, FaAngleDown, FaInfoCircle } from 'react-icons/fa'
import {
    clearPostOfficeStatus,
    getCurrentZipCode,
    calculaPrecoPrazo
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
        dispatch(
            getCurrentZipCode(values.cep)
        );
    }

    const orderTracking = (values) => {
        console.log(values)
    }


    const fetchPrecoPrazo = (values) => {
        console.log(values)
        dispatch(
            calculaPrecoPrazo(values)
        );
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
                    {/* <Collapse.Panel header="Realizar o rastreio de encomenda" key="2">
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
                    </Collapse.Panel> */}
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
                                            <Select.Option value="0.3" key='0.3'>0.3 kg</Select.Option>
                                            <Select.Option value="1" key="1">1 kg</Select.Option>
                                            <Select.Option value="2" key="2">2 kg</Select.Option>
                                            <Select.Option value="3" key="3">3 kg</Select.Option>
                                            <Select.Option value="4" key="4">4 kg</Select.Option>
                                            <Select.Option value="5" key="5">5 kg</Select.Option>
                                            <Select.Option value="6" key="6">6 kg</Select.Option>
                                            <Select.Option value="7" key="7">7 kg</Select.Option>
                                            <Select.Option value="8" key="8">8 kg</Select.Option>
                                            <Select.Option value="9" key="9">9 kg</Select.Option>
                                            <Select.Option value="10" key="10">10 kg</Select.Option>
                                            <Select.Option value="11" key="11">11 kg</Select.Option>
                                            <Select.Option value="12" key="12">12 kg</Select.Option>
                                            <Select.Option value="13" key="13">13 kg</Select.Option>
                                            <Select.Option value="14" key="14">14 kg</Select.Option>
                                            <Select.Option value="15" key="15">15 kg</Select.Option>
                                            <Select.Option value="16" key="16">16 kg</Select.Option>
                                            <Select.Option value="17" key="17">17 kg</Select.Option>
                                            <Select.Option value="18" key="18">18 kg</Select.Option>
                                            <Select.Option value="19" key="19">19 kg</Select.Option>
                                            <Select.Option value="20" key="20">20 kg</Select.Option>
                                            <Select.Option value="21" key="21">21 kg</Select.Option>
                                            <Select.Option value="22" key="22">22 kg</Select.Option>
                                            <Select.Option value="23" key="23">23 kg</Select.Option>
                                            <Select.Option value="24" key="24">24 kg</Select.Option>
                                            <Select.Option value="25" key="25">25 kg</Select.Option>
                                            <Select.Option value="26" key="26">26 kg</Select.Option>
                                            <Select.Option value="27" key="27">27 kg</Select.Option>
                                            <Select.Option value="28" key="28">28 kg</Select.Option>
                                            <Select.Option value="29" key="29">29 kg</Select.Option>
                                            <Select.Option value="30" key="30">30 kg</Select.Option>
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
                                            <Select.Option value="1" key='1'>Formato caixa/pacote</Select.Option>
                                            <Select.Option value="2" key='2'>Formato rolo/prisma</Select.Option>
                                            <Select.Option value="3" key='3'>Envelope</Select.Option>
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
                    {parcelOptions.map((option, index) => {
                        return (
                            <div style={{ margin: "5px", border: "1px dashed", backgroundColor: "white", color: "black" }} align="center" key={index}>
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