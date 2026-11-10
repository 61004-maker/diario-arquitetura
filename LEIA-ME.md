# Diário de Arquitetura no Netlify — com palavra-passe só tua

Como funciona: no fim do site há "Área privada". Pede a tua palavra-passe; depois
aparecem os botões para escrever, editar e apagar resumos, que ficam logo no site.
A palavra-passe fica guardada no Netlify (nunca no código do site).

## Passo 1 — GitHub (2 minutos)
1. Cria conta em github.com (grátis) → botão "New repository" → dá um nome (ex.: diario) → Create.
2. Clica em "uploading an existing file" e arrasta para lá TODO o conteúdo desta pasta
   (as pastas "netlify" e "data", e os ficheiros index.html, package.json, netlify.toml). Clica em Commit.

## Passo 2 — Netlify (2 minutos)
1. Em app.netlify.com → "Add new project" → "Import an existing project" → GitHub → escolhe o repositório → Deploy.
2. Quando terminar, vai a Site configuration → Environment variables → Add a variable:
   - Key: ADMIN_PASSWORD
   - Value: a palavra-passe que quiseres (só tu a sabes)
3. Vai a Deploys → Trigger deploy → Deploy site (para a palavra-passe ser lida).

## Passo 3 — Usar
Abre o teu site, desce até ao fim da página, clica em "Área privada" e mete a palavra-passe.
Carrega em "+ Novo resumo", preenche e "Publicar". Aparece logo para toda a gente.

Usa uma palavra-passe longa e não a partilhes com ninguém.
