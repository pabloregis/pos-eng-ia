source .env

API_URL="https://openrouter.ai/api/v1/chat/completions"
OPENROUTER_SITE_URL=http://localhost:3000
OPENROUTER_SITE_NAME="My Example"

# ERIK
# NLP_MODEL="google/gemma-3-27b-it:free"
# GEMMA PABLO
# NLP_MODEL="google/gemma-4-26b-a4b-it:free"
# GPT LUNA PABLO
NLP_MODEL="openai/gpt-5.6-luna"

curl --silent -X POST "$API_URL" \
-H "Content-Type: applicaton/json" \
-H "Authorization: Bearer $OPENROUTER_API_KEY" \
-H "HTTP-Referer: $OPENROUTER_SITE_URL" \
-H "X-Title: $OPENROUTER_SITE_NAME" \
-d '
    {
        "model": '"'$NLP_MODEL'"',
        "messages": [
            {
                "role":"user",
                "content":"Me conte uma curiosidade sobre LLMs"
            }
        ],
        "temperature": 0.3,
        "max_tokens": 1000
}' | jq

# ERIK
# {
#   "id": "gen-1768350223-TGhNha2xp2OhQfHxwTkA",
#   "provider": "Google AI Studio",
#   "model": "google/gemma-3-27b-it:free",
#   "object": "chat.completion",
#   "created": 1768350223,
#   "choices": [
#     {
#       "logprobs": null,
#       "finish_reason": "stop",
#       "native_finish_reason": "STOP",
#       "index": 0,
#       "message": {
#         "role": "assistant",
#         "content": "Uma curiosidade fascinante sobre os LLMs (Large Language Models, ou Grandes Modelos de Linguagem) é que eles **não \"pensam\" ou \"entendem\" como humanos**. Apesar de serem capazes de gerar textos incrivelmente coerentes e responder a perguntas de forma convincente, eles funcionam essencialmente como **máquinas de predição de texto**.\n\nO que acontece é que LLMs são treinados em quantidades massivas de dados textuais. Durante esse treinamento, eles aprendem a identificar padrões estatísticos na linguagem: quais palavras tendem a aparecer juntas, quais frases seguem outras, etc. \n\nQuando você faz uma pergunta a um LLM, ele usa esses padrões para **prever qual sequência de palavras é mais provável que seja uma resposta adequada**, com base no que ele \"viu\" nos dados de treinamento.\n\nEm outras palavras, eles são mestres em **imitar a linguagem humana**, mas não possuem consciência, crenças ou compreensão real do mundo. É como um papagaio que aprende a repetir frases, mas não sabe o que elas significam.\n\nEssa característica levanta questões importantes sobre a natureza da inteligência e os limites da IA, e é um tópico de debate constante entre pesquisadores e especialistas.\n",
#         "refusal": null,
#         "reasoning": null,
#         "annotations": []
#       }
#     }
#   ],
#   "usage": {
#     "prompt_tokens": 9,
#     "completion_tokens": 0,
#     "total_tokens": 9,
#     "cost": 0,
#     "is_byok": false,
#     "prompt_tokens_details": {
#       "cached_tokens": 0,
#       "audio_tokens": 0,
#       "video_tokens": 0
#     },
#     "cost_details": {
#       "upstream_inference_cost": null,
#       "upstream_inference_prompt_cost": 0,
#       "upstream_inference_completions_cost": 0
#     },
#     "completion_tokens_details": {
#       "reasoning_tokens": 0,
#       "image_tokens": 0
#     }
#   }
# }

# GEMMA PABLO
# {
#   "id": "gen-1786468341-hswBNtizylrZ9PKdovAf",
#   "object": "chat.completion",
#   "created": 1786468341,
#   "model": "google/gemma-4-26b-a4b-it:free",
#   "provider": "Darkbloom",
#   "system_fingerprint": null,
#   "service_tier": null,
#   "choices": [
#     {
#       "index": 0,
#       "logprobs": null,
#       "finish_reason": "stop",
#       "native_finish_reason": "stop",
#       "message": {
#         "role": "assistant",
#         "content": "Aqui está uma curiosidade fascinante que ajuda a entender por que os LLMs (como o ChatGPT) às vezes cometem erros bobos, apesar de parecerem tão inteligentes:\n\n### O fenômeno da \"Alucinação\" e a falta de um \"Modelo de Mundo\"\n\nDiferente de um ser humano, um LLM **não tem um modelo de mundo baseado na realidade**, mas sim um **modelo de mundo baseado em probabilidades estatísticas de palavras.**\n\n**A curiosidade detalhada:**\nQuando você faz uma pergunta a um LLM, ele não está \"consultando um banco de dados de fatos\" (como o Google faz). Ele está, essencialmente, jogando um jogo de **\"qual é a próxima palavra mais provável?\"**.\n\nIsso gera um fenômeno chamado **Alucinação**. Como o modelo é treinado para ser útil e fluido, ele é \"programado\" para sempre tentar completar a frase. Se ele não souber a resposta, em vez de dizer \"eu não sei\" (a menos que tenha sido muito bem treinado para isso), ele pode calcular que, estatisticamente, uma resposta com aquele tom de voz e estrutura gramatical seria a mais provável — mesmo que o conteúdo seja uma mentira completa.\n\n**Um exemplo engraçado:**\nSe você perguntar a um LLM antigo: *\"Quem ganhou a medalha de ouro de futebol masculino nas Olimpíadas de 1920?\"*, ele pode inventar um país ou um jogador com total convicção. Ele não está \"mentindo\" no sentido humano (com intenção de enganar); ele está apenas seguindo o caminho estatístico de palavras que *parece* uma resposta correta.\n\n**Por que isso é importante?**\nIsso explica por que os desenvolvedores estão focados agora em uma técnica chamada **RAG (Retrieval-Augmented Generation)**. Em vez de confiar apenas na \"memória\" estatística do modelo, eles conectam o LLM a uma fonte de dados externa (como a internet ou um PDF) para que ele primeiro \"leia o fato\" e depois \"escreva a resposta\", reduzindo drasticamente as alucinações.\n\n**Em resumo:** Um LLM é como um estudante brilhante que leu todos os livros do mundo, mas que, às vezes, tenta responder uma pergunta de história inventando um detalhe apenas para manter o ritmo da conversa!",
#         "refusal": null,
#         "reasoning": null
#       }
#     }
#   ],
#   "usage": {
#     "prompt_tokens": 21,
#     "completion_tokens": 505,
#     "total_tokens": 526,
#     "cost": 0,
#     "is_byok": false,
#     "prompt_tokens_details": {
#       "cached_tokens": 0,
#       "cache_write_tokens": 0,
#       "audio_tokens": 0,
#       "video_tokens": 0
#     },
#     "cost_details": {
#       "upstream_inference_cost": 0.000083955,
#       "upstream_inference_prompt_cost": 6.3E-7,
#       "upstream_inference_completions_cost": 0.000083325
#     },
#     "completion_tokens_details": {
#       "reasoning_tokens": 0,
#       "image_tokens": 0,
#       "audio_tokens": 0
#     }
#   }
# }

# GPT LUNA PABLO
# {
#   "id": "gen-1786468772-ojiFcs0tAuCnMXeAUceJ",
#   "object": "chat.completion",
#   "created": 1786468772,
#   "model": "openai/gpt-5.6-luna",
#   "provider": "OpenAI",
#   "system_fingerprint": null,
#   "service_tier": "default",
#   "choices": [
#     {
#       "index": 0,
#       "logprobs": null,
#       "finish_reason": "stop",
#       "native_finish_reason": "completed",
#       "message": {
#         "role": "assistant",
#         "content": "Uma curiosidade sobre LLMs: elas não “leem” palavras exatamente como nós. O texto é dividido em **tokens**, que podem ser palavras inteiras, pedaços de palavras, espaços ou pontuação.\n\nPor exemplo, uma palavra longa ou incomum pode virar vários tokens. Isso significa que a pergunta “Qual é a soma de 123 e 456?” não é processada como unidades humanas perfeitas, mas como uma sequência de pequenos fragmentos. Essa é uma das razões pelas quais alguns modelos têm dificuldade com tarefas aparentemente simples, como contar letras em uma palavra ou manipular números muito longos.",
#         "refusal": null,
#         "reasoning": "**Explaining next-token prediction**\n\nI need to respond in Portuguese and keep it concise. It’s interesting that next-token prediction can reveal emergent abilities in language models. A fun fact is that LLMs don’t just store exact text; they can memorize rare sequences instead. There’s a nuance here since tokenization means one word can be split into multiple tokens, which affects how they behave. Let me think about one curious detail I can share!",
#         "reasoning_details": [
#           {
#             "type": "reasoning.summary",
#             "summary": "**Explaining next-token prediction**\n\nI need to respond in Portuguese and keep it concise. It’s interesting that next-token prediction can reveal emergent abilities in language models. A fun fact is that LLMs don’t just store exact text; they can memorize rare sequences instead. There’s a nuance here since tokenization means one word can be split into multiple tokens, which affects how they behave. Let me think about one curious detail I can share!",
#             "format": "openai-responses-v1",
#             "index": 0
#           },
#           {
#             "type": "reasoning.encrypted",
#             "data": "gAAAAABqe1mmrQ_j-jxeU9ytMD2XPqNdKYlwLg3dOYhlDetO82d2FDO8d_tg_B9xtM9WwkGt_WdMPPlZYAebnjuWUU2nhue-LUtDAeMsL2DbMW4TuANaJBY9U4QuxB_dmo_ZsxXZbx410BMfjTH-hEIN6bq1T0iibN4yA_BFshDTsTrNpuUAHQ_rfJ3QcuirPVI6uLSKPXXZKKpyr1yjleX3FFh_CtTHYkpSP-u0YtiloTfes4cdr4Gad1Cjxd416epUM7tvrlLrKKgsP7jOfSJkQopBaMEypz-5Fc1jezV3_D99Su3Lwr7yByC6C3wE_Fu4X7pJeU1cVq01BmGSegqOGIPe9HYiUIEeeBJ0TBf5J7JD9uFhRUEonuAOuJxmEsTKD2CtmCofe7L-hxzxMhyXr4Dhr8D7kgIFDUKCCQ4tnF7SiNHb5XBbXqtGtdxXbinbd9wsheIubz8u6sXCKL1yTfsxscnPhKxhontp9rkAuMInq_TtL-RZ6qvroWnmvuxkDd1xmD58AyXw1dbXiK85O6sJda0nl0L5BErundffOL76alRX1v6uiLIUmrrkFIOcXT2Eur8FOH_0IAcuPgTjCMVGFZvGSddj-tokMQIU28nU_CafuiQa_-Lq9iOAOMuVDjw0V0y-uhwnOaclm39sv_XB64pEe1WNYsC9isqsJpovKRLfpoMsPW4XMWg0zJDZzKuSg0SyA6qfSHlFWMRY4-bqnaxLZ3Wt6neQ9b2QokeST5YJyYioInmOu_L5BPpeWhypd_0K3UvDvH8wuRJX6Zhh3aPjkPyRpU8TMNCOMkiljpP6-KOovY2aKEeXXHfkvQ5wH40i7H_g5ghQLiXb6EtDTJHBlhHoJFTOxKRzO-vBFXzDcLN8eb38jA8e0TSzLs_hWMNj6haqHJwJrTJfp-zGlnpcYHzJN0PaFOPw0Llqp3MESTLmgBEjH3bnplIdYk54Ju1HIT63S6rk7a5QyVfnrOQ5ZaBz1ybanSjCHL2yKhobm0aSJ8HpOsewKEBmGE_yKL-zKbfMdBVf-09fkeUGrPpevelfxqlSenlCLHKzewzmdeo24XSDci7bkbwTonFMYHoMXoWUnNxLXIsItT_PL0yh50Xumds-pBOplJkM5m9V_N-9jnJtKazeETBI2YSCAY31bct8vBa_zQlQmeYNtza1DVNi6YnbQZ2A-7hzFwV7ROjyOV9ST1Km8-2Qwnpu4-QbKg3GWcBF7SIOILoA8TfdMwNF3YkXQYgQnbBvhIUT3UrWKwPEkrA7mtsSWuCHsfq27NKguhej5BNr1DTsIJJzQLqqvOUIqp86lWJU7QFk2V2A1JNIQM_k_MQ2ieBvWoZB.eyJlbmRwb2ludF9zbHVnIjoib3BlbmFpL2dwdC01LjYtbHVuYS0yMDI2MDcwOXxvcGVuYWkifQ",
#             "format": "openai-responses-v1",
#             "id": "rs_0d8b9aaf4ea070f0016a7b59a490508194bd1dd21f7ff3926d",
#             "index": 1
#           }
#         ]
#       }
#     }
#   ],
#   "usage": {
#     "prompt_tokens": 15,
#     "completion_tokens": 195,
#     "total_tokens": 210,
#     "cost": 0.0001185,
#     "is_byok": false,
#     "prompt_tokens_details": {
#       "cached_tokens": 0,
#       "cache_write_tokens": 0,
#       "audio_tokens": 0,
#       "video_tokens": 0
#     },
#     "cost_details": {
#       "upstream_inference_cost": 0.0001185,
#       "upstream_inference_prompt_cost": 0.0000015,
#       "upstream_inference_completions_cost": 0.000117
#     },
#     "completion_tokens_details": {
#       "reasoning_tokens": 65,
#       "image_tokens": 0,
#       "audio_tokens": 0
#     }
#   }
# }