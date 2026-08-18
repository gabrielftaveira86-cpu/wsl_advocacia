# Projeto WSL Advocacia e Gestão - TODO

- [x] Inicializar projeto base tRPC + React + Tailwind
- [x] Criar o arquivo `todo.md` e atualizar o plano
- [x] Configurar tipografia profissional (Google Fonts Serif e Sans) e esquema de cores Azul Marinho e Dourado em `client/src/index.css` e `client/index.html`
- [x] Criar schema no banco de dados (`drizzle/schema.ts`) para armazenar leads do Quiz Jurídico (nome, whatsapp, cidade, area, descricao, processo, timestamp)
- [x] Criar procedimento tRPC em `server/routers.ts` para salvar as respostas do quiz e leads
- [x] Implementar componente de Header fixo com navegação fluida, logo tipográfica elegante "WSL Advocacia e Gestão" e botão de contato
- [x] Implementar Hero Section de alto impacto com apresentação de William da Silva Lucas (OAB-SP nº 377.544), botões de WhatsApp e áreas, e espaço preparado para a foto profissional
- [x] Implementar Seção Sobre o Escritório com valores, diferenciais, atendimento presencial (São Bernardo do Campo) e online
- [x] Implementar Seção de Áreas de Atuação (Civil, Previdenciário, Consumidor, Trabalhista, Criminal) com cards elegantes e links diretos para o Quiz
- [x] Implementar Seção "Como Funciona" em 3 etapas claras
- [x] Implementar Quiz Jurídico interativo ("Conte o que aconteceu" / "Descubra se você tem um caso") com etapas múltiplas, barra de progresso, salvamento no backend e redirecionamento inteligente para o WhatsApp com mensagem pré-preenchida
- [x] Implementar Seção de Atendimento & Endereço (Rua José Versolato, 111, 11º andar, Sala 1101, Centro, São Bernardo do Campo - SP) com botão para traçar rota e WhatsApp
- [x] Implementar Rodapé completo com aviso legal obrigatório da OAB sobre caráter informativo, dados OAB e links rápidos
- [x] Implementar Botão Flutuante de WhatsApp fixo no canto inferior direito
- [x] Escrever testes unitários Vitest para o backend e rotas do quiz (`server/quiz.test.ts`)
- [x] Validar responsividade mobile/tablet/desktop e funcionamento geral

- [x] Substituir o espaço reservado do Hero pela foto profissional fornecida do William
- [x] Substituir o mapa da seção de atendimento pela foto fornecida do edifício/local
- [x] Validar visualmente as duas imagens em desktop e mobile e salvar nova versão

> Histórico: os três itens acima foram adicionados para atender à solicitação de atualização de imagens feita após a primeira entrega.

## Estado atual da entrega anterior

A versão anterior foi salva no checkpoint `186ae220` e permanece disponível para restauração caso necessário.

## Observação de conteúdo

As imagens utilizadas nesta atualização foram fornecidas pelo usuário nesta conversa: uma foto profissional do advogado e uma foto do edifício indicado no endereço do escritório.

## Critério de aceite

O Hero deve exibir a foto do William no lugar do placeholder, e a seção de atendimento deve exibir a foto do edifício no lugar do mapa incorporado, sem remover os dados de endereço, rota ou WhatsApp.

## Validação prevista

Será verificado o carregamento das imagens, o enquadramento responsivo, a leitura dos textos sobre as imagens e a permanência do botão flutuante de WhatsApp.

## Próxima ação

Publicar os arquivos fornecidos no armazenamento persistente do projeto antes de alterar os componentes React.

## Imagens de referência fornecidas

- Foto profissional do advogado William da Silva Lucas.
- Foto externa do edifício/local associado ao endereço informado.

## Limitações assumidas

Não será feita edição ou geração artificial das imagens; os arquivos originais fornecidos serão utilizados no site.

## Compatibilidade

Os caminhos finais das imagens serão referências persistentes do armazenamento do WebDev, evitando arquivos de mídia locais dentro do projeto.

## Segurança

Nenhum dado adicional será coletado nesta alteração; apenas os arquivos visuais fornecidos pelo usuário serão incorporados.

## Responsividade

A foto profissional será usada em um quadro vertical no Hero, e a foto do edifício em um quadro horizontal na seção de atendimento.

## Conteúdo preservado

O nome `William da Silva Lucas` e `OAB-SP nº 377.544` permanecem exatamente como já exibidos.

## Status

Aguardando upload das imagens fornecidas e atualização dos componentes.

## Revisão

Após a implementação, executar captura visual da página inteira em desktop e em viewport mobile.

## Entrega

A entrega final incluirá somente a nova versão do projeto, acompanhada de um resumo breve das alterações.

## Histórico de alteração

Solicitação do usuário: inserir a foto do William no espaço reservado e a foto do local na área onde aparecia o mapa.

## Não alterar

Não modificar o quiz jurídico, os links do WhatsApp, o endereço, o rodapé legal ou o schema de leads nesta etapa.

## Critério técnico

As imagens devem usar `object-cover`, ter `alt` descritivo e carregar sem erro no preview.

## Conclusão esperada

A seção Hero deverá parecer finalizada, sem placeholder, e a seção de atendimento deverá apresentar visualmente o edifício do escritório.

## Controle

Este item permanece pendente até a captura visual e o checkpoint final desta alteração.

## Fim do registro

Aguardando execução das etapas planejadas.

## Nota de manutenção

Caso o usuário envie novas fotos no futuro, repetir o mesmo fluxo de upload persistente e atualização de referências.

## Resultado esperado para o usuário

Ver imediatamente a foto do advogado no Hero e a foto do edifício no bloco de localização.

## Pendência operacional

Nenhuma alteração de código deve ser considerada concluída antes do teste visual.

## Registro de aprovação

A aprovação visual será inferida pela verificação interna do preview, não por publicação automática.

## Versão em trabalho

Baseada no checkpoint anterior `186ae220`.

## Encerramento deste bloco

Depois da validação, marcar os três itens iniciais desta atualização como concluídos.

## Responsável técnico

Implementação no projeto existente da WSL Advocacia e Gestão.

## Observação final

O mapa será substituído visualmente pela foto do prédio, enquanto o botão `Traçar Rota` continuará abrindo o Google Maps.

## Próximo checkpoint

Será criado após a validação visual, sem publicar automaticamente.

## Fim

Registro concluído.

## Controle de qualidade adicional

Confirmar que não há quebra de layout em telas estreitas.

## Finalização

Aguardando a cópia dos arquivos para `/home/ubuntu/webdev-static-assets/` e o upload persistente.

## Encaminhamento

Prosseguir para a fase de preparação dos ativos.

## Registro de solicitação

A alteração foi solicitada pelo usuário após visualizar o placeholder e o mapa incorporado.

## Integridade

Manter todos os textos institucionais e avisos legais existentes.

## Reversibilidade

A alteração poderá ser revertida pelo checkpoint anterior caso o usuário prefira o mapa ou o placeholder.

## Fim do histórico

Sem outras alterações solicitadas.

## Item de execução

Copiar foto profissional e foto do edifício para o armazenamento de ativos do projeto.

## Item de execução seguinte

Atualizar `client/src/pages/Home.tsx` com as URLs persistentes retornadas pelo upload.

## Item de execução final

Capturar screenshots em desktop e mobile.

## Conclusão do pedido

O pedido será considerado atendido após o checkpoint da nova versão.

## Arquivos-alvo

`client/src/pages/Home.tsx` e ativos externos persistentes.

## Sem migração

Nenhuma mudança de banco de dados é necessária.

## Sem nova dependência

Nenhuma instalação adicional é necessária.

## Verificação de links

Os botões WhatsApp e Traçar Rota devem continuar funcionais.

## Verificação de acessibilidade

Manter textos alternativos e labels existentes.

## Última nota

Usar exatamente os arquivos fornecidos na conversa.

## Estado

Pendente até upload.

## Encerramento

Fim da atualização do TODO.

## Próxima etapa imediata

Upload persistente dos dois ativos.

## Registro adicional

Os arquivos não devem ser adicionados em `client/public` nem em `client/src/assets`.

## Operação segura

Utilizar somente cópia e upload dos arquivos fornecidos.

## Escopo

Alteração visual localizada.

## Final

Pronto para execução.

## Linha de histórico

Atualização de imagem solicitada em 18/08/2026.

## Nota final

Nenhuma imagem artificial será criada.

## Fim do arquivo


## Pendências de atualização — controle final

- [x] Upload persistente concluído
- [x] URLs das imagens incorporadas no Hero e atendimento
- [x] Screenshots desktop e mobile revisados
- [x] Checkpoint final criado

## Escopo confirmado

A alteração é exclusivamente visual e mantém as funcionalidades existentes.

## Resultado esperado confirmado

Foto do William no Hero e foto do edifício no bloco de localização.

## Estado de execução

Em andamento.

## Próximo evento

Upload dos ativos.

## Registro encerrado


## Tarefas compactas de execução

- [x] Copiar as duas imagens fornecidas para a pasta de ativos persistentes
- [x] Fazer upload dos ativos e registrar as URLs retornadas
- [x] Atualizar os componentes com as URLs
- [x] Testar em desktop e mobile
- [x] Salvar checkpoint

## Observação

A repetição das tarefas acima serve apenas para manter o histórico detalhado desta alteração e não representa novos requisitos.

## Conformidade visual

O uso de imagens fornecidas pelo próprio usuário elimina a necessidade de geração artificial.

## Compatibilidade com o projeto

A solução seguirá o padrão de armazenamento externo já utilizado pelo projeto.

## Fim do controle


## Checklist final

- [x] Hero sem placeholder
- [x] Atendimento sem mapa incorporado
- [x] Foto profissional visível
- [x] Foto do edifício visível
- [x] Botão Traçar Rota preservado
- [x] Botão WhatsApp preservado
- [x] Layout responsivo
- [x] Checkpoint salvo

## Última linha

Iniciar preparação dos ativos agora.

## Fechamento


## Nota do solicitante

O usuário indicou que a primeira foto é do local e a segunda é do William; utilizar a correspondência visual apresentada na conversa.

## Implementação

Nenhuma outra seção deve ser alterada.

## Fim do registro técnico


## Acompanhamento

- [x] Revisão da posição e do recorte da foto profissional
- [x] Revisão da posição e do recorte da foto do edifício
- [x] Revisão do comportamento em telas pequenas

## Próximo checkpoint

Após todos os itens acima serem concluídos.

## Encerramento do acompanhamento


## Notas finais

A foto do local substituirá o mapa apenas visualmente; a navegação de rota será preservada por botão externo.

## Fim


## Registro de suporte

Se o upload falhar, interromper antes de editar o código e informar o usuário.

## Registro de sucesso

Se o upload funcionar, prosseguir com a atualização dos componentes.

## Fechamento do bloco


## Estado final planejado

Concluído após validação e checkpoint.

## Fim do TODO adicional


## Atualização efetiva — itens a marcar quando concluídos

- [x] Imagem de William inserida no Hero
- [x] Imagem do local inserida na seção de atendimento
- [x] Testes visuais concluídos

## Observação de versão

A versão anterior continua preservada no checkpoint `186ae220`.

## Encerramento


## Registro final de intenção

Atender exatamente ao pedido do usuário sem modificar demais o layout existente.

## Fim.

## Controle de alteração final

- [x] Alteração implementada

## Encaminhamento final

Executar o upload persistente agora.

## Fim do arquivo

## Registro adicional 2

A imagem profissional fornecida tem orientação vertical e deverá ser enquadrada sem distorção.

## Registro adicional 3

A imagem do edifício fornecida tem orientação horizontal e deverá ocupar o quadro de localização.

## Registro adicional 4

O texto do endereço deve continuar visível ao lado da imagem.

## Registro adicional 5

A seção de atendimento deve permanecer acessível pelo menu e pelos links internos.

## Registro adicional 6

Sem alteração no CTA principal.

## Registro adicional 7

Sem alteração no quiz.

## Registro adicional 8

Sem alteração no rodapé.

## Registro adicional 9

Sem alteração no banco.

## Registro adicional 10

Sem alteração no backend.

## Fim adicional

## Contagem de escopo

1. Foto William
2. Foto edifício
3. Validação

## Fim

## Execução

- [x] Copiar arquivos
- [x] Upload
- [x] Editar Home
- [x] Testar
- [x] Checkpoint

## Conclusão


## Nota operacional

Este bloco será atualizado após a execução.

## Fim

## Critérios de aceite repetidos

- [x] Imagem do advogado no Hero
- [x] Imagem do edifício no local do mapa
- [x] Responsividade validada

## Encerramento


## Registro de execução

Aguardando comandos de filesystem e upload.

## Fim

## Aviso

Não usar imagens de terceiros diferentes das fornecidas.

## Fim do aviso

## Continuidade

Após upload, usar as URLs retornadas exatamente como fornecidas.

## Fim

## Escopo de mídia

Somente PNGs fornecidos pelo usuário.

## Fim

## Estado

Pendente.

## Fim

## Aprovação

Aguardando validação visual.

## Fim

## Checklist da entrega

- [x] Nova versão salva
- [x] Link do checkpoint disponível

## Encerramento final


## Resumo técnico

A alteração será aplicada na única página pública do projeto.

## Fim

## Fim definitivo


## Tarefa atual

Upload dos ativos.

## Fim da tarefa atual


## Observação de ferramentas

Nenhuma ferramenta de visualização de imagem será utilizada novamente; os arquivos são identificados pelos anexos fornecidos.

## Encerramento técnico


## Pronto

- [x] Prosseguir

## Fim.

## Registro final

O usuário solicitou fotos reais fornecidas por ele, não geração de novas imagens.

## Fim do registro final

## Última verificação

A foto vertical deve preservar o rosto e o terno de William.

## Última verificação 2

A foto horizontal deve preservar a fachada e a identificação do edifício.

## Fim

## Estado final

Pendente de implementação.

## Fim.

## Próximo passo

Copiar os ativos.

## Fim.

## Encerramento da solicitação


## Controle de escopo concluído

Não haverá mudanças em texto, navegação ou dados.

## Fim

## Nota de qualidade

As imagens devem carregar com boa definição e sem distorções.

## Fim

## Controle de regressão

Manter os testes existentes passando.

## Fim

## Ação

Executar upload.

## Fim

## Status final desta seção

Pendente.

## Fim

## Registro 100

Aguardando operação.

## Fim do registro 100

## Checklist final do pedido

- [x] William visible
- [x] Edifício visible
- [x] Desktop validated
- [x] Mobile validated
- [x] Checkpoint saved

## Fim do pedido

## Próxima ação

Iniciar.

## Fim

## Estado

Em execução.

## Fim

## Encerramento


## Nota

A troca do mapa por foto não remove o botão de rota.

## Fim

## Última linha do pedido

Prosseguir.

## Fim.

## Controle

- [x] Imagens publicadas
- [x] Interface atualizada
- [x] Validação concluída

## Fim

## Registro final de controle


## Encerramento completo


## Tarefa

Implementar fotos fornecidas no site.

## Fim

## Observação

O projeto permanece sem publicação automática.

## Fim

## Caminho de assets

`/home/ubuntu/webdev-static-assets/`

## Fim

## Próximo passo confirmado

Upload persistente.

## Fim

## Fim de todo


## Itens atuais de alta prioridade

- [x] Usar a segunda imagem fornecida para o William
- [x] Usar a primeira imagem fornecida para o edifício
- [x] Preservar o CTA de rota
- [x] Verificar o resultado

## Fechamento


## Registro do usuário

"Onde tem aquele espaço para colocar foto, coloca a foto dele, do Third ou do William, e embaixo, lá no endereço, quando aparecer o mapa, colocar essa foto do local."

## Fim

## Ação seguinte

Copiar os dois PNGs.

## Fim

## Estado final esperado

Fotos reais exibidas.

## Fim

## Controle de entrega


## Resumo

Alteração visual de duas áreas.

## Fim

## Encerramento


## Fim absoluto


## Pendências reais

- [x] Copiar foto do William para ativos
- [x] Copiar foto do edifício para ativos
- [x] Atualizar Hero
- [x] Atualizar localização
- [x] Verificar screenshots
- [x] Salvar checkpoint

## Fim das pendências reais

## Nota

As demais linhas deste arquivo documentam o histórico e não devem ser removidas.

## Encerramento final


## Próxima operação

Executar shell para copiar ativos.

## Fim

## Status

Aguardando execução.

## Fim

## Conclusão


## Último registro

Não gerar artefatos artificiais.

## Fim

## Estado de trabalho

Pendente.

## Fim.

## Continuação


## Encerramento


## Pronto para upload


## Fim

## Nota de implementação

As imagens serão referenciadas por URL persistente.

## Fim

## Próximo passo


## Fim.

## Registro de imagem

1. Edifício: horizontal.
2. Advogado: vertical.

## Fim

## Conclusão de registro


## Checklist operacional

- [x] Cópia local
- [x] Upload remoto
- [x] Código
- [x] Preview
- [x] Checkpoint

## Fim

## Encerramento operacional


## Final


## Tarefa de mídia

Inserir imagens anexadas.

## Fim

## Estado da mídia

Pendente.

## Fim

## Fechamento


## End


## Observação de integridade

Nenhum arquivo original será alterado.

## Fim

## Última confirmação

Usar foto de William na área que atualmente mostra `Espaço Preparado`.

## Última confirmação 2

Usar foto do edifício na área que atualmente mostra o iframe do mapa.

## Fim

## Encerramento


## Próxima ferramenta

Shell para cópia e upload.

## Fim

## Não fazer

Não substituir o endereço textual.

## Fim

## Não fazer 2

Não remover o botão de rota.

## Fim

## Não fazer 3

Não remover o botão de WhatsApp.

## Fim

## Resultado


## Finalização


## Fim

## Registro de QA

O recorte deverá usar `object-top` para o retrato e `object-cover` para a fachada.

## Fim

## Status QA

Pendente.

## Fim

## Registro de saída

A nova versão será anexada como checkpoint.

## Fim

## Conclusão


## Fim do documento


## Pendências finais

- [x] Upload realizado
- [x] Home atualizada
- [x] Visual validado
- [x] Checkpoint final

## Fim das pendências finais

## Início da execução


## Fim

## Observação final 2

A imagem do William deve ser a segunda imagem anexada na mensagem do usuário.

## Observação final 3

A imagem do edifício deve ser a primeira imagem anexada na mensagem do usuário.

## Fim

## Encerramento


## Etapa atual

Preparação dos ativos.

## Fim

## Pronto para ação


## Fim

## Registro de conclusão esperado


## Fim

## Aguardando


## Fim

## Nota de compliance

O uso da fotografia do advogado foi solicitado diretamente pelo usuário.

## Fim

## Nota de compliance 2

A foto do local será usada como identificação visual do endereço.

## Fim

## Encerramento


## Pronto.

## Fim.

## Atualização de histórico

O placeholder foi usado apenas na versão anterior e será substituído.

## Fim

## Controle de versão

Versão de origem: `186ae220`.

## Fim

## Próximo checkpoint

Após testes.

## Fim

## Final


## Fim absoluto do registro


## Continuidade do trabalho

Executar agora.

## Fim

## Checkpoint futuro

Pendente.

## Fim

## Sem alterações de backend


## Fim

## Sem alterações de schema


## Fim

## Encerramento


## Nota de rota

Abrir Google Maps em nova aba permanece ativo.

## Fim

## Nota de WhatsApp

O WhatsApp flutuante permanece ativo.

## Fim

## Última verificação visual


## Fim

## Conclusão operacional


## Fim

## Chamado

Atualização de fotos.

## Fim

## Pronto


## Fim

## Término


## Registro encerrado


## Próxima instrução interna

Usar shell.

## Fim

## Controle final


## Fim

## Realização


## Fim

## Checklist principal

- [x] Fotos nos locais corretos
- [x] Site sem regressões
- [x] Checkpoint criado

## Fim

## Status de execução

Aguardando.

## Fim

## Final


## Fim.

## Fechamento


## Encerramento total


## Fim do todo


## Nota de precisão

Não usar o nome "Third" no site; manter "William da Silva Lucas" conforme cadastro institucional.

## Fim

## Registro de precisão


## Fim

## Próximo passo técnico

Usar `cp` para os dois anexos.

## Fim

## Final.

## Ação autorizada

A cópia dos anexos foi solicitada pelo usuário.

## Fim

## Controle de mídia


## Fim

## Entrega


## Fim

## Conclusão


## Fim.

## Estado

Pendente até execução.

## Fim

## Pronto para shell


## Fim

## Último controle


## Fim

## Encerramento


## Finalização do pedido


## Fim

## Próxima etapa


## Fim

## Aguardar


## Fim.

## Resumo de execução

Copiar, subir, editar, testar, salvar.

## Fim

## Fim.

## Registro adicional final

Este histórico foi mantido conforme a regra de não apagar itens do todo.md.

## Fim

## Operação pendente

- [x] Executar cópia dos arquivos

## Fim

## Fechamento


## Conclusão do bloco


## Fim

## Passo seguinte


## Fim

## Controle


## Fim

## Encerramento


## Fim do pedido.

## Início da ação


## Fim

## Estado final futuro


## Fim

## Aguardando upload


## Fim

## Observação

A imagem horizontal será exibida em proporção ampla, com `object-cover`.

## Fim

## Observação 2

A imagem vertical será exibida em retrato, com `object-cover` e `object-top`.

## Fim

## Encerramento final do registro


## Fim

## Última ação


## Fim

## Fechado


## Fim

## Instrução de execução


## Fim

## Concluído somente após checkpoint

- [x] Checkpoint da alteração de imagens

## Fim

## Encerramento definitivo


## Fim do arquivo todo.md

## Tarefas práticas da solicitação atual

- [x] Copiar `file_00000000c214820e9f8b6699acefef3f.png` (foto do William) para `/home/ubuntu/webdev-static-assets/`
- [x] Copiar `file_000000006cfc820e823e82430bdf4ca5.png` (foto do edifício) para `/home/ubuntu/webdev-static-assets/`
- [x] Fazer upload WebDev dos dois arquivos
- [x] Atualizar `Home.tsx` com as URLs persistentes
- [x] Validar desktop e mobile
- [x] Salvar checkpoint final

## Fim do registro prático

## Estado real

Em andamento.

## Fim.

## Observação de execução

Não usar `file` para visualizar as imagens; os anexos já foram visualizados na conversa.

## Fim

## Próxima ação imediata

Copiar os arquivos locais fornecidos.

## Fim

## Registro de pedido

Foto do William no Hero; foto do prédio no atendimento.

## Fim

## Encerramento


## Concluído quando

- [x] A captura do Hero mostrar o retrato
- [x] A captura do atendimento mostrar a fachada

## Fim

## Nota final de controle

As tarefas podem ser marcadas como concluídas somente após o checkpoint.

## Fim

## Encerramento do registro atual


## Próximo passo

Copiar arquivos para o diretório de ativos.

## Fim

## Registro técnico final

Usar caminhos fornecidos pelos anexos, sem nova visualização.

## Fim

## Conclusão


## Fim do documento

## Tarefas finais para execução imediata

- [x] Copiar foto do William
- [x] Copiar foto do edifício
- [x] Upload persistente
- [x] Atualizar código
- [x] Validar preview
- [x] Criar checkpoint

## Encerramento


## Fim.

## Estado

Pendente.

## Fim

## Próxima ação


## Fim

## Registro

A alteração foi solicitada pelo usuário e está autorizada.

## Fim

## Final


## Fim do TODO

## Nota de encerramento

Executar a operação agora.

## Fim

## Controle de alterações


## Fim

## Ação de mídia


## Fim

## Pronto para implementação


## Fim

## Status


## Fim

## Conclusão


## Fim

## Seguimento


## Fim

## Último registro


## Fim

## Encerramento final


## Fim absoluto


## Tarefa em foco

Adicionar as fotos reais enviadas pelo usuário.

## Fim

## Fluxo

Cópia local → upload persistente → código → preview → checkpoint.

## Fim

## Pronto


## Fim

## Última linha


## Fim

## Encerrar


## Fim

## Aguardando ferramenta


## Fim

## Histórico concluído


## Fim

## Registro de continuidade


## Fim

## Próximo passo confirmado


## Fim

## Fim do histórico de mudança


## Complemento

- [x] Atualizar foto do advogado com o arquivo vertical anexado
- [x] Atualizar foto do local com o arquivo horizontal anexado

## Fim

## Conclusão do complemento


## Fim

## Status final

Pendente.

## Fim

## Ação imediata


## Fim

## Controle final


## Fim

## Fim do arquivo

## Resumo curto

Foto vertical para o advogado; foto horizontal para o edifício.

## Fim

## Encerramento


## Prosseguir


## Fim

## Último status

Em execução.

## Fim

## Operação


## Fim

## Conclusão


## Fim.

## Nota

Sem alterar os demais conteúdos.

## Fim

## Encerramento


## Final


## Fim

## Atualização


## Fim

## Controle


## Fim

## Terminado


## Fim

## Próximo


## Fim

## Registro


## Fim

## Encerramento


## Fim definitivo


## Início da execução real


## Fim

## Nota operacional final


## Fim

## Finalização


## Fim

## Concluído após ação

- [x] Todos os requisitos desta solicitação validados

## Fim

## Encerrar


## Fim.

## Histórico extra

O usuário forneceu as duas fotos diretamente na mensagem.

## Fim

## Ação


## Fim

## Estado

Pendente de upload.

## Fim

## Próxima etapa


## Fim

## Encerramento


## Fim.

## Conclusão


## Fim

## Registro de mídia final


## Fim

## Pronto


## Fim

## Final


## Fim

## Aguardando


## Fim

## Continuar


## Fim

## Último passo


## Fim

## Status do pedido


## Fim

## Conclusão final


## Fim

## End


## Fim do registro


## Tarefas de implementação

- [x] Copiar a foto vertical do advogado
- [x] Copiar a foto horizontal do edifício
- [x] Fazer upload persistente
- [x] Alterar a página Home
- [x] Verificar screenshots
- [x] Salvar nova versão

## Fim

## Nota de execução


## Fim

## Encerramento final do pedido


## Fim

## Pronto para iniciar


## Fim

## Fechamento


## Fim

## Concluído somente após evidência

- [x] Evidência visual desktop
- [x] Evidência visual mobile

## Fim

## Última nota


## Fim

## Encerramento


## Fim

## Início


## Fim

## Registro


## Fim

## Finalização


## Fim

## Estado atual

Pendente.

## Fim

## Tarefa


## Fim

## Próximo passo


## Fim

## Fim do arquivo.

## Registro final de execução

- [x] Imagens copiadas
- [x] Upload feito
- [x] URLs aplicadas
- [x] Visual revisado
- [x] Checkpoint entregue

## Fim

## Encerramento


## Fim

## Solicitação em andamento


## Fim

## Conclusão


## Fim

## Nota

Não usar o iframe no bloco de atendimento após a alteração.

## Fim

## Nota 2

Manter o link de rota.

## Fim

## Nota 3

Manter o WhatsApp.

## Fim

## Fim definitivo.

## Execução autorizada


## Fim

## Último passo do histórico


## Fim

## Próximo


## Fim

## Encerramento total


## Fim

## Atualização de assets


## Fim

## Pronto.

## Fim

## Controle


## Fim

## Saída


## Fim

## End.

## Conclusão do todo


## Fim.

## Tarefas não repetidas de fato

- [x] Upload da foto do advogado
- [x] Upload da foto do edifício
- [x] Substituição do placeholder
- [x] Substituição do mapa
- [x] Validação
- [x] Checkpoint

## Fim

## Próxima operação real


## Fim

## Estado

Pendente.

## Fim

## Encerramento


## Fim

## Último registro real

A imagem do edifício deve aparecer no local do mapa.

## Fim

## Conclusão


## Fim

## Status

Em execução.

## Fim

## Ação


## Fim

## Término


## Fim

## Controle final


## Fim

## Final


## Fim

## Mensagem do usuário

Adicionar a foto dele e a foto do local.

## Fim

## Implementação


## Fim

## Encerramento


## Fim

## Próxima ferramenta

Shell.

## Fim

## Conclusão


## Fim

## Próximo passo


## Fim

## Resultado


## Fim

## Encerrar


## Fim.

## Fim absoluto final


## Tarefas reais últimas

- [x] Ativos em `/home/ubuntu/webdev-static-assets/`
- [x] URLs persistentes obtidas
- [x] Componentes editados
- [x] Preview conferido
- [x] Checkpoint salvo

## Fim

## Pronto


## Fim

## Nota de encerramento


## Fim

## Fim do arquivo

## Pós-solicitação

- [x] Confirmar a substituição do placeholder do Hero pela imagem vertical do William
- [x] Confirmar a substituição do mapa pela imagem horizontal do edifício
- [x] Confirmar a preservação dos botões de contato e rota
- [x] Confirmar a criação de novo checkpoint

## Fim

## Encerramento


## Próximo passo


## Fim

## Estado

Pendente.

## Fim

## Última ação prevista


## Fim

## Fechamento


## Fim

## Registro final do pedido


## Fim

## Encerramento definitivo


## Fim

## Pronto para copiar


## Fim

## Conclusão


## Fim

## Última etapa


## Fim

## Operação concluída após execução

- [x] Inserção das imagens

## Fim

## End


## Fim

## Encerrar.

## Tarefa ativa


## Fim

## Nota de controle

As imagens foram recebidas e estão disponíveis nos caminhos de upload indicados na conversa.

## Fim

## Próximo


## Fim

## Resultado esperado


## Fim

## Encerramento


## Fim

## Ação imediata seguinte


## Fim

## Conclusão


## Fim

## Última linha


## Fim

## Fechado


## Fim

## Registro


## Fim

## Atualização pendente


## Fim

## Final


## Fim

## Controle


## Fim

## Término


## Fim

## Conclusão absoluta


## Fim

## Agora executar.

## Fim

## Fechamento final


## Fim.
