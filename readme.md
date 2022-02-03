# Aplicação de dois TESTES da empresa 011Brasil
### por Diego Hartmann


# TESTE VACINACAO [(ver deploy)](https://011brasil-vacina.vercel.app)
"O algoritmo deve resolver a seguinte questão:

Temos uma lista (anexa) em formato JSON com 20 pessoas que estão na fila de vacinação.
Devemos construir um algoritmo que organize esta lista em 4 grupos para vacinação.

Os grupos devem ser separados levando em consideração as regras:
1-	Maiores de 60 anos tem prioridade;
2-	Atividades essenciais tem prioridades. Elas são: Saúde, Educação Alimentícios e Segurança.

Cada grupo será vacinado um dia, seguindo a ordem: Grupo 1, 2, 3 e depois o 4."

## 
## ETAPAS FEITAS:
##### Lógica do algorítmo de reordenação em JavaScript => início: 18:40 e concluída as 20h50 (total: ~2h10min)
1. Importação do arquivo .json de 'pessoas';
2. Reordenar esse array por ordem de idade (mais velho pro mais novo);
3. Reordenar esse array por ordem de trabalho prioritario (só passa pra frente se quem ta na frente nao for +60 anos);
4. Dividir essa nova array em 4 arrays de 5 pessoas;
##### Front-end com os dados, mostrando os resultados  => início: 00:00 e concluída as 01:20 (total: ~1h20min)
5. Criar um front-end para que esses dados sejam mostrados sem ser no console;
6. Hospedar o código (Vercel).

## 
## TECNOLOGIAS:
1. JavaScript;
2. HTML 5;
3. CSS 3;

## 
## CONCLUSÃO:
1. Foi interessante trabalhar com dados de .json, bem como a forma de importá-lo;
2. Foi necessário pesquisar funções de ordenação de arrays (feitas em 'reorderPeopleArrayHelpers.js');

## 
## SUGESTÃO:
### Sintaxe de JSON pode ser simplificada, disso (um objeto contendo um array de objetos):
    { 
        "pessoas":
        [
            {
                "nome": "Maria Sousa Rodrigues",
                "idade": 34,
                "areaDeAtuacao": "Educação"
            },
            {
                "nome": "Diego Hartmann",
                "idade": 23,
                "areaDeAtuacao": "Tecnologia"
            }
        ]
    }

### para isso (diretamente um array de objetos): 
    [
        {
            "nome": "Maria Sousa Rodrigues",
            "idade": 34,
            "areaDeAtuacao": "Educação"
        },
        {
            "nome": "Diego Hartmann",
            "idade": 23,
            "areaDeAtuacao": "Tecnologia"
        }
    ]


# TESTE FRONT-END (FOR LIFE) - [(ver deploy)](https://011brasil-forlife.vercel.app)

## 
## ETAPAS FEITAS:
1. 
2. 
3. 
4. 

## 
## CONCLUSÃO:
1. 
2. 
2. 