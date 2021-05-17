const retencao = {
    initials: 'RET',
    content: {
        plataforma_e_produtos: {
            initials: 'PEP',
            content: {
                objetivo: {
                    initials: 'OB',
                    content: [
                        {
                            id: 'RET_PEP_OB_01',
                            text: '1. Fornecer informações e recursos que apoiem as metas de uma organização em relação à produtividade'
                        },
                        {
                            id: 'RET_PEP_OB_02',
                            text: '2. Fornecer informações e recursos que apoiem as metas de uma organização em relação à criação de nicho'
                        },
                        {
                            id: 'RET_PEP_OB_03',
                            text: '3. Fornecer informações e recursos que apoiem as metas de uma organização em relação à qualidade das contribuições'
                        }
                    ]
                },

                componente: {
                    initials: 'COMP',
                    content: [
                        {
                            id: 'RET_PEP_COMP_01',
                            text: '1. Plataforma'
                        },
                        {
                            id: 'RET_PEP_COMP_02',
                            text: '2. Infraestrutura'
                        },
                        {
                            id: 'RET_PEP_COMP_03',
                            text: '3. Orçamento'
                        },
                        {
                            id: 'RET_PEP_COMP_04',
                            text: '4. Produtos (ex: APIs, SKDs, IDEs)'
                        },
                        {
                            id: 'RET_PEP_COMP_05',
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
                                    id: 'RET_PEP_OTVC_SUBDEV_01',
                                    text: '1. Credibilidade dos profissionais de DevRel'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_02',
                                    text: '2. Recursos desejados por desenvolvedores'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_03',
                                    text: '3. Conscientização sobre produtos'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_04',
                                    text: '4. Articulador do fluxo de informação'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_05',
                                    text: '5. Área da estrutura organizacional'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_06',
                                    text: '6. Concentração em custos'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_07',
                                    text: '7. Maturidade da organização'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_08',
                                    text: '8. Serviços'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_09',
                                    text: '9. Produtos complementares'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBDEV_10',
                                    text: '10. Inovações'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_PEP_OTVC_SUBFLX_01',
                                    text: '1. Probabilidade de recomendação'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBFLX_02',
                                    text: '2. Receita por meio de serviços'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBFLX_03',
                                    text: '3. Reconhecimento da marca'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBFLX_04',
                                    text: '4. Investimento financeiro dos desenvolvedores'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'RET_PEP_OTVC_SUBMTO_01',
                                    text: '1. Escala e tamanho das comunidades'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBMTO_02',
                                    text: '2. Reconhecimento da marca'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBMTO_03',
                                    text: '3. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'RET_PEP_OTVC_SUBMTO_04',
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
                                    id: 'RET_PEP_OTVP_SUBDEV_01',
                                    text: '1. Programas de acesso'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBDEV_02',
                                    text: '2. Informações precisas sobre o roadmap'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBDEV_03',
                                    text: '3. Visão e expectativas'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBDEV_04',
                                    text: '4. Infraestrutura'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBDEV_05',
                                    text: '5. Objetivos da organização central'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_PEP_OTVP_SUBFLX_01',
                                    text: '1. Robustez do ecossistema'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBFLX_02',
                                    text: '2. Novos produtos'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'RET_PEP_OTVP_SUBMTO_01',
                                    text: '1. Padrões e incentivos'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBMTO_02',
                                    text: '2. Produtos com código aberto'
                                },
                                {
                                    id: 'RET_PEP_OTVP_SUBMTO_03',
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
                            id: 'RET_DEVEA_OB_01',
                            text: '1. Ajudar a incorporar contribuições com potencial (ou seja, produtos complementares, serviços e inovações) que surgem dos \
                            desenvolvedores para a plataforma do ecossistema na área defoco da Plataforma e Produtos'
                        },
                        {
                            id: 'RET_DEVEA_OB_02',
                            text: '2. Manter o equilíbrio entre as expectativas dos desenvolvedores e as necessidades da organização central'
                        },
                        {
                            id: 'RET_DEVEA_OB_03',
                            text: '3. Balancear o roadmap interno da organização com as necessidades dos desenvolvedores'
                        },
                        {
                            id: 'RET_DEVEA_OB_04',
                            text: '4. Construir confiança entre setores da organização e os desenvolvedores'
                        }
                    ]
                },

                componente: {
                    initials: 'COMP',
                    content: [
                        {
                            id: 'RET_DEVEA_COMP_01',
                            text: '1. Evangelismo: divulgação da “palavra” da organização, ou seja, na prospecção de desenvolvedores, na influência de \
                            desenvolvedores externos. A parte de evangelismo está associada aos estágios de sensibilização, entrada e ativação do DevGo'
                        },
                        {
                            id: 'RET_DEVEA_COMP_02',
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
                                    id: 'RET_DEVEA_OTVC_SUBPEP_01',
                                    text: '1. Programas de acesso'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBPEP_02',
                                    text: '2. Informações precisar sobre o roadmap'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBPEP_03',
                                    text: '3. Visão e expectativas'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBPEP_04',
                                    text: '4. Infraestrutura'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBPEP_05',
                                    text: '5. Objetivos da organização central'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_01',
                                    text: '1. Comunidade de especialistas'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_02',
                                    text: '2. Interação entre desenvolvedores experientes e parceiros da indústria'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_03',
                                    text: '3. Envolvimento em conjunto'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_04',
                                    text: '4. Recursos desejados'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_05',
                                    text: '5. Desenvolvedores ativos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_06',
                                    text: '6. Combinação de tecnologias'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_07',
                                    text: '7. Novos e competitivos produtos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBFLX_08',
                                    text: '8. Tecnologias e relacionamentos'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'RET_DEVEA_OTVC_SUBMTO_01',
                                    text: '1. Ação mais ampla'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBMTO_02',
                                    text: '2. Recursos desejados'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBMTO_03',
                                    text: '3. Produtos que são destaque'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBMTO_04',
                                    text: '4. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'RET_DEVEA_OTVC_SUBMTO_05',
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
                                    id: 'RET_DEVEA_OTVP_SUBPEP_01',
                                    text: '1. Credibilidade dos profissionais de DevRel'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_02',
                                    text: '2. Recursos desejados por desenvolvedores'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_03',
                                    text: '3. Conscientização sobre produtos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_04',
                                    text: '4. Articulador do fluxo de informação'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_05',
                                    text: '5. Área da estrutura organizacional'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_06',
                                    text: '6. Concentração em custos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_07',
                                    text: '7. Maturidade da organização'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_08',
                                    text: '8. Serviços'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_09',
                                    text: '9. Produtos complementares'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBPEP_10',
                                    text: '10. Inovações'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_01',
                                    text: '1. Bom relacionamento'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_02',
                                    text: '2. Brindes'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_03',
                                    text: '3. Reconhecimento do desenvolvedor'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_04',
                                    text: '4. Programas de acesso'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_05',
                                    text: '5. Contato presencial e por meio da web'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_06',
                                    text: '6. Envolvimento em conjunto'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_07',
                                    text: '7. Capacitação técnica'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_08',
                                    text: '8. Conscientização sobre produtos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_09',
                                    text: '9. Visão e expectativas da organização'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_10',
                                    text: '10. Conteúdo gratuito'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_11',
                                    text: '11. Novas oportunidades'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_12',
                                    text: '12. Ações diversificadas'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_07',
                                    text: '13. Conexão escalável a produtos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBFLX_08',
                                    text: '14. Recursos e ferramentas apropriadas'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'RET_DEVEA_OTVP_SUBMTO_01',
                                    text: '1. Recursos técnicos e não-técnicos'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBMTO_02',
                                    text: '2. Conteúdo acessível'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBMTO_03',
                                    text: '3. Conteúdo gratuito'
                                },
                                {
                                    id: 'RET_DEVEA_OTVP_SUBMTO_04',
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
                            id: 'RET_MTO_OB_01',
                            text: '1. Monitorar o engajamento do desenvolvedor, dando suporte à transparência tanto para a organização quanto para os desenvolvedores'
                        },
                        {
                            id: 'RET_MTO_OB_02',
                            text: '2. Garantir que todos tenham a chance de entender e fornecer feedback.'
                        }
                    ]
                },

                categorias: {
                    initials: 'CAT',
                    content: [
                        {
                            id: 'RET_MTO_CAT_01',
                            text: '1. Perguntas e Respostas'
                        },
                        {
                            id: 'RET_MTO_CAT_02',
                            text: '2. Lista de E-mails e Fóruns'
                        },
                        {
                            id: 'RET_MTO_CAT_03',
                            text: '3. Ambiente Social de Codificação'
                        },
                        {
                            id: 'RET_MTO_CAT_04',
                            text: '4. Website Social de Notícias'
                        },
                        {
                            id: 'RET_MTO_CAT_05',
                            text: '5. Redes Sociais'
                        },
                        {
                            id: 'RET_MTO_CAT_06',
                            text: '6. Comunicação do time'
                        },
                        {
                            id: 'RET_MTO_CAT_07',
                            text: '7. Loja de aplicações'
                        },
                        {
                            id: 'RET_MTO_CAT_08',
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
                                    id: 'RET_MTO_OTVC_SUBPEP_01',
                                    text: '1. Visão e expectativas'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBPEP_02',
                                    text: '2. Produtos com código aberto'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBPEP_03',
                                    text: '3. Padrões e incentivos'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'RET_MTO_OTVC_SUBDEV_01',
                                    text: '1. Conscientização sobre produtos'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBDEV_02',
                                    text: '2. Conteúdo acessível'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBDEV_03',
                                    text: '3. Conteúdo gratuito'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBDEV_04',
                                    text: '4. Recursos técnicos e não-técnicos'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_MTO_OTVC_SUBFLX_01',
                                    text: '1. Expectativas'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBFLX_02',
                                    text: '2. Contribuições a produtos existentes por meio de extensões'
                                },
                                {
                                    id: 'RET_MTO_OTVC_SUBFLX_03',
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
                                    id: 'RET_MTO_OTVP_SUBPEP_01',
                                    text: '1. Escala e tamanho das cobmunidades'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBPEP_02',
                                    text: '2. Reconhecimento da marca'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBPEP_03',
                                    text: '3. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBPEP_04',
                                    text: '4. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'RET_MTO_OTVP_SUBDEV_01',
                                    text: '1. Ação mais ampla'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBDEV_02',
                                    text: '2. Recursos desejados'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBDEV_03',
                                    text: '3. Produtos que são destaque'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBDEV_04',
                                    text: '4. Dados gerados por uso de produtos e serviços'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBDEV_05',
                                    text: '5. Dados sobre a interação dos desenvolvedores e contribuições'
                                }
                            ]
                        },
                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_MTO_OTVP_SUBFLX_01',
                                    text: '1. Dados sobre a interação dos desenvolvedores e contribuições'
                                },
                                {
                                    id: 'RET_MTO_OTVP_SUBFLX_02',
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
                            id: 'RET_FLXAD_OBJA_01',
                            text: '1. Apoiar no acompanhamento e análise do avanço dos desenvolvedores dentro do ecossistema'
                        },
                        {
                            id: 'RET_FLXAD_OBJA_02',
                            text: '2. Entender como os desenvolvedores estão se movimentando e gerando contribuições dentro do ecossistema é importante para uma \
                            organização direcionar suas estratégias de atuação para governálos'
                        }
                    ]
                },

                objetivo_do_estagio: {
                    initials: 'OBJE',
                    content: [
                        {
                            id: 'RET_FLXAD_OBJE_01',
                            text: '1. Valorizar o desenvolvedor para retê-lo em relação a monetização e oportunidades de benefícios e a própria cultura dentro do MSECO'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_02',
                            text: '2. Fornecer impulso de ganho'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_03',
                            text: '3. Gerenciar mudança de plataforma'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_04',
                            text: '4. Apoiar contribuições de nicho'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_05',
                            text: '5. Permitir que os desenvolvedores trabalhem com as mais recentes e melhores tecnologias do ecossistema'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_06',
                            text: '6. Apoiar o desenvolvimento'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_07',
                            text: '7. Analisar os desenvolvedores periféricos'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_08',
                            text: '8. Analisar os desenvolvedores ativos'
                        },
                        {
                            id: 'RET_FLXAD_OBJE_09',
                            text: '9. Analisar os desenvolvedores de topo'
                        }
                    ]
                },

                facilitadores: {
                    initials: 'FCT',
                    content: [
                        {
                            id: 'RET_FLXAD_FCT_01',
                            text: '1. Treinamento'
                        },
                        {
                            id: 'RET_FLXAD_FCT_02',
                            text: '2. Portfólio de dispositivos e aplicações móveis'
                        },
                        {
                            id: 'RET_FLXAD_FCT_03',
                            text: '3. Certificação de contribuição'
                        },
                        {
                            id: 'RET_FLXAD_FCT_04',
                            text: '4. Plano de negócios'
                        },
                        {
                            id: 'RET_FLXAD_FCT_05',
                            text: '5. Modelo de geração de renda'
                        },
                        {
                            id: 'RET_FLXAD_FCT_06',
                            text: '6. Acordos de níveis de qualidade e colaboração social'
                        }
                    ]
                },

                objetos_de_transferencia_de_valor_consome_de: {
                    initials: 'OTVC',
                    content: {
                        plataforma: {
                            content: [
                                {
                                    id: 'RET_FLXAD_OTVC_SUBPLT_01',
                                    text: '1. Novos produtos'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBPLT_02',
                                    text: '2. Robustez do ecossistema'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_01',
                                    text: '1. Reconhecimento do desenvolvedor'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_02',
                                    text: '2. Programas de acesso'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_03',
                                    text: '3. Contato presencial'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_04',
                                    text: '4. Contato por meio da web'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_05',
                                    text: '5. Bom relacionamento'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_06',
                                    text: '6. Envolvimento em conjunto'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_07',
                                    text: '7. Capacitação técnica'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_08',
                                    text: '8. Conscientização sobre produtos'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_09',
                                    text: '9. Visão e expectativas da organização'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_10',
                                    text: '10. Conteúdo gratuito'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_11',
                                    text: '11. Novas oportunidades'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_12',
                                    text: '12. Ações diversificadas'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_13',
                                    text: '13. Brindes'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_14',
                                    text: '14. Conexão escalável a produtos'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBDEV_15',
                                    text: '15. Recursos e ferramentas apropriadas'
                                }
                            ]
                        },
                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'RET_FLXAD_OTVC_SUBMTO_01',
                                    text: '1. Conteúdo gratuito'
                                },
                                {
                                    id: 'RET_FLXAD_OTVC_SUBMTO_02',
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
                                    id: 'RET_FLXAD_OTVP_SUBPLT_01',
                                    text: '1. Probabilidade de recomendação'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBPLT_02',
                                    text: '2. Receita por meio de serviços'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBPLT_03',
                                    text: '3. Reconhecimento da marca'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBPLT_04',
                                    text: '4. Investimento financeiro dos desenvolvedores'
                                }
                            ]
                        },
                        subarea_devrel: {
                            content: [
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_01',
                                    text: '1. Comunidade de especialistas'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_02',
                                    text: '2. Interação entre desenvolvedores experientes e parceiros da indústria'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_03',
                                    text: '3. Envolvimento em conjunto'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_04',
                                    text: '4. Recursos desejados'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_05',
                                    text: '5. Desenvolvedores ativos'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_06',
                                    text: '6. Combinação de tecnologias'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_07',
                                    text: '7. Novos e competitivos produtos'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_08',
                                    text: '8. Embaixadores'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBDEV_09',
                                    text: '9. Tecnologias e relacionamentos'
                                }
                            ]
                        },

                        subarea_fluxo: {
                            content: [
                                {
                                    id: 'RET_FLXAD_OTVP_SUBFLX_01',
                                    text: '1. Networking'
                                }
                            ]
                        },

                        subarea_monitoramento: {
                            content: [
                                {
                                    id: 'RET_FLXAD_OTVP_SUBMTO_01',
                                    text: '1. Novas contribuições'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBMTO_02',
                                    text: '2. Contribuições a produtos existentes por meio de extensões'
                                },
                                {
                                    id: 'RET_FLXAD_OTVP_SUBMTO_03',
                                    text: '3. Expectativas'
                                }
                            ]
                        }
                    },

                    licoes_aprendidas: {
                        initials: 'LA',
                        title: 'Para o seu contexto de DevRel visando a retenção de desenvolvedores, selecione as lições aprendidas que mais considera importante',

                        content: [
                            {
                                id: 'RET_FLXAD_LA_01',
                                text: '1. Concentre-se no valor para o desenvolvedor em qualquer conteúdo que você esteja produzindo, seja em posts de blog, guias, etc. Isso significa que o foco \
                                deve estar na resolução de problemas'
                            },
                            {
                                id: 'RET_FLXAD_LA_02',
                                text: '2. Reconheça as diversas motivações de cada membro da comunidade, pois não existe um único tipo de desenvolvedor, e busque continuamente alinhar os \
                                interesses de todos. Entenda e declare claramente o que a organização por meio de um programa de fidelização de desenvolvedores está tentando alcançar. Isto \
                                permitirá o suporte às metas de várias unidades de negócios. Experimente ter um portfólio que inclua uma série de atividades, desde ganhos rápidos a projetos \
                                grandes/importantes'
                            },
                            {
                                id: 'RET_FLXAD_LA_03',
                                text: '3. Chame a atenção dos desenvolvedores para o fato de que sua própria marca crescerá com a quantidade de contribuições que eles entregaram e a fama que \
                                recebem por isso'
                            },
                            {
                                id: 'RET_FLXAD_LA_04',
                                text: '4. Esteja presente no Stack Overflow. Você pode ver o que os desenvolvedores escrevem sobre seu produto e, mesmo que outros desenvolvedores não \
                                consigam ajudar uns aos outros, você pode entrar e ajudar alguém. Mostre que você está lá para ajudá-los quando precisarem de você'
                            },
                            {
                                id: 'RET_FLXAD_LA_05',
                                text: '5. Fique de olho na competição. Faça um benchmark contra os principais concorrentes para acompanhar as tendências ao longo do tempo. \
                                Além de ajudálo a entender os líderes do setor, isso também ajuda a evitar as armadilhas para a retenção de desenvolvedores'
                            },
                            {
                                id: 'RET_FLXAD_LA_06',
                                text: '6.  Envolva os desenvolvedores em demonstrações e prévias de novos produtos e ferramentas. Assim, além de terem acesso antecipado, eles ajudarão a \
                                encontrar possíveis problemas para uso'
                            },
                            {
                                id: 'RET_FLXAD_LA_07',
                                text: '7. Analise as contribuições de seus desenvolvedores, escreva sobre e divulgue em canais oficiais e durante eventos'
                            },
                            {
                                id: 'RET_FLXAD_LA_08',
                                text: '08. Incentive os desenvolvedores a lerem “histórias de desenvolvedores”, um site dedicado sobre como os desenvolvedores estão obtendo sucesso dentro \
                                ecossistema. Pode ajudar os desenvolvedores a criar um negócio, não apenas uma aplicação móvel'
                            },
                            {
                                id: 'RET_FLXAD_LA_09',
                                text: '9.  Seja inclusivo compartilhando grandes bibliotecas de código aberto e comunitárias como parte da solução. O Android tornou-se muito mais inclusivo \
                                para a comunidade. O exemplo mais óbvio é o “abraço” do Kotlin e o trabalho coletivo para torná-lo o melhor possível no Android'
                            },
                            {
                                id: 'RET_FLXAD_LA_10',
                                text: '10. Direcione os desenvolvedores, também, a se envolver com as comunidades que fazem o trabalho em áreas específicas da plataforma (por exemplo, \
                                fragmentação e construção de bibliotecas de suporte)'
                            }
                        ]
                    },

                    insights: {
                        initials: 'ISG',
                        title: 'Para o seu contexto de DevRel visando a retenção de desenvolvedores, selecione os insights que mais considera importante visando o monitoramento',

                        content: [
                            {
                                id: 'RET_FLXAD_ISG_01',
                                text: 'Insight #1: os tópicos podem indicar as barreiras mais frequentes enfrentadas por desenvolvedores dispostos a participar de um MSECO. Esse \
                                cenário pode servir como uma estratégia de monitoramento para apoiar a organização central no recrutamento e no treinamento de desenvolvedores. \
                                Do ponto de vista do custo operacional, de manutenção e a competividades, os tópicos comuns: vinculação de dados, programação de UI e infraestrutura \
                                de desenvolvimento, ajudam na análise'
                            },
                            {
                                id: 'RET_FLXAD_ISG_02',
                                text: 'Insight #2: as emoções primárias além de serem úteis pra obter a satisfação do desenvolvedor, também cobrem, aspectos de custo, competitividade e \
                                manutenção de produtos. A tristeza se relaciona a produtos como os emuladores e dispositivos, assim como, a manipulação de elementos de UI. A \
                                raiva está associada a indisponibilidade de recursos. E a alegria, pode impactar na competitividade do produto, pois há relação com as melhores\
                                práticas para gerar uma contribuição e a implementação de recursos avançados'
                            },
                            {
                                id: 'RET_FLXAD_ISG_03',
                                text: 'Insight #3:  é importante explorar como a falta de interseção de interesses impulsiona a troca de informações entre desenvolvedores trabalhando em \
                                mais de um MSECO. A pequena interseção mostra que as estratégias tomadas em nível gerencial podem afetar as interações e motivações dos desenvolvedores'
                            },
                            {
                                id: 'RET_FLXAD_ISG_04',
                                text: 'Insight #4: os tópicos mais visualizados, bem como os tópicos em que os desenvolvedores estão mais empenhados em responder, podem indicar uma \
                                comunidade de especialistas que pode ajudar a reduzir as barreiras frequentes à participação no MSECO. Isto favorece o crescimento da \
                                comunidade e o aumento da satisfação dos desenvolvedores'
                            },
                            {
                                id: 'RET_FLXAD_ISG_05',
                                text: 'Insight #5: as perguntas postadas em um repositório de perguntas e respostas em períodos próximos a anúncios oficiais de um MSECO podem \
                                ajudar a definir estratégias para adicionar novos recursos do MSECO (por exemplo, plataformas, SDKs, APIs, linguagens de programação). Quando \
                                essas novas tecnologias são lançadas no mercado, uma organização central deve ser capaz de gerenciá-las facilmente'
                            },
                            {
                                id: 'RET_FLXAD_ISG_06',
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

export default retencao;