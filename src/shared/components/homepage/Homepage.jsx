import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Modal, Tooltip, Collapse, Form, Input, InputNumber, Select, Button, Checkparcel } from 'antd';
import MaskedInput from 'antd-mask-input'
import path from 'path';

import { FaAngleRight, FaAngleDown, FaInfoCircle } from 'react-icons/fa'
import {
    clearPostOfficeStatus,
    getCurrentZipCode,
    hidePostOfficeAddress,
    calculaPrecoPrazo,
    hidePostOfficePrecoPrazo
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
        postOfficeSuccess,
        showPostOfficeAddress,
        postOfficeAddress,
        showPostOfficePrecoPrazo,
        postOfficePrecoPrazo
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
                <img
                    className="banner"
                    src={path.join(__dirname, './images/post-office-banner.png')}
                    alt="Post Office Banner - Roberson & Talita"
                />
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
                <Modal
                    visible={showPostOfficeAddress}
                    title="Resultado da consulta de CEP"
                    onCancel={() => dispatch(hidePostOfficeAddress())}
                    footer={[
                        <Button key="back" onClick={() => dispatch(hidePostOfficeAddress())}>Voltar</Button>,
                        <Button key="submit" type="primary" onClick={() => dispatch(hidePostOfficeAddress())}>Ok</Button>
                    ]}
                >
                    <div style={{ margin: "5px" }} align="center">
                        <div style={{ padding: "5px" }} align="left">
                            <span style={postOfficeAddress.cep ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>CEP: </b>{postOfficeAddress.cep}
                            </span>
                            <span style={postOfficeAddress.logradouro ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>Logradouro: </b>{postOfficeAddress.logradouro}
                            </span>
                            <span style={postOfficeAddress.complemento ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>Complemento: </b>{postOfficeAddress.complemento}
                            </span>
                            <span style={postOfficeAddress.bairro ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>Bairro: </b>{postOfficeAddress.bairro}
                            </span>
                            <span style={postOfficeAddress.localidade ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>Localidade: </b>{postOfficeAddress.localidade}
                            </span>
                            <span style={postOfficeAddress.uf ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>UF: </b>{postOfficeAddress.uf}
                            </span>
                            <hr />
                            <span style={postOfficeAddress.ddd ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>DDD <Tooltip title="DDD significa Discagem Direta à Distância. É um sistema de ligação telefônica automática entre diferentes áreas urbanas nacionais." >
                                    <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                </Tooltip>:</b> {postOfficeAddress.ddd}
                            </span>
                            <span style={postOfficeAddress.gia ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>GIA <Tooltip title="A Guia de Informação e Apuração do ICMS, ou apenas GIA, é uma declaração acessória obrigatória em alguns estados brasileiros e que contém a apresentação das informações sobre os valores apurados do ICMS pelas empresas, mensalmente." >
                                    <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                </Tooltip>:</b> {postOfficeAddress.gia}
                            </span>
                            <span style={postOfficeAddress.ibge ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>IBGE <Tooltip title="O campo que representa o código do IBGE da cidade, é muito utilizado em sistemas de automação comercial na hora de emitir uma Nota Fiscal Eletrônica (NF-e), situação em que você precisa informar o código da cidade além de sua descrição." >
                                    <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                </Tooltip>:</b> {postOfficeAddress.ibge}
                            </span>
                            <span style={postOfficeAddress.siafi ? { display: "block" } : { display: "block", color: "#545454" }}>
                                <b>SIAFI <Tooltip title="SIAFI é um sistema contábil que tem por finalidade realizar todo o processamento, controle e execução financeira, patrimonial e contábil do governo federal brasileiro." >
                                    <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                </Tooltip>:</b> {postOfficeAddress.siafi}
                            </span>
                        </div>
                    </div>
                </Modal>
                <Modal
                    visible={showPostOfficePrecoPrazo}
                    title="Resultado do calculo de prazo e preço"
                    onCancel={() => dispatch(hidePostOfficePrecoPrazo())}
                    footer={[
                        <Button key="back" onClick={() => dispatch(hidePostOfficePrecoPrazo())}>Voltar</Button>,
                        <Button key="submit" type="primary" onClick={() => dispatch(hidePostOfficePrecoPrazo())}>Ok</Button>
                    ]}
                >
                    <div style={{ margin: "5px" }} align="center">
                        {postOfficePrecoPrazo.length == 2 ?
                            <div style={{ padding: "5px" }} align="left">
                                <h2>Sedex</h2>
                                <span style={{ display: "block" }}>
                                    <b>Entrega domiciliar: </b>{postOfficePrecoPrazo[0].EntregaDomiciliar == "S" ? "Sim" : "Não"}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Entrega nos sábados: </b>{postOfficePrecoPrazo[0].EntregaSabado == "S" ? "Sim" : "Não"}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Prazo da entrega: </b>em até {postOfficePrecoPrazo[0].PrazoEntrega} dia(s)
                            </span>
                                <br />
                                <span style={{ display: "block", color: "green" }}>
                                    <b>Valor: </b>R$ {postOfficePrecoPrazo[0].Valor}
                                </span>
                                <br />
                                <span style={{ display: "block" }}>
                                    <b>Valor adicional: Aviso Recebimento <Tooltip title="Preço do serviço adicional Aviso de Recebimento. Físico: o cliente (remetente) recebe a comprovação da assinatura de quem recebeu o objeto através de formulário específico; Digital: o cliente recebe a imagem digitalizada do formulário de AR com os dados de entrega do objeto postado sob registro." >
                                        <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                    </Tooltip>:</b> R$ {postOfficePrecoPrazo[0].ValorAvisoRecebimento}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Valor adicional: Valor Declarado <Tooltip title="Preço do serviço adicional Valor Declarado. Você garante que o valor do seu objeto registrado seja indenizado no montante declarado em caso eventual de avaria ou extravio, proporcional ao dano (parcial ou total) do conteúdo." >
                                        <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                    </Tooltip>:</b> R$ {postOfficePrecoPrazo[0].ValorDeclarado}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Valor adicional: Mão Própria <Tooltip title="Preço do serviço adicional Mão Própria. O objeto somente será entregue ao destinatário indicado no endereçamento do objeto, seguindo os mesmos procedimentos de dispensa de assinatura do destinatário e com o preenchimento dos dados devidos pelo carteiro." >
                                        <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                    </Tooltip>:</b> R$ {postOfficePrecoPrazo[0].ValorMaoPropria}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Valor sem adicionais: </b>R$ {postOfficePrecoPrazo[0].ValorSemAdicionais}
                                </span>
                                <br />

                                <hr />

                                <br />
                                <h2>PAC</h2>
                                <span style={{ display: "block" }}>
                                    <b>Entrega domiciliar: </b>{postOfficePrecoPrazo[1].EntregaDomiciliar == "S" ? "Sim" : "Não"}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Entrega nos sábados: </b>{postOfficePrecoPrazo[1].EntregaSabado == "S" ? "Sim" : "Não"}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Prazo da entrega: </b>em até {postOfficePrecoPrazo[1].PrazoEntrega} dia(s)
                            </span>
                                <br />
                                <span style={{ display: "block", color: "green" }}>
                                    <b>Valor: </b>R$ {postOfficePrecoPrazo[1].Valor}
                                </span>
                                <br />
                                <span style={{ display: "block" }}>
                                    <b>Valor adicional: Aviso Recebimento <Tooltip title="Preço do serviço adicional Aviso de Recebimento. Físico: o cliente (remetente) recebe a comprovação da assinatura de quem recebeu o objeto através de formulário específico; Digital: o cliente recebe a imagem digitalizada do formulário de AR com os dados de entrega do objeto postado sob registro." >
                                        <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                    </Tooltip>:</b> R$ {postOfficePrecoPrazo[1].ValorAvisoRecebimento}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Valor adicional: Valor Declarado <Tooltip title="Preço do serviço adicional Valor Declarado. Você garante que o valor do seu objeto registrado seja indenizado no montante declarado em caso eventual de avaria ou extravio, proporcional ao dano (parcial ou total) do conteúdo." >
                                        <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                    </Tooltip>:</b> R$ {postOfficePrecoPrazo[1].ValorDeclarado}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Valor adicional: Mão Própria <Tooltip title="Preço do serviço adicional Mão Própria. O objeto somente será entregue ao destinatário indicado no endereçamento do objeto, seguindo os mesmos procedimentos de dispensa de assinatura do destinatário e com o preenchimento dos dados devidos pelo carteiro." >
                                        <FaInfoCircle style={{ color: "gray", fontSize: '0.8em' }} />
                                    </Tooltip>:</b> R$ {postOfficePrecoPrazo[1].ValorMaoPropria}
                                </span>
                                <span style={{ display: "block" }}>
                                    <b>Valor sem adicionais: </b>R$ {postOfficePrecoPrazo[1].ValorSemAdicionais}
                                </span>
                            </div>
                            : ''}
                    </div>
                </Modal>
            </Container>
        </>
    );
}



export default Homepage;