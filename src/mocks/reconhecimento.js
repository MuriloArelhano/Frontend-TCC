const reconhecimento = {
    initials: 'REC',
    content: {
        plataforma_e_produtos: {
            initials: 'PEP',
            content: {
                objetivo: {
                    initials: 'OB',
                    content: [
                        {
                            id: 'REC_PEP_OB_01',
                            text: '1. Fornecer informações e recursos que apoiem as metas de uma organização em relação à produtividade'
                        },
                        {
                            id: 'REC_PEP_OB_02',
                            text: '2. Fornecer informações e recursos que apoiem as metas de uma organização em relação à criação de nicho'
                        },
                        {
                            id: 'REC_PEP_OB_03',
                            text: '3. Fornecer informações e recursos que apoiem as metas de uma organização em relação à qualidade das contribuições'
                        }
                    ]
                },

                componente: {
                    initials: 'COMP',
                    content: [
                        {
                            id: 'REC_PEP_COMP_01',
                            text: '1. Plataforma'
                        },
                        {
                            id: 'REC_PEP_COMP_02',
                            text: '2. Infraestrutura'
                        },
                        {
                            id: 'REC_PEP_COMP_03',
                            text: '3. Orçamento'
                        },
                        {
                            id: 'REC_PEP_COMP_04',
                            text: '4. Produtos (ex: APIs, SKDs, IDEs)'
                        },
                        {
                            id: 'REC_PEP_COMP_05',
                            text: '5. Serviços'
                        }
                    ]
                },

                objetos_de_transferencia_de_valor_consome_de: {
                    initials: 'OTVC',
                    content: {
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_01',
                                    text: '1. Credibilidade dos profissionais de DevRel'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_02',
                                    text: '2. Recursos desejados por desenvolvedores'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_03',
                                    text: '3. Conscientização sobre produtos'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_04',
                                    text: '4. Articulador do fluxo de informação'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_05',
                                    text: '5. Área da estrutura organizacional'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_06',
                                    text: '6. Concentração em custos'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_07',
                                    text: '7. Maturidade da organização'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_08',
                                    text: '8. Serviços'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_09',
                                    text: '9. Produtos complementares'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBDEV_10',
                                    text: '10. Inovações'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_PEP_OTVC_SUBFLX_01',
                                    text: '1. Probabilidade de recomendação'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBFLX_02',
                                    text: '2. Receita por meio de serviços'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBFLX_03',
                                    text: '3. Reconhecimento da marca'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBFLX_04',
                                    text: '4. Investimento financeiro dos desenvolvedores'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'REC_PEP_OTVC_SUBMTO_01',
                                    text: '1. Escala e tamanho das comunidades'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBMTO_02',
                                    text: '2. Reconhecimento da marca'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBMTO_03',
                                    text: '3. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'REC_PEP_OTVC_SUBMTO_04',
                                    text: '4. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        }
                    }
                },

                objetos_de_transferencia_de_valor_prove_para: {
                    initials: 'OTVP',
                    content: {
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'REC_PEP_OTVP_SUBDEV_01',
                                    text: '1. Programas de acesso'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBDEV_02',
                                    text: '2. Informações precisas sobre o roadmap'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBDEV_03',
                                    text: '3. Visão e expectativas'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBDEV_04',
                                    text: '4. Infraestrutura'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBDEV_05',
                                    text: '5. Objetivos da organização central'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_PEP_OTVP_SUBFLX_01',
                                    text: '1. Robustez do ecossistema'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBFLX_02',
                                    text: '2. Novos produtos'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'REC_PEP_OTVP_SUBMTO_01',
                                    text: '1. Padrões e incentivos'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBMTO_02',
                                    text: '2. Produtos com código aberto'
                                },
                                {
                                    id: 'REC_PEP_OTVP_SUBMTO_03',
                                    text: '3. Visão e Expectativas'
                                }
                            ]
                        }
                    }
                }
            }
        },

        devrel_evangelismo_e_advocacia: {
            initials: 'DEVEA',
            content: {
                objetivo: {
                    initials: 'OB',
                    content: [
                        {
                            id: 'REC_DEVEA_OB_01',
                            text: '1. Ajudar a incorporar contribuições com potencial (ou seja, produtos complementares, serviços e inovações) que surgem dos \
                            desenvolvedores para a plataforma do ecossistema na área defoco da Plataforma e Produtos'
                        },
                        {
                            id: 'REC_DEVEA_OB_02',
                            text: '2. Manter o equilíbrio entre as expectativas dos desenvolvedores e as necessidades da organização central'
                        },
                        {
                            id: 'REC_DEVEA_OB_03',
                            text: '3. Balancear o roadmap interno da organização com as necessidades dos desenvolvedores'
                        },
                        {
                            id: 'REC_DEVEA_OB_04',
                            text: '4. Construir confiança entre setores da organização e os desenvolvedores'
                        }
                    ]
                },

                componente: {
                    initials: 'COMP',
                    content: [
                        {
                            id: 'REC_DEVEA_COMP_01',
                            text: '1. Evangelismo: divulgação da “palavra” da organização, ou seja, na prospecção de desenvolvedores, na influência de \
                            desenvolvedores externos. A parte de evangelismo está associada aos estágios de sensibilização, entrada e ativação do DevGo'
                        },
                        {
                            id: 'REC_DEVEA_COMP_02',
                            text: '2. Advocacia: trabalha com desenvolvedores existentes, ou seja, com o ganho de interesse e a fidelização de potenciais \
                            desenvolvedores. Isto se dá por meio de conteúdo de qualidade e específico para esses desenvolvedores. A parte de advocacia está \
                            relacionada aos estágios de retenção, reconhecimento e referência dentro do DevGo'
                        }
                    ]
                },

                objetos_de_transferencia_de_valor_consome_de: {
                    initials: 'OTVC',
                    content: {
                        subarea_plataforma_e_prudutos: {
                            content: [
                                {
                                    id: 'REC_DEVEA_OTVC_SUBPEP_01',
                                    text: '1. Programas de acesso'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBPEP_02',
                                    text: '2. Informações precisar sobre o roadmap'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBPEP_03',
                                    text: '3. Visão e expectativas'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBPEP_04',
                                    text: '4. Infraestrutura'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBPEP_05',
                                    text: '5. Objetivos da organização central'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_01',
                                    text: '1. Comunidade de especialistas'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_02',
                                    text: '2. Interação entre desenvolvedores experientes e parceiros da indústria'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_03',
                                    text: '3. Envolvimento em conjunto'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_04',
                                    text: '4. Recursos desejados'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_05',
                                    text: '5. Desenvolvedores ativos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_06',
                                    text: '6. Combinação de tecnologias'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_07',
                                    text: '7. Novos e competitivos produtos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBFLX_08',
                                    text: '8. Tecnologias e relacionamentos'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'REC_DEVEA_OTVC_SUBMTO_01',
                                    text: '1. Ação mais ampla'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBMTO_02',
                                    text: '2. Recursos desejados'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBMTO_03',
                                    text: '3. Produtos que são destaque'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBMTO_04',
                                    text: '4. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'REC_DEVEA_OTVC_SUBMTO_05',
                                    text: '5. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        }
                    }
                },

                objetos_de_transferencia_de_valor_prove_para: {
                    initials: 'OTVP',
                    content: {
                        subarea_plataforma_e_prudutos: {
                            content: [
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_01',
                                    text: '1. Credibilidade dos profissionais de DevRel'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_02',
                                    text: '2. Recursos desejados por desenvolvedores'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_03',
                                    text: '3. Conscientização sobre produtos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_04',
                                    text: '4. Articulador do fluxo de informação'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_05',
                                    text: '5. Área da estrutura organizacional'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_06',
                                    text: '6. Concentração em custos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_07',
                                    text: '7. Maturidade da organização'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_08',
                                    text: '8. Serviços'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_09',
                                    text: '9. Produtos complementares'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBPEP_10',
                                    text: '10. Inovações'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_01',
                                    text: '1. Bom relacionamento'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_02',
                                    text: '2. Brindes'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_03',
                                    text: '3. Reconhecimento do desenvolvedor'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_04',
                                    text: '4. Programas de acesso'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_05',
                                    text: '5. Contato presencial e por meio da web'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_06',
                                    text: '6. Envolvimento em conjunto'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_07',
                                    text: '7. Capacitação técnica'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_08',
                                    text: '8. Conscientização sobre produtos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_09',
                                    text: '9. Visão e expectativas da organização'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_10',
                                    text: '10. Conteúdo gratuito'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_11',
                                    text: '11. Novas oportunidades'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_12',
                                    text: '12. Ações diversificadas'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_07',
                                    text: '13. Conexão escalável a produtos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBFLX_08',
                                    text: '14. Recursos e ferramentas apropriadas'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'REC_DEVEA_OTVP_SUBMTO_01',
                                    text: '1. Recursos técnicos e não-técnicos'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBMTO_02',
                                    text: '2. Conteúdo acessível'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBMTO_03',
                                    text: '3. Conteúdo gratuito'
                                },
                                {
                                    id: 'REC_DEVEA_OTVP_SUBMTO_04',
                                    text: '4. Conscientização sobre produtos'
                                }
                            ]
                        }
                    }
                }
            }
        },

        monitoramento: {
            initials: 'MTO',
            content: {
                objetivo: {
                    initials: 'OB',
                    content: [
                        {
                            id: 'REC_MTO_OB_01',
                            text: '1. Monitorar o engajamento do desenvolvedor, dando suporte à transparência tanto para a organização quanto para os desenvolvedores'
                        },
                        {
                            id: 'REC_MTO_OB_02',
                            text: '2. Garantir que todos tenham a chance de entender e fornecer feedback.'
                        }
                    ]
                },

                categorias: {
                    initials: 'CAT',
                    content: [
                        {
                            id: 'REC_MTO_CAT_01',
                            text: '1. Perguntas e Respostas'
                        },
                        {
                            id: 'REC_MTO_CAT_02',
                            text: '2. Lista de E-mails e Fóruns'
                        },
                        {
                            id: 'REC_MTO_CAT_03',
                            text: '3. Ambiente Social de Codificação'
                        },
                        {
                            id: 'REC_MTO_CAT_04',
                            text: '4. Website Social de Notícias'
                        },
                        {
                            id: 'REC_MTO_CAT_05',
                            text: '5. Redes Sociais'
                        },
                        {
                            id: 'REC_MTO_CAT_06',
                            text: '6. Comunicação do time'
                        },
                        {
                            id: 'REC_MTO_CAT_07',
                            text: '7. Loja de aplicações'
                        },
                        {
                            id: 'REC_MTO_CAT_08',
                            text: '8. Painel de controle do desenvolvedor'
                        },
                    ]
                },

                objetos_de_transferencia_de_valor_consome_de: {
                    initials: 'OTVC',
                    content: {
                        subarea_plataforma_e_prudutos: {
                            content: [
                                {
                                    id: 'REC_MTO_OTVC_SUBPEP_01',
                                    text: '1. Visão e expectativas'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBPEP_02',
                                    text: '2. Produtos com código aberto'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBPEP_03',
                                    text: '3. Padrões e incentivos'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'REC_MTO_OTVC_SUBDEV_01',
                                    text: '1. Conscientização sobre produtos'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBDEV_02',
                                    text: '2. Conteúdo acessível'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBDEV_03',
                                    text: '3. Conteúdo gratuito'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBDEV_04',
                                    text: '4. Recursos técnicos e não-técnicos'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_MTO_OTVC_SUBFLX_01',
                                    text: '1. Expectativas'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBFLX_02',
                                    text: '2. Contribuições a produtos existentes por meio de extensões'
                                },
                                {
                                    id: 'REC_MTO_OTVC_SUBFLX_03',
                                    text: '3. Novas contribuições'
                                }
                            ]
                        }
                    }
                },

                objetos_de_transferencia_de_valor_prove_para: {
                    initials: 'OTVP',
                    content: {
                        subarea_plataforma_e_prudutos: {
                            content: [
                                {
                                    id: 'REC_MTO_OTVP_SUBPEP_01',
                                    text: '1. Escala e tamanho das cobmunidades'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBPEP_02',
                                    text: '2. Reconhecimento da marca'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBPEP_03',
                                    text: '3. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBPEP_04',
                                    text: '4. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'REC_MTO_OTVP_SUBDEV_01',
                                    text: '1. Ação mais ampla'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBDEV_02',
                                    text: '2. Recursos desejados'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBDEV_03',
                                    text: '3. Produtos que são destaque'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBDEV_04',
                                    text: '4. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBDEV_05',
                                    text: '5. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_MTO_OTVP_SUBFLX_01',
                                    text: '1. Dados sobre a interação dos desenvolvedores e contribuições'
                                },
                                {
                                    id: 'REC_MTO_OTVP_SUBFLX_02',
                                    text: '2. Conteúdo gratuito'
                                }
                            ]
                        }
                    }
                }
            }
        },

        fluxo_de_avanco_do_desenvolvedor: {
            initials: 'FLXAD',
            content: {
                objetivo_da_area: {
                    initials: 'OBJA',
                    content: [
                        {
                            id: 'REC_FLXAD_OBJA_01',
                            text: '1. Apoiar no acompanhamento e análise do avanço dos desenvolvedores dentro do ecossistema'
                        },
                        {
                            id: 'REC_FLXAD_OBJA_02',
                            text: '2. Entender como os desenvolvedores estão se movimentando e gerando contribuições dentro do ecossistema é importante para uma \
                            organização direcionar suas estratégias de atuação para governálos'
                        }
                    ]
                },

                objetivo_do_estagio: {
                    initials: 'OBJE',
                    content: [
                        {
                            id: 'REC_FLXAD_OBJE_01',
                            text: '1. Levar interações positivas e relacionamentos mais próximos'
                        },
                        {
                            id: 'REC_FLXAD_OBJE_02',
                            text: '2. Suportar o reconhecimento de desenvolvedores por usuários, organização e comunidade'
                        },
                        {
                            id: 'REC_FLXAD_OBJE_03',
                            text: '3. Identificar os líderes da comunidade'
                        },
                        {
                            id: 'REC_FLXAD_OBJE_04',
                            text: '4. Construir e obter feedback sobre os produtos'
                        },
                        {
                            id: 'REC_FLXAD_OBJE_05',
                            text: '5. Comunicar os impactos reais do trabalho dos desenvolvedores'
                        }
                    ]
                },

                facilitadores: {
                    initials: 'FCT',
                    content: [
                        {
                            id: 'REC_FLXAD_FCT_01',
                            text: '1. Treinamento'
                        },
                        {
                            id: 'REC_FLXAD_FCT_02',
                            text: '2. Programas de apoio ao desenvolvedor'
                        },
                        {
                            id: 'REC_FLXAD_FCT_03',
                            text: '3. Benefícios de marketing'
                        },
                        {
                            id: 'REC_FLXAD_FCT_04',
                            text: '4. Incentivos para inovação'
                        },
                        {
                            id: 'REC_FLXAD_FCT_05',
                            text: '5. Meritocracia e colaboração social'
                        }
                    ]
                },

                objetos_de_transferencia_de_valor_consome_de: {
                    initials: 'OTVC',
                    content: {
                        plataforma: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVC_SUBPLT_01',
                                    text: '1. Novos produtos'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBPLT_02',
                                    text: '2. Robustez do ecossistema'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_01',
                                    text: '1. Reconhecimento do desenvolvedor'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_02',
                                    text: '2. Programas de acesso'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_03',
                                    text: '3. Contato presencial'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_04',
                                    text: '4. Contato por meio da web'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_05',
                                    text: '5. Bom relacionamento'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_06',
                                    text: '6. Envolvimento em conjunto'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_07',
                                    text: '7. Capacitação técnica'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_08',
                                    text: '8. Conscientização sobre produtos'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_09',
                                    text: '9. Visão e expectativas da organização'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_10',
                                    text: '10. Conteúdo gratuito'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_11',
                                    text: '11. Novas oportunidades'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_12',
                                    text: '12. Ações diversificadas'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_13',
                                    text: '13. Brindes'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_14',
                                    text: '14. Conexão escalável a produtos'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBDEV_15',
                                    text: '15. Recursos e ferramentas apropriadas'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVC_SUBMTO_01',
                                    text: '1. Conteúdo gratuito'
                                },
                                {
                                    id: 'REC_FLXAD_OTVC_SUBMTO_02',
                                    text: '2. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        }
                    }
                },

                objetos_de_transferencia_de_valor_prove_para: {
                    initials: 'OTVP',
                    content: {
                        plataforma: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVP_SUBPLT_01',
                                    text: '1. Probabilidade de recomendação'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBPLT_02',
                                    text: '2. Receita por meio de serviços'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBPLT_03',
                                    text: '3. Reconhecimento da marca'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBPLT_04',
                                    text: '4. Investimento financeiro dos desenvolvedores'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_01',
                                    text: '1. Comunidade de especialistas'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_02',
                                    text: '2. Interação entre desenvolvedores experientes e parceiros da indústria'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_03',
                                    text: '3. Envolvimento em conjunto'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_04',
                                    text: '4. Recursos desejados'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_05',
                                    text: '5. Desenvolvedores ativos'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_06',
                                    text: '6. Combinação de tecnologias'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_07',
                                    text: '7. Novos e competitivos produtos'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_08',
                                    text: '8. Embaixadores'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBDEV_09',
                                    text: '9. Tecnologias e relacionamentos'
                                }
                            ]
                        },

                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVP_SUBFLX_01',
                                    text: '1. Networking'
                                }
                            ]
                        },

                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'REC_FLXAD_OTVP_SUBMTO_01',
                                    text: '1. Novas contribuições'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBMTO_02',
                                    text: '2. Contribuições a produtos existentes por meio de extensões'
                                },
                                {
                                    id: 'REC_FLXAD_OTVP_SUBMTO_03',
                                    text: '3. Expectativas'
                                }
                            ]
                        }
                    },

                    licoes_aprendidas: {
                        initials: 'LA',
                        title: 'Para o seu contexto de DevRel visando o reconhecimento de desenvolvedores, selecione as lições aprendidas que mais considera importante',

                        content: [
                            {
                                id: 'REC_FLXAD_LA_01',
                                text: '1. Trabalhe diretamente com os vencedores do prêmio em hackathons, promovendo os projetos através de blogs usando a contribuição como material \
                                promocional, se isso fizer sentido'
                            },
                            {
                                id: 'REC_FLXAD_LA_02',
                                text: '2. Promova as contribuições dos desenvolvedores como, por exemplo, as aplicações móveis. Impulsionar os downloads de aplicações móveis criará muito \
                                valor em termos de relações com desenvolvedores e também ajudará a vender sua plataforma'
                            },
                            {
                                id: 'REC_FLXAD_LA_03',
                                text: '3. Elogie alguns desenvolvedores específicos em seus canais oficiais. Isto pode ser um grande impulso para o reconhecimento público e negócios do desenvolvedor'
                            },
                            {
                                id: 'REC_FLXAD_LA_04',
                                text: '4. Conecte desenvolvedores em potencial da comunidade aos colegas de setores organizacionais. É importante, também, ter uma variedade de programas \
                                para conectar os desenvolvedores diretamente aos clientes de pequenas e médias empresas'
                            },
                            {
                                id: 'REC_FLXAD_LA_05',
                                text: '5. Ajude os desenvolvedores a ajudar a sua área de DevRel. Seminários, eventos, seminários on-line, demonstrações - o que você estiver fazendo para \
                                chamar a atenção da sua plataforma para o mundo, convide alguns desenvolvedores para compartilhar conhecimento e experiências'
                            },
                            {
                                id: 'REC_FLXAD_LA_06',
                                text: '6. Ajude a criar status e identificar líderes na comunidade. Os desenvolvedoresquerem construir seu status social, ganhar reputação e compartilhar seus \
                                conhecimentos com outros desenvolvedores'
                            },
                            {
                                id: 'REC_FLXAD_LA_07',
                                text: '7. Invista na capacitação de líderes de comunidade. Esses líderes poderão trabalhar como extensão da equipe de DevRel recrutando, treinando e \
                                capacitando os desenvolvedores do ecossistema'
                            },
                            {
                                id: 'REC_FLXAD_LA_08',
                                text: '08. Dar reputação às pessoas certas, demonstrar apreço e recompensar os mais ativos. Quando feito corretamente, as pessoas criam palestras, escrevem livros, \
                                ajudam a desenvolver a comunidade junto com você. Quando os desenvolvedores podem aumentar seu valor, seu alcance e seu reconhecimento construindo sua plataforma  \
                                e aumentando seu público-alvo, eles serão muito mais dedicados a você e sua marca'
                            },
                            {
                                id: 'REC_FLXAD_LA_09',
                                text: '9. Ofereça treinamento 1:1 em vários níveis como recompensa - em vez de se cansar treinando todos, tenha materiais de auto treinamento que os \
                                desenvolvedores possam usar para chegar ao próximo nível'
                            },
                            {
                                id: 'REC_FLXAD_LA_10',
                                text: '10. Ter um código de conduta definido para os líderes e para as comunidades - sua reputação também está em jogo quando um dos membros da sua comunidade “sai da linha”'
                            },
                            {
                                id: 'REC_FLXAD_LA_11',
                                text: '11. Conecte sua equipe de aquisição de Talentos aos desenvolvedores, instrua essa equipe sobre como a comunidade está funcionando. Isto ajuda na \
                                identificação de comunidades e os influenciadores podem fazer parceria para criar conteúdo incrível para a área de DevRel'
                            }
                        ]
                    },

                    insights: {
                        initials: 'ISG',
                        title: 'Para o seu contexto de DevRel visando o reconhecimento de desenvolvedores, selecione os insights que mais considera importante visando o monitoramento',

                        content: [
                            {
                                id: 'REC_FLXAD_ISG_01',
                                text: 'Insight #1: os tópicos podem indicar as barreiras mais frequentes enfrentadas por desenvolvedores dispostos a participar de um MSECO. Esse \
                                cenário pode servir como uma estratégia de monitoramento para apoiar a organização central no recrutamento e no treinamento de desenvolvedores. \
                                Do ponto de vista do custo operacional, de manutenção e a competividades, os tópicos comuns: vinculação de dados, programação de UI e infraestrutura \
                                de desenvolvimento, ajudam na análise'
                            },
                            {
                                id: 'REC_FLXAD_ISG_02',
                                text: 'Insight #2: as emoções primárias além de serem úteis pra obter a satisfação do desenvolvedor, também cobrem, aspectos de custo, competitividade e \
                                manutenção de produtos. A tristeza se relaciona a produtos como os emuladores e dispositivos, assim como, a manipulação de elementos de UI. A \
                                raiva está associada a indisponibilidade de recursos. E a alegria, pode impactar na competitividade do produto, pois há relação com as melhores\
                                práticas para gerar uma contribuição e a implementação de recursos avançados'
                            },
                            {
                                id: 'REC_FLXAD_ISG_03',
                                text: 'Insight #3:  é importante explorar como a falta de interseção de interesses impulsiona a troca de informações entre desenvolvedores trabalhando em \
                                mais de um MSECO. A pequena interseção mostra que as estratégias tomadas em nível gerencial podem afetar as interações e motivações dos desenvolvedores'
                            },
                            {
                                id: 'REC_FLXAD_ISG_04',
                                text: 'Insight #4: os tópicos mais visualizados, bem como os tópicos em que os desenvolvedores estão mais empenhados em responder, podem indicar uma \
                                comunidade de especialistas que pode ajudar a reduzir as barreiras frequentes à participação no MSECO. Isto favorece o crescimento da \
                                comunidade e o aumento da satisfação dos desenvolvedores'
                            },
                            {
                                id: 'REC_FLXAD_ISG_05',
                                text: 'Insight #5: as perguntas postadas em um repositório de perguntas e respostas em períodos próximos a anúncios oficiais de um MSECO podem \
                                ajudar a definir estratégias para adicionar novos recursos do MSECO (por exemplo, plataformas, SDKs, APIs, linguagens de programação). Quando \
                                essas novas tecnologias são lançadas no mercado, uma organização central deve ser capaz de gerenciá-las facilmente'
                            },
                            {
                                id: 'REC_FLXAD_ISG_06',
                                text: 'Insight #6: as medalhas podem ajudar a organização central no gerenciamento de estratégias relacionadas a exploração de recurso técnico, \
                                desenvolvedores ativos na comunidade e o controle da comunidade por meio do cultivo de relacionamentos com desenvolvedores que se destacam dentro \
                                do ecossistema. Isto pode ajudar a reduzir custos operacionais para a governança de desenvolvedores' 
                            },
                        ]
                    },
                }
            }
        }
    }
}

export default reconhecimento;