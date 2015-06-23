var secretariasModel = [
        {
        nome: "SEARH", contextmenu: "funcionario",
        setor: [
            {nome: "Almoxarifado", 
                segments: [{
                    nome:"Dados Pessoais",
                    inputs:[{
                            title:"Nome",
                            readonly:false,
                            show:true,
                            showAs:"text",
                            defaultValue:"",
                            width:"",
                            mask:""
                        },{
                            title:"CPF",
                            readonly:false,
                            show:true,
                            showAs:"text",
                            defaultValue:"",
                            width:"",
                            mask:""
                        }]   
                    }, 

                    {nome: "Dados de Localização",
                        inputs:[{
                            title:"Data de Nascimento",
                            readonly:false,
                            show:true,
                            showAs:"date",
                            defaultValue:"",
                            width:"",
                            mask:""
                        },{
                            title:"Nacionalidade",
                            readonly:false,
                            show:true,
                            showAs:"text",
                            defaultValue:"",
                            width:"",
                            mask:""
                        }]   
                    }
                ],
            },

            {nome: "Garagem", 
                segments: [
                    {nome:"Pessoal Garagem"}, 
                    {nome: "Teste Garagem"}
                ]
            }
        ]},





        {
        nome: "SEMUT", contextmenu: "funcionario",
        setor: [
            {nome: "Veículo",
            segments: [
                {nome:"Pessoal Veículo"},
                {nome: "Teste Veículo"}
            ]},
            {nome: "Cobrador",
            segments: [
                {nome:"Cadastro Cobrador"},
                {nome: "Teste Cobrador"}
            ]}
        ]}
    ];