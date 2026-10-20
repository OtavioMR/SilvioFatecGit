# Documentação da atividade: Git — Olá, Professor

**Data da execução:** 20/10/2026  
**Roteiro seguido:** [`../../README.md`](../../README.md)  
**Projeto desenvolvido:** [`../`](../)

## Objetivo

Aplicar o roteiro de Git em um projeto web pequeno, registrar o histórico e guardar evidências visuais das etapas. O projeto apresenta uma saudação que muda conforme o horário local.

## Resultado entregue

- Aplicação em [`../index.html`](../index.html), [`../style.css`](../style.css) e [`../app.js`](../app.js).
- Regras de arquivos ignorados em [`../.gitignore`](../.gitignore).
- Histórico Git prático, com commits, branches, conflito resolvido, rebase, merge, cherry-pick e tag.
- Esta documentação e as capturas PNG em [`./evidencias/`](./evidencias/).
- Painel navegável das capturas em [`./evidencias/index.html`](./evidencias/index.html).

## 1. Verificação do ambiente

1. Consultei `git --version`: **Git 2.56.0.windows.2**.
2. Consultei as ferramentas Node e Vercel: **Node.js 24.21.0**, **npm 11.19.0** e **Vercel CLI 64.5.0**.
3. A identidade global de commit já estava configurada. Mantive as configurações globais existentes sem alterações.
4. Inicializei o repositório dentro da pasta do projeto, sem transformar a pasta que contém o roteiro em repositório.
5. Criei aliases `st`, `br` e `lg` apenas na configuração local deste repositório.

Comandos principais usados:

```powershell
git --version
node --version
npm.cmd --version
git config --local alias.st status
git config --local alias.br branch
git config --local alias.lg "log --oneline --graph --decorate --all"
```

## 2. Criação da página

1. Criei a subpasta `ola-professor` e inicializei a branch principal `main` com `git init -b main`.
2. Criei `index.html`, `style.css`, `app.js` e `.gitignore` seguindo a estrutura do roteiro.
3. A página usa `lang="pt-BR"`, viewport responsivo, um cartão central, fundo em degradê e etiqueta de controle de versão.
4. O JavaScript escolhe “Bom dia”, “Boa tarde” ou “Boa noite” pela hora local. Também marca a saudação para leitores de tela.
5. Abri a página no servidor local de desenvolvimento: `http://127.0.0.1:8765/`.

O primeiro commit foi `9528fa0 feat: cria página olá professor`. A captura [`evidencias/01-projeto-no-navegador.png`](./evidencias/01-projeto-no-navegador.png) mostra a página em execução.

## 3. Ciclo básico de Git

1. Revisei a diferença de estilo com `git diff`.
2. Registrei a melhoria da etiqueta com `git commit -am "fix: melhora contraste da etiqueta"`.
3. Consultei o estado com `git status` e o histórico com `git log --oneline` e o alias `git lg`.
4. Usei `git add` antes dos commits que incluíram arquivos novos ou alterações selecionadas.

O commit foi `6c0b7da fix: melhora contraste da etiqueta`. A imagem [`evidencias/04-ciclo-basico.png`](./evidencias/04-ciclo-basico.png) resume os comandos e o resultado.

## 4. Branches e conflito

1. Criei `feature/animacao` com `git switch -c feature/animacao`.
2. Nessa branch, alterei a saudação e adicionei um efeito de hover na etiqueta.
3. Voltei à `main` e alterei a mesma linha do título para criar um conflito real.
4. Executei `git merge feature/animacao`. O Git sinalizou conflito em `index.html`.
5. Combinei as duas propostas em “Olá, Professor! Vamos praticar Git.”, removi os marcadores e finalizei o merge.

O conflito foi encerrado no commit `349eacc merge: integra animação e saudação`. Consulte [`evidencias/05-branches-conflito.png`](./evidencias/05-branches-conflito.png).

## 5. Rebase, merge e cherry-pick

1. Criei `feature/nova-cor` e alterei o degradê.
2. Enquanto a branch estava aberta, registrei uma alteração independente na `main`.
3. Replantei a branch com `git rebase main` e integrei com `git merge --no-ff feature/nova-cor`.
4. Criei uma pequena melhoria de acessibilidade em outra branch e trouxe o commit específico à `main` com `git cherry-pick`.
5. Usei `git log --oneline --graph --decorate --all` para visualizar o histórico.

O rebase e o cherry-pick foram feitos em branches locais. A captura está em [`evidencias/06-rebase-cherry-pick.png`](./evidencias/06-rebase-cherry-pick.png).

## 6. Recuperação de alterações

Fiz os ensaios na branch isolada `lab/maquina-do-tempo`:

1. `git restore` descartou uma alteração não preparada.
2. `git restore --staged` retirou uma alteração da área de stage; em seguida, `git restore` limpou a alteração local de ensaio.
3. `git reset --soft HEAD~1` manteve o ensaio em stage; `git reset --mixed HEAD` manteve o arquivo modificado fora do stage.
4. `git reset --hard HEAD~1` descartou somente um commit criado para o ensaio nessa branch descartável.
5. `git revert --no-edit HEAD` criou um commit inverso e preservou o histórico.
6. `git stash push`, `git stash show -p` e `git stash pop` guardaram, exibiram e restauraram uma alteração temporária.
7. Consultei `git reflog -8 --oneline` para ver os movimentos de `HEAD`.

A branch de laboratório ficou no repositório para que o commit de revert possa ser inspecionado. A `main` não recebeu commits descartáveis. Captura: [`evidencias/07-recuperacao.png`](./evidencias/07-recuperacao.png).

## 7. Bisect, hook e manutenção

1. Em uma sequência descartável de commits, usei `git bisect start`, marquei os extremos bom e ruim, confirmei o commit intermediário bom e deixei o Git apontar o primeiro commit ruim.
2. O ensaio identificou `ea866bb` como primeiro commit ruim; a branch de teste e o arquivo temporário foram removidos ao concluir.
3. Instalei por alguns minutos um hook `pre-commit` local. O hook bloqueou um commit de demonstração com `console.log`; removi a linha staged e apaguei o hook depois.
4. `git clean -fdn` foi usado somente em modo de simulação. Não executei uma limpeza destrutiva.
5. Consultei a integridade do repositório com `git fsck --full`.

Captura: [`evidencias/08-bisect-hook.png`](./evidencias/08-bisect-hook.png).

## 8. Visualização, worktree e tags

1. Consultei o grafo de commits, as branches e o tracking local/remoto.
2. Criei uma branch temporária e um segundo worktree com `git worktree add`.
3. Listei os worktrees e removi o worktree auxiliar com `git worktree remove`; a branch temporária também foi removida.
4. Registrei `v1.0.0` como tag anotada e `v1.0.0-beta` como tag leve.

As tags são locais até que sejam enviadas com `git push origin --tags`. Captura: [`evidencias/09-worktree-tags.png`](./evidencias/09-worktree-tags.png).

## 9. Remoto, push, fetch e clone

1. Criei um remoto bare **local** na pasta irmã `ola-professor-remoto.git` para praticar a comunicação sem publicar o código em uma conta externa.
2. Configurei `origin`, executei `git push -u origin main`, `git fetch --all` e conferi `git branch -vv`.
3. Fiz um clone raso desse remoto local em uma pasta temporária.
4. Depois que você enviou a URL do GitHub, renomeei o remote local para `origin-lab` e configurei `origin` como `https://github.com/OtavioMR/SilvioFatecGit.git`.
5. O repositório estava vazio. O push `git push -u origin main` concluiu e a branch `main` passou a rastrear `origin/main`.
6. A captura [`evidencias/13-github-repository.png`](./evidencias/13-github-repository.png) mostra o conteúdo no repositório GitHub.

O repositório GitHub informado para publicação é [`OtavioMR/SilvioFatecGit`](https://github.com/OtavioMR/SilvioFatecGit). O push da branch `main` e das tags será registrado depois que a documentação e todas as capturas estiverem prontas.

Captura: [`evidencias/10-remoto-local.png`](./evidencias/10-remoto-local.png).

## 10. Vercel

1. Confirmei que a Vercel CLI 64.5.0 estava autenticada na conta.
2. Executei `vercel.cmd --yes` na pasta do projeto. Como era o primeiro deploy, a CLI criou o projeto `otaviomrs-projects/ola-professor` e promoveu essa primeira publicação para produção.
3. O site ficou disponível em [`https://ola-professor-cyan.vercel.app/`](https://ola-professor-cyan.vercel.app/).
4. Confirmei a resposta com `curl.exe -I -L https://ola-professor-cyan.vercel.app`; o servidor retornou **HTTP 200 OK**.
5. A captura [`evidencias/11-vercel-publicado.png`](./evidencias/11-vercel-publicado.png) mostra o site publicado. A captura [`evidencias/12-vercel-deploy.png`](./evidencias/12-vercel-deploy.png) registra os comandos e o endereço.

Depois do push inicial, executarei `vercel.cmd --prod --yes` para deixar a publicação de produção alinhada à versão final documentada.

## 11. Capturas de tela

As capturas estão numeradas e foram salvas em [`evidencias/`](./evidencias/). As capturas 01 e 11 mostram o site no navegador local e na Vercel; 13 mostra o repositório no GitHub. As demais são capturas do painel de evidências no navegador, com os comandos e resultados observados de cada passo. O painel descreve cada captura em [`evidencias/index.html`](./evidencias/index.html).

| Captura | Evidência |
|---|---|
| [`01-projeto-no-navegador.png`](./evidencias/01-projeto-no-navegador.png) | Aplicação local |
| [`02-configuracao.png`](./evidencias/02-configuracao.png) | Ferramentas e configuração |
| [`03-criacao-projeto.png`](./evidencias/03-criacao-projeto.png) | Inicialização do projeto |
| [`04-ciclo-basico.png`](./evidencias/04-ciclo-basico.png) | `add`, `commit` e `log` |
| [`05-branches-conflito.png`](./evidencias/05-branches-conflito.png) | Branches e resolução de conflito |
| [`06-rebase-cherry-pick.png`](./evidencias/06-rebase-cherry-pick.png) | Rebase, merge e cherry-pick |
| [`07-recuperacao.png`](./evidencias/07-recuperacao.png) | `restore`, `reset`, `revert`, `stash` e `reflog` |
| [`08-bisect-hook.png`](./evidencias/08-bisect-hook.png) | `bisect`, hook e manutenção |
| [`09-worktree-tags.png`](./evidencias/09-worktree-tags.png) | Worktree e tags |
| [`10-remoto-local.png`](./evidencias/10-remoto-local.png) | Remote local, push, fetch e clone |
| [`11-vercel-publicado.png`](./evidencias/11-vercel-publicado.png) | Aplicação publicada |
| [`12-vercel-deploy.png`](./evidencias/12-vercel-deploy.png) | Registro do deploy |
| [`13-github-repository.png`](./evidencias/13-github-repository.png) | Repositório GitHub após o push |

O painel pode ser aberto em `http://127.0.0.1:8765/docs/evidencias/index.html?passo=01` enquanto o servidor local estiver ativo.

## 12. Publicação no GitHub

O repositório remoto fornecido pelo usuário estava vazio antes do envio. O push inicial de `main` foi feito pela URL oficial HTTPS e apareceu no repositório. A CLI `gh` não está instalada; usei o remote Git do repositório e a credencial já configurada no ambiente. As tags e a documentação final serão enviadas no próximo push.

O deploy da Vercel foi publicado pela CLI. A integração automática de deploy a cada push depende de conectar o projeto à conta GitHub nas configurações do projeto Vercel.
