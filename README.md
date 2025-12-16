🧪 Webdojo – Testes Automatizados com Cypress

Este repositório contém a suíte de testes automatizados End-to-End (E2E) da aplicação web Webdojo, desenvolvida utilizando Cypress.

O objetivo deste projeto é garantir qualidade, confiabilidade e cobertura de regressão dos principais fluxos da aplicação, seguindo boas práticas de Engenharia de Qualidade e o conceito de Shift Left.

⸻

📦 Visão Geral do Projeto
	•	Aplicação testada: Webdojo (Aplicação Web)
	•	Framework de testes: Cypress
	•	Tipo de testes: End-to-End (E2E)
	•	Estrutura do repositório: Monorepo (Aplicação + Testes Automatizados)

A aplicação Webdojo está localizada no mesmo repositório e deve estar em execução local antes da execução dos testes automatizados.

⸻

🚀 Pré-requisitos

Antes de começar, certifique-se de que você possui os seguintes itens instalados:
	•	Node.js (recomendado: versão LTS)
	•	npm (ou yarn)

⸻

▶️ Executando a Aplicação Webdojo

Para que os testes Cypress funcionem corretamente, a aplicação Webdojo precisa estar rodando localmente.

npm install
npm run dev

A aplicação será disponibilizada em:

http://localhost:3000

⚠️ Importante: Os testes automatizados assumem que a aplicação esteja ativa nesse endereço.

⸻

🧪 Executando os Testes Automatizados

O projeto possui scripts pré-configurados no package.json para facilitar a execução dos testes.

🔹 Executar todos os testes (Desktop)

npm run test

Configuração de viewport:
	•	Largura: 1400px
	•	Altura: 900px

⸻

🔹 Executar apenas os testes de Login (Desktop)

npm run test-login

Executa exclusivamente o arquivo:

cypress/e2e/login.cy.js


⸻

📱 Executar testes de Login (Mobile)

npm run test-login-mobile

Configuração de viewport mobile:
	•	Largura: 414px
	•	Altura: 896px

Ideal para validações de comportamento responsivo e layout em dispositivos móveis.

⸻

📁 Estrutura do Projeto Cypress

cypress/
├── e2e/
│   ├── alerts.cy.js
│   ├── cep.cy.js
│   ├── consultancy.cy.js
│   ├── github.cy.js
│   ├── hover.cy.js
│   ├── iframe.cy.js
│   ├── kanban.cy.js
│   ├── links.cy.js
│   └── login.cy.js
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
├── support/
│   ├── actions/
│   │   └── consultancy.actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js


⸻

🧩 Responsabilidade das Pastas

📂 cypress/e2e

Contém os arquivos de testes E2E, organizados por funcionalidade da aplicação Webdojo.

⸻

📂 cypress/fixtures

Armazena dados estáticos utilizados nos testes, como arquivos JSON e documentos utilizados em cenários específicos.

⸻

📂 cypress/support

Centraliza configurações globais e código reutilizável dos testes.
	•	commands.js: comandos customizados do Cypress
	•	actions/: fluxos de negócio reutilizáveis
	•	utils.js: funções utilitárias
	•	e2e.js: configurações globais executadas antes dos testes

⸻

🎥 Artefatos de Teste

Durante a execução, o Cypress pode gerar vídeos e screenshots para apoio na análise de falhas.

💡 Recomenda-se não versionar esses arquivos no repositório.

⸻

📌 Execução em CI/CD

Para execução em pipeline:

npm run test


⸻

🚀 Bons testes!