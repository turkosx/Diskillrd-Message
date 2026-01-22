# Diskill Message

Userscript para **apagar mensagens em massa no Discord**, com foco em **apagar somente as suas mensagens** (DMs e canais).

> ⚠️ Use com cuidado. Apagar mensagens é uma ação irreversível.

## Recursos
- UI “premium” (clara) dentro do Discord
- Botão fixo (ícone de lixeira) na barra do chat (com fallback)
- Auto-preenchimento de IDs (Autor/Servidor/Canal)
- Filtros: texto, link, arquivo, fixadas (opcional)
- Intervalos: por mensagem (min/max) e por data
- Proteções:
  - validação do token (evita 401)
  - evita tentar apagar mensagens de outros (reduz 404/403)

## Instalação (Tampermonkey)
1. Instale a extensão **Tampermonkey**
2. Abra o arquivo do script e clique em **Install**
3. Alternativa: use o `@downloadURL` (raw do GitHub) para instalar pelo link do arquivo

## Como usar
1. Abra um canal/DM no Discord (web)
2. Clique no ícone de lixeira do **Diskill Message**
3. Clique em **eu** (Author ID), **atual** (Servidor/Canal)
4. Clique em **preencher** (token)
5. Ajuste filtros/intervalos se quiser
6. Clique em **▶︎ Apagar**

## Problemas comuns
### Botão não aparece
- Troque de canal/DM e recarregue a página
- O Discord muda o DOM com frequência; o script tem fallback no canto superior direito

### Erro 401 (Unauthorized)
- Token inválido ou preenchido por autofill do navegador
- Desative senha salva do Discord / password manager para esse site

### Erro 429 (Rate limit)
- Aumente “Atraso da busca” e “Atraso da exclusão” no painel Avançado

### Erro 404/403 ao apagar
- Normalmente ocorre ao tentar apagar mensagem que não é sua (ou sem permissão)
- O script já aplica “failsafe” para ignorar mensagens que não sejam do authorId

## Créditos
Inspirado no projeto **Undiscord** (victornpb) e adaptado/repaginado para **Diskill Message**.

## Licença
MIT — veja o arquivo [LICENSE](./LICENSE).
