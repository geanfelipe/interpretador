var secretariasModel = [
        {
        nome: "SEARH", contextmenu: "funcionario",
        setor: [
            {nome: "Almoxarifado", 
                segments: [{
                    nome:"Pessoal Almoxarifado",
                    inputs:[{
                            title:"",
                            readonly:false,
                            show:true,
                            showAs:"",
                            defaultValue:"",
                            width:"",
                            mask:""
                        },{
                            title:"",
                            readonly:false,
                            show:true,
                            showAs:"",
                            defaultValue:"",
                            width:"",
                            mask:""
                        }]   
                    }, 

                    {nome: "Teste Almoxarifado",
                        inputs:[
                            {},
                            {},
                            {}
                        ]   
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