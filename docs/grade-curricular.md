# Grade Curricular — Pós-Graduação em Engenharia de Software em IA Aplicada

> **Fonte:** Projeto Pedagógico de Curso (PPC) — Pós-Graduação Lato Sensu em Engenharia de Software em IA Aplicada.
>
> **Objetivo deste arquivo:** fornecer uma representação estruturada e numerada da matriz curricular e do conteúdo programático oficial para uso por agentes de IA no repositório.
>
> **Nota sobre a hierarquia:** o PPC não apresenta títulos individuais de “aulas”. Para preservar fielmente a fonte, os quatro itens publicados em cada disciplina como **Conteúdo Programático 1–4** são mantidos com essa nomenclatura e numerados hierarquicamente (`1.1`, `1.2`, etc.). Não foram inventadas aulas ou subdivisões adicionais.
>
> **Carga horária total:** 480 h
> **Duração:** 12 meses
> **Disciplinas:** 15, além de Ambientação (0 h)

---

## 0. Ambientação — 0 h

### Ementa

Ensino a distância: características desta modalidade de estudo. A tecnologia e o ensino à distância. Legislação do Ensino a Distância no Brasil. Aspectos relacionados ao perfil no Ensino a Distância.

### Conteúdos programáticos

- **0.1 — Conteúdo Programático 1:** Introdução ao Ensino a Distância.
- **0.2 — Conteúdo Programático 2:** Tecnologia e educação.
- **0.3 — Conteúdo Programático 3:** Legislação do Ensino a Distância no Brasil.
- **0.4 — Conteúdo Programático 4:** Perfil do aluno no Ensino a Distância.

> O PPC não lista uma seção de habilidades e competências específica para Ambientação.

---

# Disciplinas

## 1. Fundamentos de IA e LLMs para Programadores — 30 h

### Ementa

Estudo dos fundamentos teóricos e práticos da Inteligência Artificial, Machine Learning, Deep Learning e Large Language Models (LLMs). Aborda conceitos de redes neurais, embeddings, tensores, attention e transformers, com aplicação em projetos de desenvolvimento web e automação inteligente. Explora o uso de frameworks, IDEs e ferramentas assistidas por IA, bem como a integração de agentes autônomos e bancos vetoriais em aplicações práticas.

### Conteúdos programáticos

- **1.1 — Conteúdo Programático 1:** Fundamentos de Machine Learning, Deep Learning e Redes Neurais.
- **1.2 — Conteúdo Programático 2:** Estrutura e funcionamento dos LLMs e transformers.
- **1.3 — Conteúdo Programático 3:** Engenharia de prompt e ferramentas inteligentes para desenvolvedores.
- **1.4 — Conteúdo Programático 4:** Implementação prática de modelos e agentes em JavaScript.

### Habilidades e competências desenvolvidas

- Compreender ML, DL, redes neurais, tensores, embeddings, attention/transformers.
- Implementar modelos básicos e pipelines de treino/inferência.
- Analisar desempenho (overfitting, viés/variância) e ajustar hiperparâmetros.
- Empregar ferramentas/IDEs com assistência por IA para acelerar desenvolvimento.
- Integrar LLMs e bancos vetoriais em apps web (JS).
- Aplicar boas práticas de versionamento e reprodutibilidade.
- Raciocínio crítico sobre limitações e riscos de modelos.

---

## 2. APIs de IA Generativa e Prompt Engineering — 30 h

### Ementa

Aplicação de APIs generativas em modelos de texto, imagem, áudio e vídeo. Aborda o design de prompts avançados, automação de fluxos multimodais e integração de serviços OpenAI, Gemini, Anthropic e Hugging Face. Explora práticas de custo-eficiência e consistência de resultados na criação de sistemas generativos.

### Conteúdos programáticos

- **2.1 — Conteúdo Programático 1:** Fundamentos de APIs de IA generativa e multimodalidade.
- **2.2 — Conteúdo Programático 2:** Engenharia de prompt avançada e encadeamento de prompts.
- **2.3 — Conteúdo Programático 3:** Integração prática com serviços OpenAI, Gemini e Anthropic.
- **2.4 — Conteúdo Programático 4:** Aplicações em OCR, bots e análise de mídia inteligente.

### Habilidades e competências desenvolvidas

- Projetar prompts (few-shot, chain-of-thought, templates) com consistência.
- Integrar APIs (OpenAI, Gemini, Anthropic, HF) para texto, imagem, áudio, vídeo.
- Encadear prompts e construir fluxos multimodais (RAG/automação).
- Controlar custo/latência e monitorar qualidade de respostas.
- Construir aplicações de OCR, bots e análise de mídia.
- Testar e avaliar saídas (guardrails, validação, fallback).

---

## 3. Model Context Protocol (MCP) — 30 h

### Ementa

Introdução ao padrão Model Context Protocol (MCP) para integração de LLMs, ferramentas e agentes. O módulo explora arquitetura, autenticação, tokens de serviço, WAF e interoperabilidade entre plataformas, com ênfase em implementação prática de servidores MCP em JavaScript.

### Conteúdos programáticos

- **3.1 — Conteúdo Programático 1:** Fundamentos e estrutura do Model Context Protocol.
- **3.2 — Conteúdo Programático 2:** Criação e integração de MCPs em ambientes de desenvolvimento.
- **3.3 — Conteúdo Programático 3:** Interoperabilidade entre LLMs, ferramentas e IDEs.
- **3.4 — Conteúdo Programático 4:** Implementação de segurança e controle de acesso em MCPs.

### Habilidades e competências desenvolvidas

- Entender arquitetura/semântica do MCP e interoperabilidade com LLMs/tools.
- Construir servidores MCP em JavaScript e expor capabilities com segurança.
- Integrar IDEs, serviços e agentes via autenticação, tokens e WAF.
- Implementar controle de acesso, rate limiting e observabilidade.
- Padronizar contratos e reduzir acoplamento entre componentes de IA.

---

## 4. Criação de Agentes Autônomos — 30 h

### Ementa

A disciplina estuda as arquiteturas, padrões e metodologias de desenvolvimento de agentes autônomos, destacando sua aplicação prática em sistemas inteligentes e ambientes computacionais complexos. São abordados os principais modelos de raciocínio e execução, como ReAct (Reason + Act) e Plan-and-Execute, bem como os conceitos de memória, reflexão e adaptação contextual em agentes artificiais. O conteúdo inclui a utilização de ferramentas avançadas como LangChain e LangGraph para construção de fluxos autônomos, integração entre agentes e APIs, e desenvolvimento de sistemas multiagentes colaborativos aplicados à automação de tarefas e tomada de decisão. Ao final, o aluno será capaz de projetar, implementar e gerenciar agentes inteligentes com diferentes níveis de autonomia, alinhados a padrões modernos de engenharia de software e IA generativa.

### Conteúdos programáticos

- **4.1 — Conteúdo Programático 1:** Arquitetura e funcionamento de agentes autônomos.
- **4.2 — Conteúdo Programático 2:** Aplicações dos padrões ReAct e Tree of Thoughts.
- **4.3 — Conteúdo Programático 3:** Desenvolvimento de fluxos complexos com LangGraph.
- **4.4 — Conteúdo Programático 4:** Implementação prática de agentes multi-agentes colaborativos.

### Habilidades e competências desenvolvidas

- Projetar agentes com padrões ReAct, Plan-and-Execute e ToT.
- Usar memória, reflexão e ferramentas para ampliar autonomia do agente.
- Orquestrar fluxos com LangChain/LangGraph e sistemas multiagentes.
- Definir limites de autonomia, métricas e telemetria de agentes.
- Resolver tarefas complexas com chamada de funções (tool use) e HITL.

---

## 5. Ferramentas de IA para UX e UI — 30 h

### Ementa

A disciplina apresenta a aplicação de ferramentas e técnicas de Inteligência Artificial no design de interfaces e na experiência do usuário (UX/UI), promovendo a integração entre criatividade, tecnologia e automação. Serão explorados recursos de prototipação inteligente, geração automatizada de fluxos de interação, e design assistido por IA em plataformas modernas. O conteúdo inclui o uso de ferramentas generativas para criação visual, análise de comportamento do usuário com IA, e integração contínua de protótipos em ambientes colaborativos e sistemas MCP. Também serão discutidos princípios de usabilidade, acessibilidade, personalização e interação adaptativa, capacitando o aluno a projetar interfaces inovadoras, centradas no usuário e otimizadas por inteligência artificial.

### Conteúdos programáticos

- **5.1 — Conteúdo Programático 1:** Prototipação inteligente com ferramentas de IA.
- **5.2 — Conteúdo Programático 2:** Integração de IA em fluxos de UX e design responsivo.
- **5.3 — Conteúdo Programático 3:** Automação de testes e análise de usabilidade.
- **5.4 — Conteúdo Programático 4:** Uso de IA em design system e interação com usuários.

### Habilidades e competências desenvolvidas

- Prototipar interfaces com IA (wireframes, fluxos, variantes).
- Integrar análise comportamental e personalização assistida por modelos.
- Automatizar testes de usabilidade e inspeções heurísticas.
- Aplicar princípios de acessibilidade, UX writing e design system com IA.
- Operar ciclo contínuo: protótipo → teste → iteração com suporte inteligente.

---

## 6. Ferramentas de IA para DevOps — 30 h

### Ementa

A disciplina explora a integração entre Inteligência Artificial e práticas DevOps, abordando o uso de agentes inteligentes e modelos generativos na automação, observabilidade e otimização de ambientes de desenvolvimento e operação de software. Serão estudadas técnicas de Infraestrutura como Código (IaC), AIOps (Artificial Intelligence for IT Operations) e automação de pipelines CI/CD, com foco em eficiência, segurança e escalabilidade. O conteúdo inclui a aplicação de modelos de linguagem natural para troubleshooting automatizado, detecção de anomalias, geração de dashboards inteligentes, e auto-remediação de incidentes. Também serão trabalhadas estratégias de FinOps e compliance com políticas de segurança e governança, preparando o aluno para projetar e operar infraestruturas inteligentes, resilientes e otimizadas em ambientes de nuvem corporativa.

### Conteúdos programáticos

- **6.1 — Conteúdo Programático 1:** Infraestrutura como código e automação inteligente.
- **6.2 — Conteúdo Programático 2:** AIOps e observabilidade baseada em IA.
- **6.3 — Conteúdo Programático 3:** Segurança, compliance e FinOps.
- **6.4 — Conteúdo Programático 4:** Auto-remediação e pipelines inteligentes.

### Habilidades e competências desenvolvidas

- Gerar IaC e pipelines CI/CD assistidos por IA (PR-first, validações).
- Operar AIOps: detecção de anomalias, troubleshooting guiado, SRE assistido.
- Implementar observabilidade inteligente (logs, métricas, traces, NL→PromQL).
- Automatizar remediação com guardrails, canary/rollback.
- Aplicar segurança/compliance e práticas de FinOps em nuvem.

---

## 7. Ferramentas de IA para Gestão de Projetos — 30 h

### Ementa

A disciplina aborda a aplicação de Inteligência Artificial na automação, análise e otimização da gestão de projetos de software, integrando práticas ágeis e ferramentas inteligentes. Serão estudadas técnicas de planejamento assistido por IA, geração automatizada de cronogramas e roadmaps, e priorização inteligente de backlog com base em critérios quantitativos e preditivos. O conteúdo inclui o uso de modelos generativos e algoritmos de machine learning para análise de riscos, previsão de prazos e custos, além da automação de relatórios executivos e status reports em plataformas como Jira, Trello, Notion e Asana. Também serão discutidos aspectos de governança, compliance e rastreabilidade de projetos, capacitando o aluno a utilizar soluções de IA para aumentar a eficiência operacional e a qualidade da gestão em equipes de desenvolvimento tecnológico.

### Conteúdos programáticos

- **7.1 — Conteúdo Programático 1:** Planejamento e escopo de projetos com IA.
- **7.2 — Conteúdo Programático 2:** Priorização e previsão inteligente de tarefas.
- **7.3 — Conteúdo Programático 3:** Riscos, mitigação e governança assistida.
- **7.4 — Conteúdo Programático 4:** Automação em plataformas de gestão (Jira, Trello, Notion).

### Habilidades e competências desenvolvidas

- Planejar escopo, épicos e histórias com apoio de IA (NL→artefatos).
- Priorizar backlog com frameworks (RICE, WSJF) e simulações preditivas.
- Estimar prazos/custos com modelos e Monte Carlo assistido.
- Monitorar riscos e gerar planos de mitigação automatizados.
- Automatizar relatórios/status e integrações (Jira, Trello, Notion, Slack).

---

## 8. Arquitetura de Sistemas com IA — 30 h

### Ementa

A disciplina apresenta os fundamentos, princípios e padrões de design de sistemas orientados à Inteligência Artificial (AI-first), com foco na arquitetura, escalabilidade e governança de aplicações inteligentes. Serão estudados os componentes e camadas que compõem um sistema baseado em IA, abordando padrões de arquitetura distribuída, roteamento inteligente de modelos, integração de agentes e multiagentes, e estratégias de otimização de custo, latência e desempenho. O conteúdo também contempla o uso de padrões de Retrieval-Augmented Generation (RAG), modelos de orquestração, e mecanismos de observabilidade e auditoria de sistemas inteligentes, preparando o aluno para projetar, implementar e manter infraestruturas de IA corporativas robustas, seguras e escaláveis, alinhadas às demandas de produção e governança tecnológica.

### Conteúdos programáticos

- **8.1 — Conteúdo Programático 1:** Fundamentos das arquiteturas AI-First.
- **8.2 — Conteúdo Programático 2:** Modelagem de agentes e multi-agentes em sistemas complexos.
- **8.3 — Conteúdo Programático 3:** Padrões de design e otimização de custo-latência.
- **8.4 — Conteúdo Programático 4:** Arquitetura corporativa e observabilidade em IA.

### Habilidades e competências desenvolvidas

- Projetar arquiteturas AI-first e decidir entre regras vs. modelos.
- Modelar agentes/multiagentes e padrões de RAG/roteamento inteligente.
- Otimizar custo/latência/precisão com caching, model tiering e routing.
- Implementar observabilidade, auditoria e trilhas de decisão (HITL).
- Desenhar topologias enterprise (API GW, k8s, serviços compartilhados).

---

## 9. Processamento de Dados e Fine-Tuning de Modelos — 30 h

### Ementa

A disciplina aborda as etapas e técnicas de processamento de dados, preparação de datasets e ajuste fino (fine-tuning) de modelos de Inteligência Artificial, com foco em aplicações práticas em ambientes corporativos e de pesquisa. São trabalhados os princípios de coleta, limpeza, balanceamento e estruturação de dados, além do uso de APIs comerciais (como OpenAI e Gemini) para treinamento supervisionado e monitoramento de desempenho de modelos. Inclui o estudo e aplicação das técnicas LoRA (Low-Rank Adaptation) e PEFT (Parameter-Efficient Fine-Tuning) para otimização de desempenho e custo, bem como estratégias de avaliação e validação de modelos ajustados. O módulo culmina no desenvolvimento de um projeto prático de modelo customizado, integrando fluxos de automação, análise de métricas e documentação técnica para soluções baseadas em IA generativa.

### Conteúdos programáticos

- **9.1 — Conteúdo Programático 1:** Fundamentos e decisão de fine-tuning.
- **9.2 — Conteúdo Programático 2:** Preparação e engenharia de dados: coleta, limpeza, padronização e formatação de datasets para APIs de treinamento, com ênfase em JSONL e automação via JavaScript.
- **9.3 — Conteúdo Programático 3:** Execução e monitoramento de fine-tuning: upload, configuração de hiperparâmetros, versionamento, acompanhamento e documentação de processos de treinamento.
- **9.4 — Conteúdo Programático 4:** Otimização e avaliação de modelos ajustados: aplicação prática de LoRA e PEFT, testes A/B, análise de métricas de desempenho, mitigação de overfitting e integração do modelo em sistemas funcionais.

### Habilidades e competências desenvolvidas

- Coletar, limpar e padronizar dados; estruturar datasets (JSONL).
- Executar fine-tuning em APIs (upload, hyperparams, monitoramento).
- Aplicar LoRA/PEFT e comparar com FT completo (trade-offs).
- Avaliar modelos (métricas, testes A/B, robustez) e mitigar overfitting.
- Integrar modelos ajustados em pipelines e services produtivos.

---

## 10. Segurança e Governança em IA — 30 h

### Ementa

A disciplina introduz os fundamentos legais, éticos e de segurança relacionados ao desenvolvimento e uso da Inteligência Artificial, contextualizando a atuação profissional dentro das normas de proteção de dados e responsabilidade algorítmica. Serão estudadas as legislações LGPD (Lei Geral de Proteção de Dados) e GDPR (General Data Protection Regulation), além de diretrizes internacionais de governança em IA. O conteúdo abrange boas práticas de segurança cibernética, mitigação de ataques adversariais e prevenção de vulnerabilidades em modelos de linguagem e sistemas inteligentes. Também serão analisados os impactos sociais e éticos da IA, incluindo viés algorítmico, transparência, accountability e explicabilidade de modelos, capacitando o aluno a projetar soluções seguras, éticas e em conformidade com padrões regulatórios nacionais e internacionais.

### Conteúdos programáticos

- **10.1 — Conteúdo Programático 1:** LGPD e GDPR aplicados à Inteligência Artificial.
- **10.2 — Conteúdo Programático 2:** Mitigação de ataques e vulnerabilidades em LLMs.
- **10.3 — Conteúdo Programático 3:** Avaliação de viés e responsabilidade ética.
- **10.4 — Conteúdo Programático 4:** Governança e padrões de segurança em IA corporativa.

### Habilidades e competências desenvolvidas

- Aplicar LGPD/GDPR em ciclos de dados e produtos de IA.
- Identificar/mitigar ataques (prompt injection, data poisoning, evasões).
- Avaliar e reduzir vieses; promover transparência e explicabilidade.
- Definir políticas, controles e auditorias de governança de IA.
- Articular segurança cibernética com ciclos de MLOps/LLMOps.

---

## 11. Projeto Integrador – Capstone Project — 30 h

### Ementa

A disciplina tem como foco o desenvolvimento de um projeto integrador prático, que consolida todos os conhecimentos teóricos e técnicos adquiridos ao longo da pós-graduação em Engenharia de Software em IA Aplicada. O aluno será orientado a projetar, implementar e documentar uma solução completa baseada em Inteligência Artificial, aplicando os conceitos de engenharia de software, arquitetura AI-first, Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG) e integração full-stack. Serão trabalhadas as etapas de definição do problema, planejamento técnico, prototipagem, versionamento, testes e implantação, além da defesa técnica do projeto perante banca avaliadora. O módulo enfatiza a aplicação prática, a inovação tecnológica e a capacidade de resolução de problemas reais com uso de IA e ferramentas contemporâneas de desenvolvimento.

### Conteúdos programáticos

- **11.1 — Conteúdo Programático 1:** Planejamento e definição do problema.
- **11.2 — Conteúdo Programático 2:** Desenvolvimento de microsaas com IA integrada.
- **11.3 — Conteúdo Programático 3:** Aplicação de MCP, RAG e agentes orquestrados.
- **11.4 — Conteúdo Programático 4:** Defesa técnica e documentação do projeto.

### Habilidades e competências desenvolvidas

- Formular problema, hipóteses e critérios de sucesso (OKRs/métricas).
- Arquitetar solução com MCP, RAG, agentes e integração full-stack.
- Conduzir ciclo completo: protótipo, testes, observabilidade, deploy.
- Produzir documentação técnica, README, demo e defesa técnica.
- Trabalhar em equipe, gerir prazos e realizar entregas iterativas.

---

## 12. Carreira e Entrevistas para Engenheiros de IA Aplicada — 30 h

### Ementa

A disciplina aborda o desenvolvimento de competências profissionais essenciais para a atuação no mercado de Engenharia de Software e Inteligência Artificial Aplicada. Serão trabalhados o posicionamento estratégico do engenheiro de IA, a criação e otimização de perfis técnicos em plataformas profissionais (como LinkedIn e GitHub), e o desenvolvimento de portfólios e projetos demonstráveis. Inclui práticas de system design voltado a entrevistas técnicas, simulações de problem solving e live coding, e estratégias para comunicação técnica, storytelling e negociação salarial. Também serão explorados temas relacionados à projeção de carreira, progressão por níveis (Júnior, Pleno, Sênior e Principal) e planejamento de crescimento profissional no ecossistema global de IA.

### Conteúdos programáticos

- **12.1 — Conteúdo Programático 1:** Branding e posicionamento profissional em IA.
- **12.2 — Conteúdo Programático 2:** Portfólio técnico e presença digital estratégica.
- **12.3 — Conteúdo Programático 3:** Preparação para entrevistas técnicas e system design.
- **12.4 — Conteúdo Programático 4:** Planejamento de carreira e negociação salarial.

### Habilidades e competências desenvolvidas

- Posicionamento profissional, marca pessoal e presença técnica (LinkedIn/GitHub).
- Construção de portfólio com projetos demonstráveis e storytelling técnico.
- Preparação para entrevistas: problem solving, live coding, system design.
- Negociação salarial e planejamento de progressão (Jr→Principal).
- Comunicação clara com públicos técnico e executivo.

---

## 13. 4ª Revolução Industrial e Tecnologias Emergentes — 40 h

### Ementa

Conceitos, princípios e evolução da Indústria 4.0. Inovação e tecnologia aplicada à Indústria 4.0. Internet das Coisas (IoT), Inteligência Artificial (IA), Big Data e Computação em Nuvem. Supply Chain/Logística 4.0. Indústria criativa e economia digital. Impactos sociais, éticos e ambientais das tecnologias emergentes.

### Conteúdos programáticos

- **13.1 — Conteúdo Programático 1:** Fundamentos da Indústria 4.0: Conceito, princípios e evolução histórica. Transformação digital e o impacto na manufatura. Modelos de negócios na era digital.
- **13.2 — Conteúdo Programático 2:** Inovação e tecnologia aplicada à Indústria 4.0: Internet das Coisas (IoT) e Computação em Nuvem. Inteligência Artificial (IA), Machine Learning e Big Data.
- **13.3 — Conteúdo Programático 3:** Supply Chain/Logística 4.0: Logística Inteligente e rastreamento em tempo real. Automação de processos industriais e robótica colaborativa.
- **13.4 — Conteúdo Programático 4:** Indústria Criativa, Sustentabilidade e Impactos Sociais: Economia digital e transformação de produtos e serviços. Sustentabilidade e desafios éticos da digitalização. Futuro do trabalho na Indústria 4.0 e novas competências profissionais.

### Competências e habilidades

- Compreender os conceitos, características e impactos da Indústria 4.0 e tecnologias emergentes.
- Identificar e analisar as principais tecnologias habilitadoras da transformação digital na indústria.
- Aplicar conceitos de inovação, automação e inteligência de dados em processos produtivos e logísticos.
- Avaliar os impactos econômicos, sociais e ambientais da digitalização industrial.

---

## 14. Foresight Estratégico — 40 h

### Ementa

Foresight no contexto estratégico corporativo. Modelos de foresight: Formal (Intencional/Acidental); Informal (Intencional/Acidental); Mapa Matricial; Matriz de Atratividade; e Business Cube. Futurismo. Predições e modelos de predições. Método Delphi. Método Brainstorming.

### Conteúdos programáticos

- **14.1 — Conteúdo Programático 1:** Foresight e prospectiva: conceitos e modelos.
- **14.2 — Conteúdo Programático 2:** Mapa Matricial, Matriz de Atratividade e Business Cube.
- **14.3 — Conteúdo Programático 3:** Futurismo. Predições e modelos de predições.
- **14.4 — Conteúdo Programático 4:** Estratégia e decisão: métodos Delphi e Brainstorm.

### Competências e habilidades

- Compreender o contexto e o conceito da aplicação dos modelos de foresight sob a perspectiva estratégica corporativa.
- Conhecer os métodos de foresight utilizados para a descoberta, mapeamento, classificação e seleção de megatendências como subsídio estratégico corporativo.
- Conhecer a origem e o conceito do futurismo como ciência prática. Conhecer o conceito e principais características das predições. Conhecer os principais modelos de predições.
- Conhecer o método Delphi. Conhecer o método Brainstorm. Compreender a aplicação de ambos os métodos em termos estratégicos e no processo de tomada de decisões.

---

## 15. Ecossistema de Inovação — 40 h

### Ementa

Ambiente, Redes e Ecossistema de inovação. Colaboração entre universidade, empreendedores e investidores. Incubadoras e Aceleradoras. Modelo de Maturidade de Ecossistema de Inovação.

### Conteúdos programáticos

- **15.1 — Conteúdo Programático 1:** Ambiente, Redes e Ecossistema de inovação.
- **15.2 — Conteúdo Programático 2:** Colaboração entre universidade, empreendedores e investidores.
- **15.3 — Conteúdo Programático 3:** Incubadoras e Aceleradoras.
- **15.4 — Conteúdo Programático 4:** Modelo de Maturidade de Ecossistema de Inovação.

### Competências e habilidades

- Identificar os principais componentes dos modelos de ecossistema de inovação.
- Utilizar ferramentas tecnológicas para mapear a maturidade dos ecossistemas de inovação.
- Identificar os principais atores do ecossistema de inovação.
- Gerenciar tempo e atividades no ambiente de inovação.

---

# Índice compacto

| Nº | Disciplina | Carga horária | Itens de conteúdo |
|---:|---|---:|---:|
| 0 | Ambientação | 0 h | 4 |
| 1 | Fundamentos de IA e LLMs para Programadores | 30 h | 4 |
| 2 | APIs de IA Generativa e Prompt Engineering | 30 h | 4 |
| 3 | Model Context Protocol (MCP) | 30 h | 4 |
| 4 | Criação de Agentes Autônomos | 30 h | 4 |
| 5 | Ferramentas de IA para UX e UI | 30 h | 4 |
| 6 | Ferramentas de IA para DevOps | 30 h | 4 |
| 7 | Ferramentas de IA para Gestão de Projetos | 30 h | 4 |
| 8 | Arquitetura de Sistemas com IA | 30 h | 4 |
| 9 | Processamento de Dados e Fine-Tuning de Modelos | 30 h | 4 |
| 10 | Segurança e Governança em IA | 30 h | 4 |
| 11 | Projeto Integrador – Capstone Project | 30 h | 4 |
| 12 | Carreira e Entrevistas para Engenheiros de IA Aplicada | 30 h | 4 |
| 13 | 4ª Revolução Industrial e Tecnologias Emergentes | 40 h | 4 |
| 14 | Foresight Estratégico | 40 h | 4 |
| 15 | Ecossistema de Inovação | 40 h | 4 |

**Total das 15 disciplinas:** 480 h.
**Ambientação:** 0 h.
