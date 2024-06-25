export interface IWidget {
    id: number,
    title: string,
    company: string,
    categories: string,
    platform: string,
    screen: string[],
    description: string,
    cases: string,
    deadline: string,
    version: string,
    price: string
};

export const widgets = [
    {
        id: 1,
        title: 'Line Chart',
        company: 'Visiology',
        categories: 'Line Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczMvhzJaMy4arZDtMRAhkivsKxWcO0Ny2QfVgzV4CVQbw_zBy_uvgx8pKikpGwowMjah4Ft2jZrfB-CnQzcErDSSbwWLa9D3yfmBghHWhd8jhsQ6GlH7IxSW3VkMDA1tPzkqw3swano98ThWLnfbXAkT=w1261-h706-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczMvhzJaMy4arZDtMRAhkivsKxWcO0Ny2QfVgzV4CVQbw_zBy_uvgx8pKikpGwowMjah4Ft2jZrfB-CnQzcErDSSbwWLa9D3yfmBghHWhd8jhsQ6GlH7IxSW3VkMDA1tPzkqw3swano98ThWLnfbXAkT=w1261-h706-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczMvhzJaMy4arZDtMRAhkivsKxWcO0Ny2QfVgzV4CVQbw_zBy_uvgx8pKikpGwowMjah4Ft2jZrfB-CnQzcErDSSbwWLa9D3yfmBghHWhd8jhsQ6GlH7IxSW3VkMDA1tPzkqw3swano98ThWLnfbXAkT=w1261-h706-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczMvhzJaMy4arZDtMRAhkivsKxWcO0Ny2QfVgzV4CVQbw_zBy_uvgx8pKikpGwowMjah4Ft2jZrfB-CnQzcErDSSbwWLa9D3yfmBghHWhd8jhsQ6GlH7IxSW3VkMDA1tPzkqw3swano98ThWLnfbXAkT=w1261-h706-s-no-gm?authuser=0',
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '25 000'
    },
    {
        id: 2,
        title: 'Spline with symbols',
        company: 'Techpeople',
        categories: 'Line Charts',
        platform: 'PIX',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczPJB7MkaqyUtJSPm8sO0ASdoUaTzSjzi5_wicJDeGE5o3uf4fhEgyeuzPXc5QaK4wFtDVdf2lj87YAYZfgzeZ_ZCY1JXuQzx5ShMFh5V_5oq-8_FHhdSstzK5Q2nn6v9TXmIBzOTJ7zFgLjaHx3OZ55=w1196-h620-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPJB7MkaqyUtJSPm8sO0ASdoUaTzSjzi5_wicJDeGE5o3uf4fhEgyeuzPXc5QaK4wFtDVdf2lj87YAYZfgzeZ_ZCY1JXuQzx5ShMFh5V_5oq-8_FHhdSstzK5Q2nn6v9TXmIBzOTJ7zFgLjaHx3OZ55=w1196-h620-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPJB7MkaqyUtJSPm8sO0ASdoUaTzSjzi5_wicJDeGE5o3uf4fhEgyeuzPXc5QaK4wFtDVdf2lj87YAYZfgzeZ_ZCY1JXuQzx5ShMFh5V_5oq-8_FHhdSstzK5Q2nn6v9TXmIBzOTJ7zFgLjaHx3OZ55=w1196-h620-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPJB7MkaqyUtJSPm8sO0ASdoUaTzSjzi5_wicJDeGE5o3uf4fhEgyeuzPXc5QaK4wFtDVdf2lj87YAYZfgzeZ_ZCY1JXuQzx5ShMFh5V_5oq-8_FHhdSstzK5Q2nn6v9TXmIBzOTJ7zFgLjaHx3OZ55=w1196-h620-s-no-gm?authuser=0',
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '28 500'
    },
    {
        id: 3,
        title: 'With data labels',
        company: 'Первый Бит',
        categories: 'Line Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczOLRaJdfJaeoceYvDUUHXbSk1OEc2zAZede99Og40r6O5bKKuFrs7ovsquuhVqhuNCJDszMXObDVExo661fH3jyquEnnmTyxq14xNa_cqSRHMcLksdlYVhY_0fcb1znonkzhMMj6tQmDB8j6vjTxcTY=w1177-h576-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOLRaJdfJaeoceYvDUUHXbSk1OEc2zAZede99Og40r6O5bKKuFrs7ovsquuhVqhuNCJDszMXObDVExo661fH3jyquEnnmTyxq14xNa_cqSRHMcLksdlYVhY_0fcb1znonkzhMMj6tQmDB8j6vjTxcTY=w1177-h576-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOLRaJdfJaeoceYvDUUHXbSk1OEc2zAZede99Og40r6O5bKKuFrs7ovsquuhVqhuNCJDszMXObDVExo661fH3jyquEnnmTyxq14xNa_cqSRHMcLksdlYVhY_0fcb1znonkzhMMj6tQmDB8j6vjTxcTY=w1177-h576-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOLRaJdfJaeoceYvDUUHXbSk1OEc2zAZede99Og40r6O5bKKuFrs7ovsquuhVqhuNCJDszMXObDVExo661fH3jyquEnnmTyxq14xNa_cqSRHMcLksdlYVhY_0fcb1znonkzhMMj6tQmDB8j6vjTxcTY=w1177-h576-s-no-gm?authuser=0',
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '45 800'
    },
    {
        id: 4,
        title: 'Spline with inverted axes',
        company: 'Techpeople',
        categories: 'Line Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczNbXwY1r_4zaWdUZZTyEZUmCGCw5YqpAeZTzEYUY5Nr2uap0B831_LrzKxQz1cLU-wweVMqZJofab9g9lwVtJr1Jn0aUD6i5wEui8bsyNYud8nM1O2h98GFM-jWV0edRoHF67hPHkWGel8xtt_MhNLY=w1182-h580-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNbXwY1r_4zaWdUZZTyEZUmCGCw5YqpAeZTzEYUY5Nr2uap0B831_LrzKxQz1cLU-wweVMqZJofab9g9lwVtJr1Jn0aUD6i5wEui8bsyNYud8nM1O2h98GFM-jWV0edRoHF67hPHkWGel8xtt_MhNLY=w1182-h580-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNbXwY1r_4zaWdUZZTyEZUmCGCw5YqpAeZTzEYUY5Nr2uap0B831_LrzKxQz1cLU-wweVMqZJofab9g9lwVtJr1Jn0aUD6i5wEui8bsyNYud8nM1O2h98GFM-jWV0edRoHF67hPHkWGel8xtt_MhNLY=w1182-h580-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNbXwY1r_4zaWdUZZTyEZUmCGCw5YqpAeZTzEYUY5Nr2uap0B831_LrzKxQz1cLU-wweVMqZJofab9g9lwVtJr1Jn0aUD6i5wEui8bsyNYud8nM1O2h98GFM-jWV0edRoHF67hPHkWGel8xtt_MhNLY=w1182-h580-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: 'Бесплатно'
    },
    {
        id: 5,
        title: 'Line chart with custom animation',
        company: 'Polimedia',
        categories: 'Line Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczOV_fYROq7zFUCyCTvGFF83knFLcL6Iz-EqII-XKA4RY4yivTuEKtxXNbFC-Paa_ceBQS-LfxuqlYchHMNaGsd9TcKOnRAnTDwhWcCZ-4AYEpdgnX13MISaWbGi4zxg2ofFXeyK5mArH2A3P91D8Ntw=w1136-h562-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOV_fYROq7zFUCyCTvGFF83knFLcL6Iz-EqII-XKA4RY4yivTuEKtxXNbFC-Paa_ceBQS-LfxuqlYchHMNaGsd9TcKOnRAnTDwhWcCZ-4AYEpdgnX13MISaWbGi4zxg2ofFXeyK5mArH2A3P91D8Ntw=w1136-h562-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOV_fYROq7zFUCyCTvGFF83knFLcL6Iz-EqII-XKA4RY4yivTuEKtxXNbFC-Paa_ceBQS-LfxuqlYchHMNaGsd9TcKOnRAnTDwhWcCZ-4AYEpdgnX13MISaWbGi4zxg2ofFXeyK5mArH2A3P91D8Ntw=w1136-h562-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOV_fYROq7zFUCyCTvGFF83knFLcL6Iz-EqII-XKA4RY4yivTuEKtxXNbFC-Paa_ceBQS-LfxuqlYchHMNaGsd9TcKOnRAnTDwhWcCZ-4AYEpdgnX13MISaWbGi4zxg2ofFXeyK5mArH2A3P91D8Ntw=w1136-h562-s-no-gm?authuser=0',
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 6,
        title: 'Basic Area',
        company: 'Visiology',
        categories: 'Area Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczOcM7o4cTF75Hvqj4p1F-mhYbc3S59fy-FZ7luho_wn02STeo5vavLehCjr-cFu9-7ZNqRHtE77IHkNdFvc4tqB1JCMD1ZNIgbB8wVNHWkjTuX3OrBy3W-GqMS0A0AcpCEd8yWtRKnE1t_7uBNH3jML=w1192-h616-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOcM7o4cTF75Hvqj4p1F-mhYbc3S59fy-FZ7luho_wn02STeo5vavLehCjr-cFu9-7ZNqRHtE77IHkNdFvc4tqB1JCMD1ZNIgbB8wVNHWkjTuX3OrBy3W-GqMS0A0AcpCEd8yWtRKnE1t_7uBNH3jML=w1192-h616-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOcM7o4cTF75Hvqj4p1F-mhYbc3S59fy-FZ7luho_wn02STeo5vavLehCjr-cFu9-7ZNqRHtE77IHkNdFvc4tqB1JCMD1ZNIgbB8wVNHWkjTuX3OrBy3W-GqMS0A0AcpCEd8yWtRKnE1t_7uBNH3jML=w1192-h616-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOcM7o4cTF75Hvqj4p1F-mhYbc3S59fy-FZ7luho_wn02STeo5vavLehCjr-cFu9-7ZNqRHtE77IHkNdFvc4tqB1JCMD1ZNIgbB8wVNHWkjTuX3OrBy3W-GqMS0A0AcpCEd8yWtRKnE1t_7uBNH3jML=w1192-h616-s-no-gm?authuser=0',
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 7,
        title: 'Percentage area',
        company: 'Первый Бит',
        categories: 'Area Charts',
        platform: 'Apache Superset',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczMYCq20CubimklLaaJ0qr4_rHCagTzd7t2sODc6qyfmolDL6S8xcRJ7SI7K64Qh-aTyppDfuFohS5x58JWeOYYNsddJ5SCN3s0z8CiKJhXslwE495ZzW5qcGqnVozHko3m_0TfF3e3nJF3S6mbAXR_D=w1132-h561-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczMYCq20CubimklLaaJ0qr4_rHCagTzd7t2sODc6qyfmolDL6S8xcRJ7SI7K64Qh-aTyppDfuFohS5x58JWeOYYNsddJ5SCN3s0z8CiKJhXslwE495ZzW5qcGqnVozHko3m_0TfF3e3nJF3S6mbAXR_D=w1132-h561-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczMYCq20CubimklLaaJ0qr4_rHCagTzd7t2sODc6qyfmolDL6S8xcRJ7SI7K64Qh-aTyppDfuFohS5x58JWeOYYNsddJ5SCN3s0z8CiKJhXslwE495ZzW5qcGqnVozHko3m_0TfF3e3nJF3S6mbAXR_D=w1132-h561-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczMYCq20CubimklLaaJ0qr4_rHCagTzd7t2sODc6qyfmolDL6S8xcRJ7SI7K64Qh-aTyppDfuFohS5x58JWeOYYNsddJ5SCN3s0z8CiKJhXslwE495ZzW5qcGqnVozHko3m_0TfF3e3nJF3S6mbAXR_D=w1132-h561-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 8,
        title: 'Stacked area',
        company: 'Polimedia',
        categories: 'Area Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczNeZH0vtSFJJLpWe4wrg1mp8_Giz2zHui_6vYQuH3NoqlDlOpEXEFTRJ0cj_7OiGgm4EItlJ9dOBLc2XvlIm2N2LfbrliI6VT6x_nd6p6Yn1lADo-H_99R6FerbmP1BZiAjx_0O3LJiQzfkOLLj3POX=w1108-h546-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNeZH0vtSFJJLpWe4wrg1mp8_Giz2zHui_6vYQuH3NoqlDlOpEXEFTRJ0cj_7OiGgm4EItlJ9dOBLc2XvlIm2N2LfbrliI6VT6x_nd6p6Yn1lADo-H_99R6FerbmP1BZiAjx_0O3LJiQzfkOLLj3POX=w1108-h546-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNeZH0vtSFJJLpWe4wrg1mp8_Giz2zHui_6vYQuH3NoqlDlOpEXEFTRJ0cj_7OiGgm4EItlJ9dOBLc2XvlIm2N2LfbrliI6VT6x_nd6p6Yn1lADo-H_99R6FerbmP1BZiAjx_0O3LJiQzfkOLLj3POX=w1108-h546-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNeZH0vtSFJJLpWe4wrg1mp8_Giz2zHui_6vYQuH3NoqlDlOpEXEFTRJ0cj_7OiGgm4EItlJ9dOBLc2XvlIm2N2LfbrliI6VT6x_nd6p6Yn1lADo-H_99R6FerbmP1BZiAjx_0O3LJiQzfkOLLj3POX=w1108-h546-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 9,
        title: 'Area range',
        company: 'Techpeople',
        categories: 'Area Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczPsmCOefmVq3Tua6cIx92U8UzEBcFy_9qPCmdkDLPjowc3DXX1OrOcyL3Wn5YpnRaS7HTTKoBqLtsm5Gp1sYZR2Z0gYp3Ek4homnaQ8WMgQUhDllh6HNqIHPWPj0N9xTZzSmqXhuL4O1ENOFNsSt4VY=w1118-h555-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPsmCOefmVq3Tua6cIx92U8UzEBcFy_9qPCmdkDLPjowc3DXX1OrOcyL3Wn5YpnRaS7HTTKoBqLtsm5Gp1sYZR2Z0gYp3Ek4homnaQ8WMgQUhDllh6HNqIHPWPj0N9xTZzSmqXhuL4O1ENOFNsSt4VY=w1118-h555-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPsmCOefmVq3Tua6cIx92U8UzEBcFy_9qPCmdkDLPjowc3DXX1OrOcyL3Wn5YpnRaS7HTTKoBqLtsm5Gp1sYZR2Z0gYp3Ek4homnaQ8WMgQUhDllh6HNqIHPWPj0N9xTZzSmqXhuL4O1ENOFNsSt4VY=w1118-h555-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPsmCOefmVq3Tua6cIx92U8UzEBcFy_9qPCmdkDLPjowc3DXX1OrOcyL3Wn5YpnRaS7HTTKoBqLtsm5Gp1sYZR2Z0gYp3Ek4homnaQ8WMgQUhDllh6HNqIHPWPj0N9xTZzSmqXhuL4O1ENOFNsSt4VY=w1118-h555-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 10,
        title: 'Fan chart',
        company: 'Первый Бит',
        categories: 'Area Charts',
        platform: 'Apache Superset',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczNLeLxQWB4IWIBJcNRAet3HE5RJQLVt2PVW37vbIRbv92f0SCIe_ZFcXq-SFQhIZGOuRoGh6gKeaY0F_WLPyQgzzczAFLBiSHHIQMn1qyQtWuMRvc7J4QsgTdt8xw9OkX8Du_PeuLuy1zXshF3tS5Lc=w1135-h525-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNLeLxQWB4IWIBJcNRAet3HE5RJQLVt2PVW37vbIRbv92f0SCIe_ZFcXq-SFQhIZGOuRoGh6gKeaY0F_WLPyQgzzczAFLBiSHHIQMn1qyQtWuMRvc7J4QsgTdt8xw9OkX8Du_PeuLuy1zXshF3tS5Lc=w1135-h525-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNLeLxQWB4IWIBJcNRAet3HE5RJQLVt2PVW37vbIRbv92f0SCIe_ZFcXq-SFQhIZGOuRoGh6gKeaY0F_WLPyQgzzczAFLBiSHHIQMn1qyQtWuMRvc7J4QsgTdt8xw9OkX8Du_PeuLuy1zXshF3tS5Lc=w1135-h525-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNLeLxQWB4IWIBJcNRAet3HE5RJQLVt2PVW37vbIRbv92f0SCIe_ZFcXq-SFQhIZGOuRoGh6gKeaY0F_WLPyQgzzczAFLBiSHHIQMn1qyQtWuMRvc7J4QsgTdt8xw9OkX8Du_PeuLuy1zXshF3tS5Lc=w1135-h525-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 11,
        title: 'Area range and line',
        company: 'Visiology',
        categories: 'Area Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczPcTHLTQ9L--UU8ZvKf-50nxv9KkNFU5PdpvsRITPJzTmIUad0-KHlD_VjT9VPD7k414ZSe3NAvmBqTH3sgC2u7-uqhcr331yJ6Ob6A9RCYgRDHWey6X-3RfP4-XXS7gghfci5b5mqO139VXksFkL-H=w1127-h550-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPcTHLTQ9L--UU8ZvKf-50nxv9KkNFU5PdpvsRITPJzTmIUad0-KHlD_VjT9VPD7k414ZSe3NAvmBqTH3sgC2u7-uqhcr331yJ6Ob6A9RCYgRDHWey6X-3RfP4-XXS7gghfci5b5mqO139VXksFkL-H=w1127-h550-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPcTHLTQ9L--UU8ZvKf-50nxv9KkNFU5PdpvsRITPJzTmIUad0-KHlD_VjT9VPD7k414ZSe3NAvmBqTH3sgC2u7-uqhcr331yJ6Ob6A9RCYgRDHWey6X-3RfP4-XXS7gghfci5b5mqO139VXksFkL-H=w1127-h550-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPcTHLTQ9L--UU8ZvKf-50nxv9KkNFU5PdpvsRITPJzTmIUad0-KHlD_VjT9VPD7k414ZSe3NAvmBqTH3sgC2u7-uqhcr331yJ6Ob6A9RCYgRDHWey6X-3RfP4-XXS7gghfci5b5mqO139VXksFkL-H=w1127-h550-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '25 000'
    },
    {
        id: 12,
        title: 'Basic bar',
        company: 'Techpeople',
        categories: 'Bar Chart',
        platform: 'PIX',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczP9Iv9d13sF-IaYpQGJE9r7PNWGnib3IwsAqHR24baTwTNcobuuqJdYWYBIttXP_jNzGEwyqQPSYUcIej7PvyH3IW_pwGIBoGbzAeCFmq5QxtRo64EKLUvnrXCwkvrRbNvwLA-99NgWjCbh-JfQ7SJr=w1131-h542-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczP9Iv9d13sF-IaYpQGJE9r7PNWGnib3IwsAqHR24baTwTNcobuuqJdYWYBIttXP_jNzGEwyqQPSYUcIej7PvyH3IW_pwGIBoGbzAeCFmq5QxtRo64EKLUvnrXCwkvrRbNvwLA-99NgWjCbh-JfQ7SJr=w1131-h542-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczP9Iv9d13sF-IaYpQGJE9r7PNWGnib3IwsAqHR24baTwTNcobuuqJdYWYBIttXP_jNzGEwyqQPSYUcIej7PvyH3IW_pwGIBoGbzAeCFmq5QxtRo64EKLUvnrXCwkvrRbNvwLA-99NgWjCbh-JfQ7SJr=w1131-h542-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczP9Iv9d13sF-IaYpQGJE9r7PNWGnib3IwsAqHR24baTwTNcobuuqJdYWYBIttXP_jNzGEwyqQPSYUcIej7PvyH3IW_pwGIBoGbzAeCFmq5QxtRo64EKLUvnrXCwkvrRbNvwLA-99NgWjCbh-JfQ7SJr=w1131-h542-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '28 500'
    },
    {
        id: 13,
        title: 'Basic column',
        company: 'Первый Бит',
        categories: 'Bar Chart',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczNsosVQmGWpFFY_Amg56xrf4DdEIPrrl39JDS53ajgkyhOLbmhAhKRYyn7fe7SEx5GnWNN352OJx1BU4ZGi0oYKthAIut-ifDwJdtGp0X7dwGVsvlkrbMWfcsoTzQmdCpcYjISSbL9VJLGoRO4vWw8s=w1110-h523-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNsosVQmGWpFFY_Amg56xrf4DdEIPrrl39JDS53ajgkyhOLbmhAhKRYyn7fe7SEx5GnWNN352OJx1BU4ZGi0oYKthAIut-ifDwJdtGp0X7dwGVsvlkrbMWfcsoTzQmdCpcYjISSbL9VJLGoRO4vWw8s=w1110-h523-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNsosVQmGWpFFY_Amg56xrf4DdEIPrrl39JDS53ajgkyhOLbmhAhKRYyn7fe7SEx5GnWNN352OJx1BU4ZGi0oYKthAIut-ifDwJdtGp0X7dwGVsvlkrbMWfcsoTzQmdCpcYjISSbL9VJLGoRO4vWw8s=w1110-h523-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNsosVQmGWpFFY_Amg56xrf4DdEIPrrl39JDS53ajgkyhOLbmhAhKRYyn7fe7SEx5GnWNN352OJx1BU4ZGi0oYKthAIut-ifDwJdtGp0X7dwGVsvlkrbMWfcsoTzQmdCpcYjISSbL9VJLGoRO4vWw8s=w1110-h523-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '45 800'
    },
    {
        id: 14,
        title: 'Stacked and group column',
        company: 'Techpeople',
        categories: 'Bar Chart',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczN4fgZYnhD88cQYXxS3Xv8phVGKSTz-y1kA4T-yrheW10tB5iP2q1bq89L4HzVjDerEwh-tWa97Qd79gfD359tWdFOCM8MVgLyLpWUXgAA7GFlAfRzM-BZ1EsDFb2xiRr7s2ZZlXZrKIwDKo1k-VX_C=w1110-h532-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczN4fgZYnhD88cQYXxS3Xv8phVGKSTz-y1kA4T-yrheW10tB5iP2q1bq89L4HzVjDerEwh-tWa97Qd79gfD359tWdFOCM8MVgLyLpWUXgAA7GFlAfRzM-BZ1EsDFb2xiRr7s2ZZlXZrKIwDKo1k-VX_C=w1110-h532-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczN4fgZYnhD88cQYXxS3Xv8phVGKSTz-y1kA4T-yrheW10tB5iP2q1bq89L4HzVjDerEwh-tWa97Qd79gfD359tWdFOCM8MVgLyLpWUXgAA7GFlAfRzM-BZ1EsDFb2xiRr7s2ZZlXZrKIwDKo1k-VX_C=w1110-h532-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczN4fgZYnhD88cQYXxS3Xv8phVGKSTz-y1kA4T-yrheW10tB5iP2q1bq89L4HzVjDerEwh-tWa97Qd79gfD359tWdFOCM8MVgLyLpWUXgAA7GFlAfRzM-BZ1EsDFb2xiRr7s2ZZlXZrKIwDKo1k-VX_C=w1110-h532-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: 'Бесплатно'
    },
    {
        id: 15,
        title: 'Column range',
        company: 'Polimedia',
        categories: 'Bar Chart',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczP73XC3_8GVDR4Q0LVXSvTFzdMCysL9kcq0fFsDRYz6GF0UeCf8lv3P5FKZvJrhWru6t6503uSm4hJH2_ddiM8SSDeHL68zHruMzC5RCMtiz3I3aoMTm0xEnb0UOR3tb00RDmMUDDqNbZV58uBLCA7J=w1118-h533-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczP73XC3_8GVDR4Q0LVXSvTFzdMCysL9kcq0fFsDRYz6GF0UeCf8lv3P5FKZvJrhWru6t6503uSm4hJH2_ddiM8SSDeHL68zHruMzC5RCMtiz3I3aoMTm0xEnb0UOR3tb00RDmMUDDqNbZV58uBLCA7J=w1118-h533-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczP73XC3_8GVDR4Q0LVXSvTFzdMCysL9kcq0fFsDRYz6GF0UeCf8lv3P5FKZvJrhWru6t6503uSm4hJH2_ddiM8SSDeHL68zHruMzC5RCMtiz3I3aoMTm0xEnb0UOR3tb00RDmMUDDqNbZV58uBLCA7J=w1118-h533-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczP73XC3_8GVDR4Q0LVXSvTFzdMCysL9kcq0fFsDRYz6GF0UeCf8lv3P5FKZvJrhWru6t6503uSm4hJH2_ddiM8SSDeHL68zHruMzC5RCMtiz3I3aoMTm0xEnb0UOR3tb00RDmMUDDqNbZV58uBLCA7J=w1118-h533-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 16,
        title: 'Column with negative',
        company: 'Visiology',
        categories: 'Bar Chart',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczN2hNWi2VzPkINaCHCQMlVHIii45i1egSuTg6nkG5sKVcmdLeIfunNiuoWDUyc4jjhcJYfKxz8k2EfZoQb7Kg1YLqiazpTuSH9uWIoSmZoGeq3t4epxGqTR7EGI5EfH2_eTqOoNTXT42O4gP7IND7Ov=w1102-h547-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczN2hNWi2VzPkINaCHCQMlVHIii45i1egSuTg6nkG5sKVcmdLeIfunNiuoWDUyc4jjhcJYfKxz8k2EfZoQb7Kg1YLqiazpTuSH9uWIoSmZoGeq3t4epxGqTR7EGI5EfH2_eTqOoNTXT42O4gP7IND7Ov=w1102-h547-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczN2hNWi2VzPkINaCHCQMlVHIii45i1egSuTg6nkG5sKVcmdLeIfunNiuoWDUyc4jjhcJYfKxz8k2EfZoQb7Kg1YLqiazpTuSH9uWIoSmZoGeq3t4epxGqTR7EGI5EfH2_eTqOoNTXT42O4gP7IND7Ov=w1102-h547-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczN2hNWi2VzPkINaCHCQMlVHIii45i1egSuTg6nkG5sKVcmdLeIfunNiuoWDUyc4jjhcJYfKxz8k2EfZoQb7Kg1YLqiazpTuSH9uWIoSmZoGeq3t4epxGqTR7EGI5EfH2_eTqOoNTXT42O4gP7IND7Ov=w1102-h547-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 17,
        title: 'Variwide',
        company: 'Первый Бит',
        categories: 'Bar Chart',
        platform: 'Apache Superset',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczPWP7gApcNoxVSspHAWYjq-eTwOvYev1yN5uatPces5heyiX1Fro2sL0x44sDwxCysyeZ4wkKPRM0P1aZ4GOaef9fls-ZFpxAC9oezvgW-PtWoAUSm8ABXxU_jVgLYO3RxxUekG7bz9U5XqPQdQ5i9K=w1087-h646-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPWP7gApcNoxVSspHAWYjq-eTwOvYev1yN5uatPces5heyiX1Fro2sL0x44sDwxCysyeZ4wkKPRM0P1aZ4GOaef9fls-ZFpxAC9oezvgW-PtWoAUSm8ABXxU_jVgLYO3RxxUekG7bz9U5XqPQdQ5i9K=w1087-h646-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPWP7gApcNoxVSspHAWYjq-eTwOvYev1yN5uatPces5heyiX1Fro2sL0x44sDwxCysyeZ4wkKPRM0P1aZ4GOaef9fls-ZFpxAC9oezvgW-PtWoAUSm8ABXxU_jVgLYO3RxxUekG7bz9U5XqPQdQ5i9K=w1087-h646-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczPWP7gApcNoxVSspHAWYjq-eTwOvYev1yN5uatPces5heyiX1Fro2sL0x44sDwxCysyeZ4wkKPRM0P1aZ4GOaef9fls-ZFpxAC9oezvgW-PtWoAUSm8ABXxU_jVgLYO3RxxUekG7bz9U5XqPQdQ5i9K=w1087-h646-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 18,
        title: 'Pie chart',
        company: 'Polimedia',
        categories: 'Pie Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczNTY0bQorVoDYiZmVKlr6I1cJnxFZcAkwH_Zd1RKCN9vf8f3i2Go32atc0nyefy8pNsdK8Wl8Jyr2yQsQtqeX9bXYfOADF2i7JAk_ouSZVQFTabAjxM7ZCzdN_AvdZgq_rm3IkKwRB5jKSf4ADlmzal=w1017-h561-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNTY0bQorVoDYiZmVKlr6I1cJnxFZcAkwH_Zd1RKCN9vf8f3i2Go32atc0nyefy8pNsdK8Wl8Jyr2yQsQtqeX9bXYfOADF2i7JAk_ouSZVQFTabAjxM7ZCzdN_AvdZgq_rm3IkKwRB5jKSf4ADlmzal=w1017-h561-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNTY0bQorVoDYiZmVKlr6I1cJnxFZcAkwH_Zd1RKCN9vf8f3i2Go32atc0nyefy8pNsdK8Wl8Jyr2yQsQtqeX9bXYfOADF2i7JAk_ouSZVQFTabAjxM7ZCzdN_AvdZgq_rm3IkKwRB5jKSf4ADlmzal=w1017-h561-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNTY0bQorVoDYiZmVKlr6I1cJnxFZcAkwH_Zd1RKCN9vf8f3i2Go32atc0nyefy8pNsdK8Wl8Jyr2yQsQtqeX9bXYfOADF2i7JAk_ouSZVQFTabAjxM7ZCzdN_AvdZgq_rm3IkKwRB5jKSf4ADlmzal=w1017-h561-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 19,
        title: 'Donut chart race',
        company: 'Techpeople',
        categories: 'Pie Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczM1AJk5N_M_xWA_twqkTYAewJ_eYcOTRcSUUhovY0y8gXp1JCB8IqlITbBZrYqDoB1FQX1B1UJ0tw24SBGLyMpSNYU5x5SP7bbSdNTuMh2PXVRr2n8CEcZjJRVruZH0IYWA7ZV565y9Ym3IWEzDEQn3=w977-h687-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczM1AJk5N_M_xWA_twqkTYAewJ_eYcOTRcSUUhovY0y8gXp1JCB8IqlITbBZrYqDoB1FQX1B1UJ0tw24SBGLyMpSNYU5x5SP7bbSdNTuMh2PXVRr2n8CEcZjJRVruZH0IYWA7ZV565y9Ym3IWEzDEQn3=w977-h687-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczM1AJk5N_M_xWA_twqkTYAewJ_eYcOTRcSUUhovY0y8gXp1JCB8IqlITbBZrYqDoB1FQX1B1UJ0tw24SBGLyMpSNYU5x5SP7bbSdNTuMh2PXVRr2n8CEcZjJRVruZH0IYWA7ZV565y9Ym3IWEzDEQn3=w977-h687-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczM1AJk5N_M_xWA_twqkTYAewJ_eYcOTRcSUUhovY0y8gXp1JCB8IqlITbBZrYqDoB1FQX1B1UJ0tw24SBGLyMpSNYU5x5SP7bbSdNTuMh2PXVRr2n8CEcZjJRVruZH0IYWA7ZV565y9Ym3IWEzDEQn3=w977-h687-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 20,
        title: 'Pie chart custom animation',
        company: 'Techpeople',
        categories: 'Pie Charts',
        platform: 'Apache Superset',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczNo3-3vTpWAfDBI0VG3-0EgwBHo-JcidenjKWmSyBpgg9PKvaZPBzC8kUJjzgflESsz_gYAknQh2Cqbe3EwSt0g2ty5CX-6kvKSIR4bFwrbi9B5XFyazSwp2JjYlcTrc1lYocGl0awLdUmiaOkmQbNj=w1022-h522-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNo3-3vTpWAfDBI0VG3-0EgwBHo-JcidenjKWmSyBpgg9PKvaZPBzC8kUJjzgflESsz_gYAknQh2Cqbe3EwSt0g2ty5CX-6kvKSIR4bFwrbi9B5XFyazSwp2JjYlcTrc1lYocGl0awLdUmiaOkmQbNj=w1022-h522-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNo3-3vTpWAfDBI0VG3-0EgwBHo-JcidenjKWmSyBpgg9PKvaZPBzC8kUJjzgflESsz_gYAknQh2Cqbe3EwSt0g2ty5CX-6kvKSIR4bFwrbi9B5XFyazSwp2JjYlcTrc1lYocGl0awLdUmiaOkmQbNj=w1022-h522-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczNo3-3vTpWAfDBI0VG3-0EgwBHo-JcidenjKWmSyBpgg9PKvaZPBzC8kUJjzgflESsz_gYAknQh2Cqbe3EwSt0g2ty5CX-6kvKSIR4bFwrbi9B5XFyazSwp2JjYlcTrc1lYocGl0awLdUmiaOkmQbNj=w1022-h522-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '31 200'
    },
    {
        id: 21,
        title: 'Pie with monochrome',
        company: 'Visiology',
        categories: 'Pie Charts',
        platform: 'Visiology',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczOEcuJNS50MSuQuwpKpdqq_g1xWqEQnIYXTcEGTIMRfLxQAZPyDsaptRZDOK_kU1pVhJtFgyvZ2rEkUh8LFlpD5PvrGOWnsrhj2r0O2Eca9fElVSQopW-i7cBmqzZDCH4wDbrpZKik_WVcB0nH7coSx=w862-h510-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOEcuJNS50MSuQuwpKpdqq_g1xWqEQnIYXTcEGTIMRfLxQAZPyDsaptRZDOK_kU1pVhJtFgyvZ2rEkUh8LFlpD5PvrGOWnsrhj2r0O2Eca9fElVSQopW-i7cBmqzZDCH4wDbrpZKik_WVcB0nH7coSx=w862-h510-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOEcuJNS50MSuQuwpKpdqq_g1xWqEQnIYXTcEGTIMRfLxQAZPyDsaptRZDOK_kU1pVhJtFgyvZ2rEkUh8LFlpD5PvrGOWnsrhj2r0O2Eca9fElVSQopW-i7cBmqzZDCH4wDbrpZKik_WVcB0nH7coSx=w862-h510-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczOEcuJNS50MSuQuwpKpdqq_g1xWqEQnIYXTcEGTIMRfLxQAZPyDsaptRZDOK_kU1pVhJtFgyvZ2rEkUh8LFlpD5PvrGOWnsrhj2r0O2Eca9fElVSQopW-i7cBmqzZDCH4wDbrpZKik_WVcB0nH7coSx=w862-h510-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '25 000'
    },
    {
        id: 22,
        title: 'Pie with legend',
        company: 'Techpeople',
        categories: 'Pie Charts',
        platform: 'PIX',
        screen: [
            'https://lh3.googleusercontent.com/pw/AP1GczM50MLZxFUE4_xx_d73nl3TIOTPH5t_2SeVra9kMtA1-C5xSEUIgSpqQl-9aEv7Bvfc1-DWnuphMqQGbU3XL1YZpXA3Zdbuvb9V7wIjUQ6zR_KBUkcFW4Agit_MQGC2v9igLDiuj873h076YoXbcF57=w858-h517-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczM50MLZxFUE4_xx_d73nl3TIOTPH5t_2SeVra9kMtA1-C5xSEUIgSpqQl-9aEv7Bvfc1-DWnuphMqQGbU3XL1YZpXA3Zdbuvb9V7wIjUQ6zR_KBUkcFW4Agit_MQGC2v9igLDiuj873h076YoXbcF57=w858-h517-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczM50MLZxFUE4_xx_d73nl3TIOTPH5t_2SeVra9kMtA1-C5xSEUIgSpqQl-9aEv7Bvfc1-DWnuphMqQGbU3XL1YZpXA3Zdbuvb9V7wIjUQ6zR_KBUkcFW4Agit_MQGC2v9igLDiuj873h076YoXbcF57=w858-h517-s-no-gm?authuser=0',
            'https://lh3.googleusercontent.com/pw/AP1GczM50MLZxFUE4_xx_d73nl3TIOTPH5t_2SeVra9kMtA1-C5xSEUIgSpqQl-9aEv7Bvfc1-DWnuphMqQGbU3XL1YZpXA3Zdbuvb9V7wIjUQ6zR_KBUkcFW4Agit_MQGC2v9igLDiuj873h076YoXbcF57=w858-h517-s-no-gm?authuser=0'
        ],
        description: 'Описание виджета',
        cases: 'Описание кейсов',
        deadline: 'Сроки внедрения продукта',
        version: 'Разработано для версии',
        price: '28 500'
    }
]