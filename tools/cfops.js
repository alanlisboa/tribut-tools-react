const cfops = [
  { id: 1, codigo: "1101", descricao: "Compra para industrialização" },
  { id: 2, codigo: "1102", descricao: "Compra para comercialização" },
  {
    id: 3,
    codigo: "1111",
    descricao:
      "Compra para industrialização de mercadoria recebida anteriormente em consignação industrial",
  },
  {
    id: 4,
    codigo: "1113",
    descricao:
      "Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil",
  },
  {
    id: 5,
    codigo: "1116",
    descricao:
      "Compra para industrialização originada de encomenda para recebimento futuro",
  },
  {
    id: 6,
    codigo: "1117",
    descricao:
      "Compra para comercialização originada de encomenda para recebimento futuro",
  },
  {
    id: 7,
    codigo: "1118",
    descricao:
      "Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem",
  },
  {
    id: 8,
    codigo: "1120",
    descricao:
      "Compra para industrialização, em venda à ordem, já recebida do vendedor remetente",
  },
  {
    id: 9,
    codigo: "1121",
    descricao:
      "Compra para comercialização, em venda à ordem, já recebida do vendedor remetente",
  },
  {
    id: 10,
    codigo: "1122",
    descricao:
      "Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente",
  },
  {
    id: 11,
    codigo: "1124",
    descricao: "Industrialização efetuada por outra empresa",
  },
  {
    id: 12,
    codigo: "1125",
    descricao:
      "Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria",
  },
  {
    id: 13,
    codigo: "1126",
    descricao: "Compra para utilização na prestação de serviço",
  },
  {
    id: 14,
    codigo: "1128",
    descricao:
      "Compra para utilização na prestação de serviço sujeita ao ISSQN",
  },
  { id: 15, codigo: "1151", descricao: "Transferência para industrialização" },
  { id: 16, codigo: "1152", descricao: "Transferência para comercialização" },
  {
    id: 17,
    codigo: "1153",
    descricao: "Transferência de energia elétrica para distribuição",
  },
  {
    id: 18,
    codigo: "1154",
    descricao: "Transferência para utilização na prestação de serviço",
  },
  {
    id: 19,
    codigo: "1201",
    descricao: "Devolução de venda de produção do estabelecimento",
  },
  {
    id: 20,
    codigo: "1202",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    id: 21,
    codigo: "1203",
    descricao:
      "Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 22,
    codigo: "1204",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 23,
    codigo: "1205",
    descricao:
      "Anulação de valor relativo à prestação de serviço de comunicação",
  },
  {
    id: 24,
    codigo: "1206",
    descricao:
      "Anulação de valor relativo à prestação de serviço de transporte",
  },
  {
    id: 25,
    codigo: "1207",
    descricao: "Anulação de valor relativo à venda de energia elétrica",
  },
  {
    id: 26,
    codigo: "1208",
    descricao:
      "Devolução de produção do estabelecimento, remetida em transferência",
  },
  {
    id: 27,
    codigo: "1209",
    descricao:
      "Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência",
  },
  {
    id: 28,
    codigo: "1251",
    descricao:
      "Compra de energia elétrica para distribuição ou comercialização",
  },
  {
    id: 29,
    codigo: "1252",
    descricao: "Compra de energia elétrica por estabelecimento industrial",
  },
  {
    id: 30,
    codigo: "1253",
    descricao: "Compra de energia elétrica por estabelecimento comercial",
  },
  {
    id: 31,
    codigo: "1254",
    descricao:
      "Compra de energia elétrica por estabelecimento prestador de serviço de transporte",
  },
  {
    id: 32,
    codigo: "1255",
    descricao:
      "Compra de energia elétrica por estabelecimento prestador de serviço de comunicação",
  },
  {
    id: 33,
    codigo: "1256",
    descricao:
      "Compra de energia elétrica por estabelecimento de produtor rural",
  },
  {
    id: 34,
    codigo: "1257",
    descricao: "Compra de energia elétrica para consumo por demanda contratada",
  },
  {
    id: 35,
    codigo: "1301",
    descricao:
      "Aquisição de serviço de comunicação para execução de serviço da mesma natureza",
  },
  {
    id: 36,
    codigo: "1302",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento industrial",
  },
  {
    id: 37,
    codigo: "1303",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento comercial",
  },
  {
    id: 38,
    codigo: "1304",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte",
  },
  {
    id: 39,
    codigo: "1305",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 40,
    codigo: "1306",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento de produtor rural",
  },
  {
    id: 41,
    codigo: "1351",
    descricao:
      "Aquisição de serviço de transporte para execução de serviço da mesma natureza",
  },
  {
    id: 42,
    codigo: "1352",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento industrial",
  },
  {
    id: 43,
    codigo: "1353",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento comercial",
  },
  {
    id: 44,
    codigo: "1354",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação",
  },
  {
    id: 45,
    codigo: "1355",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 46,
    codigo: "1356",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de produtor rural",
  },
  {
    id: 47,
    codigo: "1360",
    descricao:
      "Aquisição de serviço de transporte por contribuinte substituto em relação ao serviço de transporte.",
  },
  {
    id: 48,
    codigo: "1401",
    descricao:
      "Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 49,
    codigo: "1403",
    descricao:
      "Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 50,
    codigo: "1406",
    descricao:
      "Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária",
  },
  {
    id: 51,
    codigo: "1407",
    descricao:
      "Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária",
  },
  {
    id: 52,
    codigo: "1408",
    descricao:
      "Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 53,
    codigo: "1409",
    descricao:
      "Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 54,
    codigo: "1410",
    descricao:
      "Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 55,
    codigo: "1411",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 56,
    codigo: "1414",
    descricao:
      "Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 57,
    codigo: "1415",
    descricao:
      "Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 58,
    codigo: "1451",
    descricao: "Retorno de animal do estabelecimento produtor",
  },
  {
    id: 59,
    codigo: "1452",
    descricao: "Retorno de insumo não utilizado na produção",
  },
  {
    id: 60,
    codigo: "1501",
    descricao:
      "Entrada de mercadoria recebida com fim específico de exportação",
  },
  {
    id: 61,
    codigo: "1503",
    descricao:
      "Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento",
  },
  {
    id: 62,
    codigo: "1504",
    descricao:
      "Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros",
  },
  {
    id: 63,
    codigo: "1505",
    descricao:
      "Entrada decorrente de devolução simbólica de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
  },
  {
    id: 64,
    codigo: "1506",
    descricao:
      "Entrada decorrente de devolução simbólica de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação.",
  },
  {
    id: 65,
    codigo: "1551",
    descricao: "Compra de bem para o ativo imobilizado",
  },
  {
    id: 66,
    codigo: "1552",
    descricao: "Transferência de bem do ativo imobilizado",
  },
  {
    id: 67,
    codigo: "1553",
    descricao: "Devolução de venda de bem do ativo imobilizado",
  },
  {
    id: 68,
    codigo: "1554",
    descricao:
      "Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento",
  },
  {
    id: 69,
    codigo: "1555",
    descricao:
      "Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento",
  },
  {
    id: 70,
    codigo: "1556",
    descricao: "Compra de material para uso ou consumo",
  },
  {
    id: 71,
    codigo: "1557",
    descricao: "Transferência de material para uso ou consumo",
  },
  {
    id: 72,
    codigo: "1601",
    descricao: "Recebimento, por transferência, de crédito de ICMS",
  },
  {
    id: 73,
    codigo: "1602",
    descricao:
      "Recebimento, por transferência, de saldo credor de ICMS de outro estabelecimento da mesma empresa, para compensação de saldo devedor de ICMS",
  },
  {
    id: 74,
    codigo: "1603",
    descricao: "Ressarcimento de ICMS retido por substituição tributária",
  },
  {
    id: 75,
    codigo: "1604",
    descricao:
      "Lançamento do crédito relativo à compra de bem para o ativo imobilizado",
  },
  {
    id: 76,
    codigo: "1605",
    descricao:
      "Recebimento, por transferência, de saldo devedor de ICMS de outro estabelecimento da mesma empresa.",
  },
  {
    id: 77,
    codigo: "1651",
    descricao:
      "Compra de combustível ou lubrificante para industrialização subseqüente",
  },
  {
    id: 78,
    codigo: "1652",
    descricao: "Compra de combustível ou lubrificante para comercialização",
  },
  {
    id: 79,
    codigo: "1653",
    descricao:
      "Compra de combustível ou lubrificante por consumidor ou usuário final",
  },
  {
    id: 80,
    codigo: "1658",
    descricao:
      "Transferência de combustível e lubrificante para industrialização",
  },
  {
    id: 81,
    codigo: "1659",
    descricao:
      "Transferência de combustível e lubrificante para comercialização",
  },
  {
    id: 82,
    codigo: "1660",
    descricao:
      "Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente",
  },
  {
    id: 83,
    codigo: "1661",
    descricao:
      "Devolução de venda de combustível ou lubrificante destinado à comercialização",
  },
  {
    id: 84,
    codigo: "1662",
    descricao:
      "Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final",
  },
  {
    id: 85,
    codigo: "1663",
    descricao: "Entrada de combustível ou lubrificante para armazenagem",
  },
  {
    id: 86,
    codigo: "1664",
    descricao:
      "Retorno de combustível ou lubrificante remetido para armazenagem",
  },
  {
    id: 87,
    codigo: "1901",
    descricao: "Entrada para industrialização por encomenda",
  },
  {
    id: 88,
    codigo: "1902",
    descricao:
      "Retorno de mercadoria remetida para industrialização por encomenda",
  },
  {
    id: 89,
    codigo: "1903",
    descricao:
      "Entrada de mercadoria remetida para industrialização e não aplicada no referido processo",
  },
  {
    id: 90,
    codigo: "1904",
    descricao: "Retorno de remessa para venda fora do estabelecimento",
  },
  {
    id: 91,
    codigo: "1905",
    descricao:
      "Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral",
  },
  {
    id: 92,
    codigo: "1906",
    descricao:
      "Retorno de mercadoria remetida para depósito fechado ou armazém geral",
  },
  {
    id: 93,
    codigo: "1907",
    descricao:
      "Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral",
  },
  {
    id: 94,
    codigo: "1908",
    descricao: "Entrada de bem por conta de contrato de comodato",
  },
  {
    id: 95,
    codigo: "1909",
    descricao: "Retorno de bem remetido por conta de contrato de comodato",
  },
  {
    id: 96,
    codigo: "1910",
    descricao: "Entrada de bonificação, doação ou brinde",
  },
  { id: 97, codigo: "1911", descricao: "Entrada de amostra grátis" },
  {
    id: 98,
    codigo: "1912",
    descricao: "Entrada de mercadoria ou bem recebido para demonstração",
  },
  {
    id: 99,
    codigo: "1913",
    descricao: "Retorno de mercadoria ou bem remetido para demonstração",
  },
  {
    id: 100,
    codigo: "1914",
    descricao: "Retorno de mercadoria ou bem remetido para exposição ou feira",
  },
  {
    id: 101,
    codigo: "1915",
    descricao: "Entrada de mercadoria ou bem recebido para conserto ou reparo",
  },
  {
    id: 102,
    codigo: "1916",
    descricao: "Retorno de mercadoria ou bem remetido para conserto ou reparo",
  },
  {
    id: 103,
    codigo: "1917",
    descricao:
      "Entrada de mercadoria recebida em consignação mercantil ou industrial",
  },
  {
    id: 104,
    codigo: "1918",
    descricao:
      "Devolução de mercadoria remetida em consignação mercantil ou industrial",
  },
  {
    id: 105,
    codigo: "1919",
    descricao:
      "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial",
  },
  { id: 106, codigo: "1920", descricao: "Entrada de vasilhame ou sacaria" },
  { id: 107, codigo: "1921", descricao: "Retorno de vasilhame ou sacaria" },
  {
    id: 108,
    codigo: "1922",
    descricao:
      "Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro",
  },
  {
    id: 109,
    codigo: "1923",
    descricao:
      "Entrada de mercadoria recebida do vendedor remetente, em venda à ordem",
  },
  {
    id: 110,
    codigo: "1924",
    descricao:
      "Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 111,
    codigo: "1925",
    descricao:
      "Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 112,
    codigo: "1926",
    descricao:
      "Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação",
  },
  {
    id: 113,
    codigo: "1931",
    descricao:
      "Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (Ajuste SINIEF 03/04)",
  },
  {
    id: 114,
    codigo: "1932",
    descricao:
      "Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)",
  },
  {
    id: 115,
    codigo: "1933",
    descricao:
      "Aquisição de serviço tributado pelo ISSQN.(ajuste sinief 03/04)",
  },
  {
    id: 116,
    codigo: "1934",
    descricao:
      "Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral",
  },
  {
    id: 117,
    codigo: "1949",
    descricao:
      "Outra entrada de mercadoria ou prestação de serviço não especificada",
  },
  { id: 118, codigo: "2101", descricao: "Compra para industrialização" },
  { id: 119, codigo: "2102", descricao: "Compra para comercialização" },
  {
    id: 120,
    codigo: "2111",
    descricao:
      "Compra para industrialização de mercadoria recebida anteriormente em consignação industrial",
  },
  {
    id: 121,
    codigo: "2113",
    descricao:
      "Compra para comercialização, de mercadoria recebida anteriormente em consignação mercantil",
  },
  {
    id: 122,
    codigo: "2116",
    descricao:
      "Compra para industrialização originada de encomenda para recebimento futuro",
  },
  {
    id: 123,
    codigo: "2117",
    descricao:
      "Compra para comercialização originada de encomenda para recebimento futuro",
  },
  {
    id: 124,
    codigo: "2118",
    descricao:
      "Compra de mercadoria para comercialização pelo adquirente originário, entregue pelo vendedor remetente ao destinatário, em venda à ordem",
  },
  {
    id: 125,
    codigo: "2120",
    descricao:
      "Compra para industrialização, em venda à ordem, já recebida do vendedor remetente",
  },
  {
    id: 126,
    codigo: "2121",
    descricao:
      "Compra para comercialização, em venda à ordem, já recebida do vendedor remetente",
  },
  {
    id: 127,
    codigo: "2122",
    descricao:
      "Compra para industrialização em que a mercadoria foi remetida pelo fornecedor ao industrializador sem transitar pelo estabelecimento adquirente",
  },
  {
    id: 128,
    codigo: "2124",
    descricao: "Industrialização efetuada por outra empresa",
  },
  {
    id: 129,
    codigo: "2125",
    descricao:
      "Industrialização efetuada por outra empresa quando a mercadoria remetida para utilização no processo de industrialização não transitou pelo estabelecimento adquirente da mercadoria",
  },
  {
    id: 130,
    codigo: "2126",
    descricao: "Compra para utilização na prestação de serviço",
  },
  {
    id: 131,
    codigo: "2128",
    descricao:
      "Compra para utilização na prestação de serviço sujeita ao ISSQN",
  },
  { id: 132, codigo: "2151", descricao: "Transferência para industrialização" },
  { id: 133, codigo: "2152", descricao: "Transferência para comercialização" },
  {
    id: 134,
    codigo: "2153",
    descricao: "Transferência de energia elétrica para distribuição",
  },
  {
    id: 135,
    codigo: "2154",
    descricao: "Transferência para utilização na prestação de serviço",
  },
  {
    id: 136,
    codigo: "2201",
    descricao: "Devolução de venda de produção do estabelecimento",
  },
  {
    id: 137,
    codigo: "2202",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    id: 138,
    codigo: "2203",
    descricao:
      "Devolução de venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 139,
    codigo: "2204",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 140,
    codigo: "2205",
    descricao:
      "Anulação de valor relativo à prestação de serviço de comunicação",
  },
  {
    id: 141,
    codigo: "2206",
    descricao:
      "Anulação de valor relativo à prestação de serviço de transporte",
  },
  {
    id: 142,
    codigo: "2207",
    descricao: "Anulação de valor relativo à venda de energia elétrica",
  },
  {
    id: 143,
    codigo: "2208",
    descricao:
      "Devolução de produção do estabelecimento, remetida em transferência",
  },
  {
    id: 144,
    codigo: "2209",
    descricao:
      "Devolução de mercadoria adquirida ou recebida de terceiros, remetida em transferência",
  },
  {
    id: 145,
    codigo: "2251",
    descricao:
      "Compra de energia elétrica para distribuição ou comercialização",
  },
  {
    id: 146,
    codigo: "2252",
    descricao: "Compra de energia elétrica por estabelecimento industrial",
  },
  {
    id: 147,
    codigo: "2253",
    descricao: "Compra de energia elétrica por estabelecimento comercial",
  },
  {
    id: 148,
    codigo: "2254",
    descricao:
      "Compra de energia elétrica por estabelecimento prestador de serviço de transporte",
  },
  {
    id: 149,
    codigo: "2255",
    descricao:
      "Compra de energia elétrica por estabelecimento prestador de serviço de comunicação",
  },
  {
    id: 150,
    codigo: "2256",
    descricao:
      "Compra de energia elétrica por estabelecimento de produtor rural",
  },
  {
    id: 151,
    codigo: "2257",
    descricao: "Compra de energia elétrica para consumo por demanda contratada",
  },
  {
    id: 152,
    codigo: "2301",
    descricao:
      "Aquisição de serviço de comunicação para execução de serviço da mesma natureza",
  },
  {
    id: 153,
    codigo: "2302",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento industrial",
  },
  {
    id: 154,
    codigo: "2303",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento comercial",
  },
  {
    id: 155,
    codigo: "2304",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento de prestador de serviço de transporte",
  },
  {
    id: 156,
    codigo: "2305",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 157,
    codigo: "2306",
    descricao:
      "Aquisição de serviço de comunicação por estabelecimento de produtor rural",
  },
  {
    id: 158,
    codigo: "2351",
    descricao:
      "Aquisição de serviço de transporte para execução de serviço da mesma natureza",
  },
  {
    id: 159,
    codigo: "2352",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento industrial",
  },
  {
    id: 160,
    codigo: "2353",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento comercial",
  },
  {
    id: 161,
    codigo: "2354",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação",
  },
  {
    id: 162,
    codigo: "2355",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 163,
    codigo: "2356",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de produtor rural",
  },
  {
    id: 164,
    codigo: "2401",
    descricao:
      "Compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 165,
    codigo: "2403",
    descricao:
      "Compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 166,
    codigo: "2406",
    descricao:
      "Compra de bem para o ativo imobilizado cuja mercadoria está sujeita ao regime de substituição tributária",
  },
  {
    id: 167,
    codigo: "2407",
    descricao:
      "Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária",
  },
  {
    id: 168,
    codigo: "2408",
    descricao:
      "Transferência para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 169,
    codigo: "2409",
    descricao:
      "Transferência para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 170,
    codigo: "2410",
    descricao:
      "Devolução de venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 171,
    codigo: "2411",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 172,
    codigo: "2414",
    descricao:
      "Retorno de produção do estabelecimento, remetida para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 173,
    codigo: "2415",
    descricao:
      "Retorno de mercadoria adquirida ou recebida de terceiros, remetida para venda fora do estabelecimento em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 174,
    codigo: "2501",
    descricao:
      "Entrada de mercadoria recebida com fim específico de exportação",
  },
  {
    id: 175,
    codigo: "2503",
    descricao:
      "Entrada decorrente de devolução de produto remetido com fim específico de exportação, de produção do estabelecimento",
  },
  {
    id: 176,
    codigo: "2504",
    descricao:
      "Entrada decorrente de devolução de mercadoria remetida com fim específico de exportação, adquirida ou recebida de terceiros",
  },
  {
    id: 177,
    codigo: "2505",
    descricao:
      "Entrada decorrente de devolução simbólica de mercadorias remetidas para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
  },
  {
    id: 178,
    codigo: "2506",
    descricao:
      "Entrada decorrente de devolução simbólica de mercadorias, adquiridas ou recebidas de terceiros, remetidas para formação de lote de exportação.",
  },
  {
    id: 179,
    codigo: "2551",
    descricao: "Compra de bem para o ativo imobilizado",
  },
  {
    id: 180,
    codigo: "2552",
    descricao: "Transferência de bem do ativo imobilizado",
  },
  {
    id: 181,
    codigo: "2553",
    descricao: "Devolução de venda de bem do ativo imobilizado",
  },
  {
    id: 182,
    codigo: "2554",
    descricao:
      "Retorno de bem do ativo imobilizado remetido para uso fora do estabelecimento",
  },
  {
    id: 183,
    codigo: "2555",
    descricao:
      "Entrada de bem do ativo imobilizado de terceiro, remetido para uso no estabelecimento",
  },
  {
    id: 184,
    codigo: "2556",
    descricao: "Compra de material para uso ou consumo",
  },
  {
    id: 185,
    codigo: "2557",
    descricao: "Transferência de material para uso ou consumo",
  },
  {
    id: 186,
    codigo: "2603",
    descricao: "Ressarcimento de ICMS retido por substituição tributária",
  },
  {
    id: 187,
    codigo: "2651",
    descricao:
      "Compra de combustível ou lubrificante para industrialização subseqüente",
  },
  {
    id: 188,
    codigo: "2652",
    descricao: "Compra de combustível ou lubrificante para comercialização",
  },
  {
    id: 189,
    codigo: "2653",
    descricao:
      "Compra de combustível ou lubrificante por consumidor ou usuário final",
  },
  {
    id: 190,
    codigo: "2658",
    descricao:
      "Transferência de combustível e lubrificante para industrialização",
  },
  {
    id: 191,
    codigo: "2659",
    descricao:
      "Transferência de combustível e lubrificante para comercialização",
  },
  {
    id: 192,
    codigo: "2660",
    descricao:
      "Devolução de venda de combustível ou lubrificante destinado à industrialização subseqüente",
  },
  {
    id: 193,
    codigo: "2661",
    descricao:
      "Devolução de venda de combustível ou lubrificante destinado à comercialização",
  },
  {
    id: 194,
    codigo: "2662",
    descricao:
      "Devolução de venda de combustível ou lubrificante destinado a consumidor ou usuário final",
  },
  {
    id: 195,
    codigo: "2663",
    descricao: "Entrada de combustível ou lubrificante para armazenagem",
  },
  {
    id: 196,
    codigo: "2664",
    descricao:
      "Retorno de combustível ou lubrificante remetido para armazenagem",
  },
  {
    id: 197,
    codigo: "2901",
    descricao: "Entrada para industrialização por encomenda",
  },
  {
    id: 198,
    codigo: "2902",
    descricao:
      "Retorno de mercadoria remetida para industrialização por encomenda",
  },
  {
    id: 199,
    codigo: "2903",
    descricao:
      "Entrada de mercadoria remetida para industrialização e não aplicada no referido processo",
  },
  {
    id: 200,
    codigo: "2904",
    descricao: "Retorno de remessa para venda fora do estabelecimento",
  },
  {
    id: 201,
    codigo: "2905",
    descricao:
      "Entrada de mercadoria recebida para depósito em depósito fechado ou armazém geral",
  },
  {
    id: 202,
    codigo: "2906",
    descricao:
      "Retorno de mercadoria remetida para depósito fechado ou armazém geral",
  },
  {
    id: 203,
    codigo: "2907",
    descricao:
      "Retorno simbólico de mercadoria remetida para depósito fechado ou armazém geral",
  },
  {
    id: 204,
    codigo: "2908",
    descricao: "Entrada de bem por conta de contrato de comodato",
  },
  {
    id: 205,
    codigo: "2909",
    descricao: "Retorno de bem remetido por conta de contrato de comodato",
  },
  {
    id: 206,
    codigo: "2910",
    descricao: "Entrada de bonificação, doação ou brinde",
  },
  { id: 207, codigo: "2911", descricao: "Entrada de amostra grátis" },
  {
    id: 208,
    codigo: "2912",
    descricao: "Entrada de mercadoria ou bem recebido para demonstração",
  },
  {
    id: 209,
    codigo: "2913",
    descricao: "Retorno de mercadoria ou bem remetido para demonstração",
  },
  {
    id: 210,
    codigo: "2914",
    descricao: "Retorno de mercadoria ou bem remetido para exposição ou feira",
  },
  {
    id: 211,
    codigo: "2915",
    descricao: "Entrada de mercadoria ou bem recebido para conserto ou reparo",
  },
  {
    id: 212,
    codigo: "2916",
    descricao: "Retorno de mercadoria ou bem remetido para conserto ou reparo",
  },
  {
    id: 213,
    codigo: "2917",
    descricao:
      "Entrada de mercadoria recebida em consignação mercantil ou industrial",
  },
  {
    id: 214,
    codigo: "2918",
    descricao:
      "Devolução de mercadoria remetida em consignação mercantil ou industrial",
  },
  {
    id: 215,
    codigo: "2919",
    descricao:
      "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, remetida anteriormente em consignação mercantil ou industrial",
  },
  { id: 216, codigo: "2920", descricao: "Entrada de vasilhame ou sacaria" },
  { id: 217, codigo: "2921", descricao: "Retorno de vasilhame ou sacaria" },
  {
    id: 218,
    codigo: "2922",
    descricao:
      "Lançamento efetuado a título de simples faturamento decorrente de compra para recebimento futuro",
  },
  {
    id: 219,
    codigo: "2923",
    descricao:
      "Entrada de mercadoria recebida do vendedor remetente, em venda à ordem",
  },
  {
    id: 220,
    codigo: "2924",
    descricao:
      "Entrada para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 221,
    codigo: "2925",
    descricao:
      "Retorno de mercadoria remetida para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 222,
    codigo: "2931",
    descricao:
      "Lançamento efetuado pelo tomador do serviço de transporte quando a responsabilidade de retenção do imposto for atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço. (ajuste sinief 03/04)",
  },
  {
    id: 223,
    codigo: "2932",
    descricao:
      "Aquisição de serviço de transporte iniciado em unidade da Federação diversa daquela onde inscrito o prestador. (ajuste sinief 03/04)",
  },
  {
    id: 224,
    codigo: "2933",
    descricao:
      "Aquisição de serviço tributado pelo ISSQN. (ajuste sinief 03/04)",
  },
  {
    id: 225,
    codigo: "2934",
    descricao:
      "Entrada simbólica de mercadoria recebida para depósito fechado ou armazém geral",
  },
  {
    id: 226,
    codigo: "2949",
    descricao:
      "Outra entrada de mercadoria ou prestação de serviço não especificado",
  },
  { id: 227, codigo: "3101", descricao: "Compra para industrialização" },
  { id: 228, codigo: "3102", descricao: "Compra para comercialização" },
  {
    id: 229,
    codigo: "3126",
    descricao: "Compra para utilização na prestação de serviço",
  },
  {
    id: 230,
    codigo: "3127",
    descricao: "Compra para industrialização sob o regime de drawback",
  },
  {
    id: 231,
    codigo: "3128",
    descricao:
      "Compra para utilização na prestação de serviço sujeita ao ISSQN",
  },
  {
    id: 232,
    codigo: "3201",
    descricao: "Devolução de venda de produção do estabelecimento",
  },
  {
    id: 233,
    codigo: "3202",
    descricao:
      "Devolução de venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    id: 234,
    codigo: "3205",
    descricao:
      "Anulação de valor relativo à prestação de serviço de comunicação",
  },
  {
    id: 235,
    codigo: "3206",
    descricao:
      "Anulação de valor relativo à prestação de serviço de transporte",
  },
  {
    id: 236,
    codigo: "3207",
    descricao: "Anulação de valor relativo à venda de energia elétrica",
  },
  {
    id: 237,
    codigo: "3211",
    descricao:
      "Devolução de venda de produção do estabelecimento sob o regime de drawback",
  },
  {
    id: 238,
    codigo: "3251",
    descricao:
      "Compra de energia elétrica para distribuição ou comercialização",
  },
  {
    id: 239,
    codigo: "3301",
    descricao:
      "Aquisição de serviço de comunicação para execução de serviço da mesma natureza",
  },
  {
    id: 240,
    codigo: "3351",
    descricao:
      "Aquisição de serviço de transporte para execução de serviço da mesma natureza",
  },
  {
    id: 241,
    codigo: "3352",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento industrial",
  },
  {
    id: 242,
    codigo: "3353",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento comercial",
  },
  {
    id: 243,
    codigo: "3354",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de prestador de serviço de comunicação",
  },
  {
    id: 244,
    codigo: "3355",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 245,
    codigo: "3356",
    descricao:
      "Aquisição de serviço de transporte por estabelecimento de produtor rural",
  },
  {
    id: 246,
    codigo: "3503",
    descricao:
      "Devolução de mercadoria exportada que tenha sido recebida com fim específico de exportação",
  },
  {
    id: 247,
    codigo: "3551",
    descricao: "Compra de bem para o ativo imobilizado",
  },
  {
    id: 248,
    codigo: "3553",
    descricao: "Devolução de venda de bem do ativo imobilizado",
  },
  {
    id: 249,
    codigo: "3556",
    descricao: "Compra de material para uso ou consumo",
  },
  {
    id: 250,
    codigo: "3651",
    descricao:
      "Compra de combustível ou lubrificante para industrialização subseqüente",
  },
  {
    id: 251,
    codigo: "3652",
    descricao: "Compra de combustível ou lubrificante para comercialização",
  },
  {
    id: 252,
    codigo: "3653",
    descricao:
      "Compra de combustível ou lubrificante por consumidor ou usuário final",
  },
  {
    id: 253,
    codigo: "3930",
    descricao:
      "Lançamento efetuado a título de entrada de bem sob amparo de regime especial aduaneiro de admissão temporária",
  },
  {
    id: 254,
    codigo: "3949",
    descricao:
      "Outra entrada de mercadoria ou prestação de serviço não especificado",
  },
  {
    id: 255,
    codigo: "5101",
    descricao: "Venda de produção do estabelecimento",
  },
  {
    id: 256,
    codigo: "5102",
    descricao: "Venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    id: 257,
    codigo: "5103",
    descricao:
      "Venda de produção do estabelecimento, efetuada fora do estabelecimento",
  },
  {
    id: 258,
    codigo: "5104",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento",
  },
  {
    id: 259,
    codigo: "5105",
    descricao:
      "Venda de produção do estabelecimento que não deva por ele transitar",
  },
  {
    id: 260,
    codigo: "5106",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
  },
  {
    id: 261,
    codigo: "5109",
    descricao:
      "Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 262,
    codigo: "5110",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 263,
    codigo: "5111",
    descricao:
      "Venda de produção do estabelecimento remetida anteriormente em consignação industrial",
  },
  {
    id: 264,
    codigo: "5112",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação industrial",
  },
  {
    id: 265,
    codigo: "5113",
    descricao:
      "Venda de produção do estabelecimento remetida anteriormente em consignação mercantil",
  },
  {
    id: 266,
    codigo: "5114",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil",
  },
  {
    id: 267,
    codigo: "5115",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil",
  },
  {
    id: 268,
    codigo: "5116",
    descricao:
      "Venda de produção do estabelecimento originada de encomenda para entrega futura",
  },
  {
    id: 269,
    codigo: "5117",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura",
  },
  {
    id: 270,
    codigo: "5118",
    descricao:
      "Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
  },
  {
    id: 271,
    codigo: "5119",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
  },
  {
    id: 272,
    codigo: "5120",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem",
  },
  {
    id: 273,
    codigo: "5122",
    descricao:
      "Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
  },
  {
    id: 274,
    codigo: "5123",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
  },
  {
    id: 275,
    codigo: "5124",
    descricao: "Industrialização efetuada para outra empresa",
  },
  {
    id: 276,
    codigo: "5125",
    descricao:
      "Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria",
  },
  {
    id: 277,
    codigo: "5151",
    descricao: "Transferência de produção do estabelecimento",
  },
  {
    id: 278,
    codigo: "5152",
    descricao: "Transferência de mercadoria adquirida ou recebida de terceiros",
  },
  { id: 279, codigo: "5153", descricao: "Transferência de energia elétrica" },
  {
    id: 280,
    codigo: "5155",
    descricao:
      "Transferência de produção do estabelecimento, que não deva por ele transitar",
  },
  {
    id: 281,
    codigo: "5156",
    descricao:
      "Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
  },
  {
    id: 282,
    codigo: "5201",
    descricao: "Devolução de compra para industrialização",
  },
  {
    id: 283,
    codigo: "5202",
    descricao: "Devolução de compra para comercialização",
  },
  {
    id: 284,
    codigo: "5205",
    descricao:
      "Anulação de valor relativo a aquisição de serviço de comunicação",
  },
  {
    id: 285,
    codigo: "5206",
    descricao:
      "Anulação de valor relativo a aquisição de serviço de transporte",
  },
  {
    id: 286,
    codigo: "5207",
    descricao: "Anulação de valor relativo à compra de energia elétrica",
  },
  {
    id: 287,
    codigo: "5208",
    descricao:
      "Devolução de mercadoria recebida em transferência para industrialização",
  },
  {
    id: 288,
    codigo: "5209",
    descricao:
      "Devolução de mercadoria recebida em transferência para comercialização",
  },
  {
    id: 289,
    codigo: "5210",
    descricao: "Devolução de compra para utilização na prestação de serviço",
  },
  {
    id: 290,
    codigo: "5251",
    descricao: "Venda de energia elétrica para distribuição ou comercialização",
  },
  {
    id: 291,
    codigo: "5252",
    descricao: "Venda de energia elétrica para estabelecimento industrial",
  },
  {
    id: 292,
    codigo: "5253",
    descricao: "Venda de energia elétrica para estabelecimento comercial",
  },
  {
    id: 293,
    codigo: "5254",
    descricao:
      "Venda de energia elétrica para estabelecimento prestador de serviço de transporte",
  },
  {
    id: 294,
    codigo: "5255",
    descricao:
      "Venda de energia elétrica para estabelecimento prestador de serviço de comunicação",
  },
  {
    id: 295,
    codigo: "5256",
    descricao:
      "Venda de energia elétrica para estabelecimento de produtor rural",
  },
  {
    id: 296,
    codigo: "5257",
    descricao: "Venda de energia elétrica para consumo por demanda contratada",
  },
  {
    id: 297,
    codigo: "5258",
    descricao: "Venda de energia elétrica a não contribuinte",
  },
  {
    id: 298,
    codigo: "5301",
    descricao:
      "Prestação de serviço de comunicação para execução de serviço da mesma natureza",
  },
  {
    id: 299,
    codigo: "5302",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento industrial",
  },
  {
    id: 300,
    codigo: "5303",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento comercial",
  },
  {
    id: 301,
    codigo: "5304",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte",
  },
  {
    id: 302,
    codigo: "5305",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 303,
    codigo: "5306",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento de produtor rural",
  },
  {
    id: 304,
    codigo: "5307",
    descricao: "Prestação de serviço de comunicação a não contribuinte",
  },
  {
    id: 305,
    codigo: "5351",
    descricao:
      "Prestação de serviço de transporte para execução de serviço da mesma natureza",
  },
  {
    id: 306,
    codigo: "5352",
    descricao:
      "Prestação de serviço de transporte a estabelecimento industrial",
  },
  {
    id: 307,
    codigo: "5353",
    descricao: "Prestação de serviço de transporte a estabelecimento comercial",
  },
  {
    id: 308,
    codigo: "5354",
    descricao:
      "Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação",
  },
  {
    id: 309,
    codigo: "5355",
    descricao:
      "Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 310,
    codigo: "5356",
    descricao:
      "Prestação de serviço de transporte a estabelecimento de produtor rural",
  },
  {
    id: 311,
    codigo: "5357",
    descricao: "Prestação de serviço de transporte a não contribuinte",
  },
  {
    id: 312,
    codigo: "5359",
    descricao:
      "Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)",
  },
  {
    id: 313,
    codigo: "5360",
    descricao:
      "Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte.",
  },
  {
    id: 314,
    codigo: "5401",
    descricao:
      "Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto",
  },
  {
    id: 315,
    codigo: "5402",
    descricao:
      "Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto",
  },
  {
    id: 316,
    codigo: "5403",
    descricao:
      "Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituto",
  },
  {
    id: 317,
    codigo: "5405",
    descricao:
      "Venda de mercadoria, adquirida ou recebida de terceiros, sujeita ao regime de substituição tributária, na condição de contribuinte-substituído",
  },
  {
    id: 318,
    codigo: "5408",
    descricao:
      "Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 319,
    codigo: "5409",
    descricao:
      "Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 320,
    codigo: "5410",
    descricao:
      "Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 321,
    codigo: "5411",
    descricao:
      "Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 322,
    codigo: "5412",
    descricao:
      "Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 323,
    codigo: "5413",
    descricao:
      "Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária.",
  },
  {
    id: 324,
    codigo: "5414",
    descricao:
      "Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 325,
    codigo: "5415",
    descricao:
      "Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 326,
    codigo: "5451",
    descricao: "Remessa de animal e de insumo para estabelecimento produtor",
  },
  {
    id: 327,
    codigo: "5501",
    descricao:
      "Remessa de produção do estabelecimento, com fim específico de exportação",
  },
  {
    id: 328,
    codigo: "5502",
    descricao:
      "Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação",
  },
  {
    id: 329,
    codigo: "5503",
    descricao:
      "Devolução de mercadoria recebida com fim específico de exportação",
  },
  {
    id: 330,
    codigo: "5504",
    descricao:
      "Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
  },
  {
    id: 331,
    codigo: "5505",
    descricao:
      "Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação",
  },
  { id: 332, codigo: "5551", descricao: "Venda de bem do ativo imobilizado" },
  {
    id: 333,
    codigo: "5552",
    descricao: "Transferência de bem do ativo imobilizado",
  },
  {
    id: 334,
    codigo: "5553",
    descricao: "Devolução de compra de bem para o ativo imobilizado",
  },
  {
    id: 335,
    codigo: "5554",
    descricao:
      "Remessa de bem do ativo imobilizado para uso fora do estabelecimento",
  },
  {
    id: 336,
    codigo: "5555",
    descricao:
      "Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento",
  },
  {
    id: 337,
    codigo: "5556",
    descricao: "Devolução de compra de material de uso ou consumo",
  },
  {
    id: 338,
    codigo: "5557",
    descricao: "Transferência de material de uso ou consumo",
  },
  {
    id: 339,
    codigo: "5601",
    descricao: "Transferência de crédito de ICMS acumulado",
  },
  {
    id: 340,
    codigo: "5602",
    descricao:
      "Transferência de saldo credor de ICMS para outro estabelecimento da mesma empresa, destinado à compensação de saldo devedor de ICMS",
  },
  {
    id: 341,
    codigo: "5603",
    descricao: "Ressarcimento de ICMS retido por substituição tributária",
  },
  {
    id: 342,
    codigo: "5605",
    descricao:
      "Transferência de saldo devedor de ICMS de outro estabelecimento da mesma empresa. (ajuste sinief 03/04)",
  },
  {
    id: 343,
    codigo: "5606",
    descricao:
      "Utilização de saldo credor de ICMS para extinção por compensação de débitos fiscais.",
  },
  {
    id: 344,
    codigo: "5651",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente",
  },
  {
    id: 345,
    codigo: "5652",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização",
  },
  {
    id: 346,
    codigo: "5653",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final",
  },
  {
    id: 347,
    codigo: "5654",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente",
  },
  {
    id: 348,
    codigo: "5655",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização",
  },
  {
    id: 349,
    codigo: "5656",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final",
  },
  {
    id: 350,
    codigo: "5657",
    descricao:
      "Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento",
  },
  {
    id: 351,
    codigo: "5658",
    descricao:
      "Transferência de combustível ou lubrificante de produção do estabelecimento",
  },
  {
    id: 352,
    codigo: "5659",
    descricao:
      "Transferência de combustível ou lubrificante adquirido ou recebido de terceiro",
  },
  {
    id: 353,
    codigo: "5660",
    descricao:
      "Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente",
  },
  {
    id: 354,
    codigo: "5661",
    descricao:
      "Devolução de compra de combustível ou lubrificante adquirido para comercialização",
  },
  {
    id: 355,
    codigo: "5662",
    descricao:
      "Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final",
  },
  {
    id: 356,
    codigo: "5663",
    descricao: "Remessa para armazenagem de combustível ou lubrificante",
  },
  {
    id: 357,
    codigo: "5664",
    descricao:
      "Retorno de combustível ou lubrificante recebido para armazenagem",
  },
  {
    id: 358,
    codigo: "5665",
    descricao:
      "Retorno simbólico de combustível ou lubrificante recebido para armazenagem",
  },
  {
    id: 359,
    codigo: "5666",
    descricao:
      "Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem",
  },
  {
    id: 360,
    codigo: "5667",
    descricao:
      "Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação",
  },
  {
    id: 361,
    codigo: "5901",
    descricao: "Remessa para industrialização por encomenda",
  },
  {
    id: 362,
    codigo: "5902",
    descricao:
      "Retorno de mercadoria utilizada na industrialização por encomenda",
  },
  {
    id: 363,
    codigo: "5903",
    descricao:
      "Retorno de mercadoria recebida para industrialização e não aplicada no referido processo",
  },
  {
    id: 364,
    codigo: "5904",
    descricao: "Remessa para venda fora do estabelecimento",
  },
  {
    id: 365,
    codigo: "5905",
    descricao: "Remessa para depósito fechado ou armazém geral",
  },
  {
    id: 366,
    codigo: "5906",
    descricao:
      "Retorno de mercadoria depositada em depósito fechado ou armazém geral",
  },
  {
    id: 367,
    codigo: "5907",
    descricao:
      "Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral",
  },
  {
    id: 368,
    codigo: "5908",
    descricao: "Remessa de bem por conta de contrato de comodato",
  },
  {
    id: 369,
    codigo: "5909",
    descricao: "Retorno de bem recebido por conta de contrato de comodato",
  },
  {
    id: 370,
    codigo: "5910",
    descricao: "Remessa em bonificação, doação ou brinde",
  },
  { id: 371, codigo: "5911", descricao: "Remessa de amostra grátis" },
  {
    id: 372,
    codigo: "5912",
    descricao: "Remessa de mercadoria ou bem para demonstração",
  },
  {
    id: 373,
    codigo: "5913",
    descricao: "Retorno de mercadoria ou bem recebido para demonstração",
  },
  {
    id: 374,
    codigo: "5914",
    descricao: "Remessa de mercadoria ou bem para exposição ou feira",
  },
  {
    id: 375,
    codigo: "5915",
    descricao: "Remessa de mercadoria ou bem para conserto ou reparo",
  },
  {
    id: 376,
    codigo: "5916",
    descricao: "Retorno de mercadoria ou bem recebido para conserto ou reparo",
  },
  {
    id: 377,
    codigo: "5917",
    descricao: "Remessa de mercadoria em consignação mercantil ou industrial",
  },
  {
    id: 378,
    codigo: "5918",
    descricao:
      "Devolução de mercadoria recebida em consignação mercantil ou industrial",
  },
  {
    id: 379,
    codigo: "5919",
    descricao:
      "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial",
  },
  { id: 380, codigo: "5920", descricao: "Remessa de vasilhame ou sacaria" },
  { id: 381, codigo: "5921", descricao: "Devolução de vasilhame ou sacaria" },
  {
    id: 382,
    codigo: "5922",
    descricao:
      "Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura",
  },
  {
    id: 383,
    codigo: "5923",
    descricao:
      "Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado",
  },
  {
    id: 384,
    codigo: "5924",
    descricao:
      "Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 385,
    codigo: "5925",
    descricao:
      "Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 386,
    codigo: "5926",
    descricao:
      "Lançamento efetuado a título de reclassificação de mercadoria decorrente de formação de kit ou de sua desagregação",
  },
  {
    id: 387,
    codigo: "5927",
    descricao:
      "Lançamento efetuado a título de baixa de estoque decorrente de perda, roubo ou deterioração",
  },
  {
    id: 388,
    codigo: "5928",
    descricao:
      "Lançamento efetuado a título de baixa de estoque decorrente do encerramento da atividade da empresa",
  },
  {
    id: 389,
    codigo: "5929",
    descricao:
      "Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF",
  },
  {
    id: 390,
    codigo: "5931",
    descricao:
      "Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço",
  },
  {
    id: 391,
    codigo: "5932",
    descricao:
      "Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador",
  },
  {
    id: 392,
    codigo: "5933",
    descricao:
      "Prestação de serviço tributado pelo ISSQN. (ajuste sinief 03/04)",
  },
  {
    id: 393,
    codigo: "5934",
    descricao:
      "Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado",
  },
  {
    id: 394,
    codigo: "5949",
    descricao:
      "Outra saída de mercadoria ou prestação de serviço não especificado",
  },
  {
    id: 395,
    codigo: "6101",
    descricao: "Venda de produção do estabelecimento",
  },
  {
    id: 396,
    codigo: "6102",
    descricao: "Venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    id: 397,
    codigo: "6103",
    descricao:
      "Venda de produção do estabelecimento, efetuada fora do estabelecimento",
  },
  {
    id: 398,
    codigo: "6104",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, efetuada fora do estabelecimento",
  },
  {
    id: 399,
    codigo: "6105",
    descricao:
      "Venda de produção do estabelecimento que não deva por ele transitar",
  },
  {
    id: 400,
    codigo: "6106",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
  },
  {
    id: 401,
    codigo: "6107",
    descricao:
      "Venda de produção do estabelecimento, destinada a não contribuinte",
  },
  {
    id: 402,
    codigo: "6108",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, destinada a não contribuinte",
  },
  {
    id: 403,
    codigo: "6109",
    descricao:
      "Venda de produção do estabelecimento, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 404,
    codigo: "6110",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, destinada à Zona Franca de Manaus ou Áreas de Livre Comércio",
  },
  {
    id: 405,
    codigo: "6111",
    descricao:
      "Venda de produção do estabelecimento remetida anteriormente em consignação industrial",
  },
  {
    id: 406,
    codigo: "6112",
    descricao:
      "Venda de mercadoria adquirida ou recebida de Terceiros remetida anteriormente em consignação industrial",
  },
  {
    id: 407,
    codigo: "6113",
    descricao:
      "Venda de produção do estabelecimento remetida anteriormente em consignação mercantil",
  },
  {
    id: 408,
    codigo: "6114",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros remetida anteriormente em consignação mercantil",
  },
  {
    id: 409,
    codigo: "6115",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, recebida anteriormente em consignação mercantil",
  },
  {
    id: 410,
    codigo: "6116",
    descricao:
      "Venda de produção do estabelecimento originada de encomenda para entrega futura",
  },
  {
    id: 411,
    codigo: "6117",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, originada de encomenda para entrega futura",
  },
  {
    id: 412,
    codigo: "6118",
    descricao:
      "Venda de produção do estabelecimento entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
  },
  {
    id: 413,
    codigo: "6119",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário por conta e ordem do adquirente originário, em venda à ordem",
  },
  {
    id: 414,
    codigo: "6120",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros entregue ao destinatário pelo vendedor remetente, em venda à ordem",
  },
  {
    id: 415,
    codigo: "6122",
    descricao:
      "Venda de produção do estabelecimento remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
  },
  {
    id: 416,
    codigo: "6123",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros remetida para industrialização, por conta e ordem do adquirente, sem transitar pelo estabelecimento do adquirente",
  },
  {
    id: 417,
    codigo: "6124",
    descricao: "Industrialização efetuada para outra empresa",
  },
  {
    id: 418,
    codigo: "6125",
    descricao:
      "Industrialização efetuada para outra empresa quando a mercadoria recebida para utilização no processo de industrialização não transitar pelo estabelecimento adquirente da mercadoria",
  },
  {
    id: 419,
    codigo: "6151",
    descricao: "Transferência de produção do estabelecimento",
  },
  {
    id: 420,
    codigo: "6152",
    descricao: "Transferência de mercadoria adquirida ou recebida de terceiros",
  },
  { id: 421, codigo: "6153", descricao: "Transferência de energia elétrica" },
  {
    id: 422,
    codigo: "6155",
    descricao:
      "Transferência de produção do estabelecimento, que não deva por ele transitar",
  },
  {
    id: 423,
    codigo: "6156",
    descricao:
      "Transferência de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
  },
  {
    id: 424,
    codigo: "6201",
    descricao: "Devolução de compra para industrialização",
  },
  {
    id: 425,
    codigo: "6202",
    descricao: "Devolução de compra para comercialização",
  },
  {
    id: 426,
    codigo: "6205",
    descricao:
      "Anulação de valor relativo a aquisição de serviço de comunicação",
  },
  {
    id: 427,
    codigo: "6206",
    descricao:
      "Anulação de valor relativo a aquisição de serviço de transporte",
  },
  {
    id: 428,
    codigo: "6207",
    descricao: "Anulação de valor relativo à compra de energia elétrica",
  },
  {
    id: 429,
    codigo: "6208",
    descricao:
      "Devolução de mercadoria recebida em transferência para industrialização",
  },
  {
    id: 430,
    codigo: "6209",
    descricao:
      "Devolução de mercadoria recebida em transferência para comercialização",
  },
  {
    id: 431,
    codigo: "6210",
    descricao: "Devolução de compra para utilização na prestação de serviço",
  },
  {
    id: 432,
    codigo: "6251",
    descricao: "Venda de energia elétrica para distribuição ou comercialização",
  },
  {
    id: 433,
    codigo: "6252",
    descricao: "Venda de energia elétrica para estabelecimento industrial",
  },
  {
    id: 434,
    codigo: "6253",
    descricao: "Venda de energia elétrica para estabelecimento comercial",
  },
  {
    id: 435,
    codigo: "6254",
    descricao:
      "Venda de energia elétrica para estabelecimento prestador de serviço de transporte",
  },
  {
    id: 436,
    codigo: "6255",
    descricao:
      "Venda de energia elétrica para estabelecimento prestador de serviço de comunicação",
  },
  {
    id: 437,
    codigo: "6256",
    descricao:
      "Venda de energia elétrica para estabelecimento de produtor rural",
  },
  {
    id: 438,
    codigo: "6257",
    descricao: "Venda de energia elétrica para consumo por demanda contratada",
  },
  {
    id: 439,
    codigo: "6258",
    descricao: "Venda de energia elétrica a não contribuinte",
  },
  {
    id: 440,
    codigo: "6301",
    descricao:
      "Prestação de serviço de comunicação para execução de serviço da mesma natureza",
  },
  {
    id: 441,
    codigo: "6302",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento industrial",
  },
  {
    id: 442,
    codigo: "6303",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento comercial",
  },
  {
    id: 443,
    codigo: "6304",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento de prestador de serviço de transporte",
  },
  {
    id: 444,
    codigo: "6305",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 445,
    codigo: "6306",
    descricao:
      "Prestação de serviço de comunicação a estabelecimento de produtor rural",
  },
  {
    id: 446,
    codigo: "6307",
    descricao: "Prestação de serviço de comunicação a não contribuinte",
  },
  {
    id: 447,
    codigo: "6351",
    descricao:
      "Prestação de serviço de transporte para execução de serviço da mesma natureza",
  },
  {
    id: 448,
    codigo: "6352",
    descricao:
      "Prestação de serviço de transporte a estabelecimento industrial",
  },
  {
    id: 449,
    codigo: "6353",
    descricao: "Prestação de serviço de transporte a estabelecimento comercial",
  },
  {
    id: 450,
    codigo: "6354",
    descricao:
      "Prestação de serviço de transporte a estabelecimento de prestador de serviço de comunicação",
  },
  {
    id: 451,
    codigo: "6355",
    descricao:
      "Prestação de serviço de transporte a estabelecimento de geradora ou de distribuidora de energia elétrica",
  },
  {
    id: 452,
    codigo: "6356",
    descricao:
      "Prestação de serviço de transporte a estabelecimento de produtor rural",
  },
  {
    id: 453,
    codigo: "6357",
    descricao: "Prestação de serviço de transporte a não contribuinte",
  },
  {
    id: 454,
    codigo: "6359",
    descricao:
      "Prestação de serviço de transporte a contribuinte ou a não contribuinte quando a mercadoria transportada está dispensada de emissão de nota fiscal. (ajuste sinief 03/04)",
  },
  {
    id: 455,
    codigo: "6360",
    descricao:
      "Prestação de serviço de transporte a contribuinte substituto em relação ao serviço de transporte",
  },
  {
    id: 456,
    codigo: "6401",
    descricao:
      "Venda de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária, na condição de contribuinte substituto",
  },
  {
    id: 457,
    codigo: "6402",
    descricao:
      "Venda de produção do estabelecimento de produto sujeito ao regime de substituição tributária, em operação entre contribuintes substitutos do mesmo produto",
  },
  {
    id: 458,
    codigo: "6403",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária, na condição de contribuinte substituto",
  },
  {
    id: 459,
    codigo: "6404",
    descricao:
      "Venda de mercadoria sujeita ao regime de substituição tributária, cujo imposto já tenha sido retido anteriormente",
  },
  {
    id: 460,
    codigo: "6408",
    descricao:
      "Transferência de produção do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 461,
    codigo: "6409",
    descricao:
      "Transferência de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 462,
    codigo: "6410",
    descricao:
      "Devolução de compra para industrialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 463,
    codigo: "6411",
    descricao:
      "Devolução de compra para comercialização em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 464,
    codigo: "6412",
    descricao:
      "Devolução de bem do ativo imobilizado, em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 465,
    codigo: "6413",
    descricao:
      "Devolução de mercadoria destinada ao uso ou consumo, em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 466,
    codigo: "6414",
    descricao:
      "Remessa de produção do estabelecimento para venda fora do estabelecimento em operação com produto sujeito ao regime de substituição tributária",
  },
  {
    id: 467,
    codigo: "6415",
    descricao:
      "Remessa de mercadoria adquirida ou recebida de terceiros para venda fora do estabelecimento, em operação com mercadoria sujeita ao regime de substituição tributária",
  },
  {
    id: 468,
    codigo: "6501",
    descricao:
      "Remessa de produção do estabelecimento, com fim específico de exportação",
  },
  {
    id: 469,
    codigo: "6502",
    descricao:
      "Remessa de mercadoria adquirida ou recebida de terceiros, com fim específico de exportação",
  },
  {
    id: 470,
    codigo: "6503",
    descricao:
      "Devolução de mercadoria recebida com fim específico de exportação",
  },
  {
    id: 471,
    codigo: "6504",
    descricao:
      "Remessa de mercadorias para formação de lote de exportação, de produtos industrializados ou produzidos pelo próprio estabelecimento.",
  },
  {
    id: 472,
    codigo: "6505",
    descricao:
      "Remessa de mercadorias, adquiridas ou recebidas de terceiros, para formação de lote de exportação",
  },
  { id: 473, codigo: "6551", descricao: "Venda de bem do ativo imobilizado" },
  {
    id: 474,
    codigo: "6552",
    descricao: "Transferência de bem do ativo imobilizado",
  },
  {
    id: 475,
    codigo: "6553",
    descricao: "Devolução de compra de bem para o ativo imobilizado",
  },
  {
    id: 476,
    codigo: "6554",
    descricao:
      "Remessa de bem do ativo imobilizado para uso fora do estabelecimento",
  },
  {
    id: 477,
    codigo: "6555",
    descricao:
      "Devolução de bem do ativo imobilizado de terceiro, recebido para uso no estabelecimento",
  },
  {
    id: 478,
    codigo: "6556",
    descricao: "Devolução de compra de material de uso ou consumo",
  },
  {
    id: 479,
    codigo: "6557",
    descricao: "Transferência de material de uso ou consumo",
  },
  {
    id: 480,
    codigo: "6603",
    descricao: "Ressarcimento de ICMS retido por substituição tributária",
  },
  {
    id: 481,
    codigo: "6651",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente",
  },
  {
    id: 482,
    codigo: "6652",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado à comercialização",
  },
  {
    id: 483,
    codigo: "6653",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado a consumidor ou usuário final",
  },
  {
    id: 484,
    codigo: "6654",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente",
  },
  {
    id: 485,
    codigo: "6655",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à comercialização",
  },
  {
    id: 486,
    codigo: "6656",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado a consumidor ou usuário final",
  },
  {
    id: 487,
    codigo: "6657",
    descricao:
      "Remessa de combustível ou lubrificante adquirido ou recebido de terceiros para venda fora do estabelecimento",
  },
  {
    id: 488,
    codigo: "6658",
    descricao:
      "Transferência de combustível ou lubrificante de produção do estabelecimento",
  },
  {
    id: 489,
    codigo: "6659",
    descricao:
      "Transferência de combustível ou lubrificante adquirido ou recebido de terceiro",
  },
  {
    id: 490,
    codigo: "6660",
    descricao:
      "Devolução de compra de combustível ou lubrificante adquirido para industrialização subseqüente",
  },
  {
    id: 491,
    codigo: "6661",
    descricao:
      "Devolução de compra de combustível ou lubrificante adquirido para comercialização",
  },
  {
    id: 492,
    codigo: "6662",
    descricao:
      "Devolução de compra de combustível ou lubrificante adquirido por consumidor ou usuário final",
  },
  {
    id: 493,
    codigo: "6663",
    descricao: "Remessa para armazenagem de combustível ou lubrificante",
  },
  {
    id: 494,
    codigo: "6664",
    descricao:
      "Retorno de combustível ou lubrificante recebido para armazenagem",
  },
  {
    id: 495,
    codigo: "6665",
    descricao:
      "Retorno simbólico de combustível ou lubrificante recebido para armazenagem",
  },
  {
    id: 496,
    codigo: "6666",
    descricao:
      "Remessa por conta e ordem de terceiros de combustível ou lubrificante recebido para armazenagem",
  },
  {
    id: 497,
    codigo: "6667",
    descricao:
      "Venda de combustível ou lubrificante a consumidor ou usuário final estabelecido em outra unidade da Federação diferente a da que ocorrer o consumo",
  },
  {
    id: 498,
    codigo: "6901",
    descricao: "Remessa para industrialização por encomenda",
  },
  {
    id: 499,
    codigo: "6902",
    descricao:
      "Retorno de mercadoria utilizada na industrialização por encomenda",
  },
  {
    id: 500,
    codigo: "6903",
    descricao:
      "Retorno de mercadoria recebida para industrialização e não aplicada no referido processo",
  },
  {
    id: 501,
    codigo: "6904",
    descricao: "Remessa para venda fora do estabelecimento",
  },
  {
    id: 502,
    codigo: "6905",
    descricao: "Remessa para depósito fechado ou armazém geral",
  },
  {
    id: 503,
    codigo: "6906",
    descricao:
      "Retorno de mercadoria depositada em depósito fechado ou armazém geral",
  },
  {
    id: 504,
    codigo: "6907",
    descricao:
      "Retorno simbólico de mercadoria depositada em depósito fechado ou armazém geral",
  },
  {
    id: 505,
    codigo: "6908",
    descricao: "Remessa de bem por conta de contrato de comodato",
  },
  {
    id: 506,
    codigo: "6909",
    descricao: "Retorno de bem recebido por conta de contrato de comodato",
  },
  {
    id: 507,
    codigo: "6910",
    descricao: "Remessa em bonificação, doação ou brinde",
  },
  { id: 508, codigo: "6911", descricao: "Remessa de amostra grátis" },
  {
    id: 509,
    codigo: "6912",
    descricao: "Remessa de mercadoria ou bem para demonstração",
  },
  {
    id: 510,
    codigo: "6913",
    descricao: "Retorno de mercadoria ou bem recebido para demonstração",
  },
  {
    id: 511,
    codigo: "6914",
    descricao: "Remessa de mercadoria ou bem para exposição ou feira",
  },
  {
    id: 512,
    codigo: "6915",
    descricao: "Remessa de mercadoria ou bem para conserto ou reparo",
  },
  {
    id: 513,
    codigo: "6916",
    descricao: "Retorno de mercadoria ou bem recebido para conserto ou reparo",
  },
  {
    id: 514,
    codigo: "6917",
    descricao: "Remessa de mercadoria em consignação mercantil ou industrial",
  },
  {
    id: 515,
    codigo: "6918",
    descricao:
      "Devolução de mercadoria recebida em consignação mercantil ou industrial",
  },
  {
    id: 516,
    codigo: "6919",
    descricao:
      "Devolução simbólica de mercadoria vendida ou utilizada em processo industrial, recebida anteriormente em consignação mercantil ou industrial",
  },
  { id: 517, codigo: "6920", descricao: "Remessa de vasilhame ou sacaria" },
  { id: 518, codigo: "6921", descricao: "Devolução de vasilhame ou sacaria" },
  {
    id: 519,
    codigo: "6922",
    descricao:
      "Lançamento efetuado a título de simples faturamento decorrente de venda para entrega futura",
  },
  {
    id: 520,
    codigo: "6923",
    descricao:
      "Remessa de mercadoria por conta e ordem de terceiros, em venda à ordem ou em operações com armazém geral ou depósito fechado",
  },
  {
    id: 521,
    codigo: "6924",
    descricao:
      "Remessa para industrialização por conta e ordem do adquirente da mercadoria, quando esta não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 522,
    codigo: "6925",
    descricao:
      "Retorno de mercadoria recebida para industrialização por conta e ordem do adquirente da mercadoria, quando aquela não transitar pelo estabelecimento do adquirente",
  },
  {
    id: 523,
    codigo: "6929",
    descricao:
      "Lançamento efetuado em decorrência de emissão de documento fiscal relativo a operação ou prestação também registrada em equipamento Emissor de Cupom Fiscal - ECF",
  },
  {
    id: 524,
    codigo: "6931",
    descricao:
      "Lançamento efetuado em decorrência da responsabilidade de retenção do imposto por substituição tributária, atribuída ao remetente ou alienante da mercadoria, pelo serviço de transporte realizado por transportador autônomo ou por transportador não inscrito na unidade da Federação onde iniciado o serviço",
  },
  {
    id: 525,
    codigo: "6932",
    descricao:
      "Prestação de serviço de transporte iniciada em unidade da Federação diversa daquela onde inscrito o prestador",
  },
  {
    id: 526,
    codigo: "6933",
    descricao:
      "Prestação de serviço tributado pelo ISSQN (ajuste sinief 03/04)",
  },
  {
    id: 527,
    codigo: "6934",
    descricao:
      "Remessa simbólica de mercadoria depositada em armazém geral ou depósito fechado",
  },
  {
    id: 528,
    codigo: "6949",
    descricao:
      "Outra saída de mercadoria ou prestação de serviço não especificado",
  },
  {
    id: 529,
    codigo: "7101",
    descricao: "Venda de produção do estabelecimento",
  },
  {
    id: 530,
    codigo: "7102",
    descricao: "Venda de mercadoria adquirida ou recebida de terceiros",
  },
  {
    id: 531,
    codigo: "7105",
    descricao:
      "Venda de produção do estabelecimento, que não deva por ele transitar",
  },
  {
    id: 532,
    codigo: "7106",
    descricao:
      "Venda de mercadoria adquirida ou recebida de terceiros, que não deva por ele transitar",
  },
  {
    id: 533,
    codigo: "7127",
    descricao: "Venda de produção do estabelecimento sob o regime de drawback",
  },
  {
    id: 534,
    codigo: "7201",
    descricao: "Devolução de compra para industrialização",
  },
  {
    id: 535,
    codigo: "7202",
    descricao: "Devolução de compra para comercialização",
  },
  {
    id: 536,
    codigo: "7205",
    descricao:
      "Anulação de valor relativo à aquisição de serviço de comunicação",
  },
  {
    id: 537,
    codigo: "7206",
    descricao:
      "Anulação de valor relativo a aquisição de serviço de transporte",
  },
  {
    id: 538,
    codigo: "7207",
    descricao: "Anulação de valor relativo à compra de energia elétrica",
  },
  {
    id: 539,
    codigo: "7210",
    descricao: "Devolução de compra para utilização na prestação de serviço",
  },
  {
    id: 540,
    codigo: "7211",
    descricao:
      "Devolução de compras para industrialização sob o regime de drawback",
  },
  {
    id: 541,
    codigo: "7251",
    descricao: "Venda de energia elétrica para o exterior",
  },
  {
    id: 542,
    codigo: "7301",
    descricao:
      "Prestação de serviço de comunicação para execução de serviço da mesma natureza",
  },
  { id: 543, codigo: "7358", descricao: "Prestação de serviço de transporte" },
  {
    id: 544,
    codigo: "7501",
    descricao:
      "Exportação de mercadorias recebidas com fim específico de exportação",
  },
  { id: 545, codigo: "7551", descricao: "Venda de bem do ativo imobilizado" },
  {
    id: 546,
    codigo: "7553",
    descricao: "Devolução de compra de bem para o ativo imobilizado",
  },
  {
    id: 547,
    codigo: "7556",
    descricao: "Devolução de compra de material de uso ou consumo",
  },
  {
    id: 548,
    codigo: "7651",
    descricao:
      "Venda de combustível ou lubrificante de produção do estabelecimento destinado à industrialização subseqüente",
  },
  {
    id: 549,
    codigo: "7654",
    descricao:
      "Venda de combustível ou lubrificante adquirido ou recebido de terceiros destinado à industrialização subseqüente",
  },
  {
    id: 550,
    codigo: "7667",
    descricao:
      "Venda de combustível ou lubrificante a consumidor ou usuário final",
  },
  {
    id: 551,
    codigo: "7930",
    descricao:
      "Lançamento efetuado a título de devolução de bem cuja entrada tenha ocorrido sob amparo de regime especial aduaneiro de admissão temporária",
  },
  {
    id: 552,
    codigo: "7949",
    descricao:
      "Outra saída de mercadoria ou prestação de serviço não especificado",
  },
];

module.exports = { cfops };
