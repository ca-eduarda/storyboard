# Ensaio Storyboard

Ferramenta para fotógrafos montarem um **storyboard de ensaio** com moodboard, dados do trabalho e exportação em **PDF** para enviar ao cliente.

## O que o produto faz

- Reúne em um único documento: **nome do ensaio**, **ideia/descrição**, **paleta** (cores escolhidas pelo fotógrafo, em quadrados estilo swatch), **quem fotografa**, **data**, **local** e um **moodboard com 9 fotos** em grade 3×3.
- O cliente recebe uma **prévia clara** da direção criativa antes do dia do ensaio.

## Decisões que tomamos para o projeto

### Escopo e simplicidade

- **Uma página no PDF**: título (nome do ensaio) no topo, em seguida os campos preenchidos, por último o moodboard. Layout direto, fácil de ler no celular.
- **Sem copiar a interface do Instagram**: a grade 3×3 só evoca a ideia de “bloco de referências”; o visual do app e do PDF são **nossos** (editorial / vitrine).

### Conteúdo

- **9 fotos** no moodboard, ordem configurável (reordenar na tela é desejável na implementação).
- **Cores**: o usuário **escolhe manualmente** as cores que representam o ensaio (não extração automática a partir das imagens). Ex.: 3 a 5 quadrados de cor, com seletor e opcionalmente valor hex.
- **Rodapé do PDF**: campo de texto curto **editável** para avisos sobre referências / direção criativa (cada fotógrafo escreve o que preferir).

### Arquivo e performance

- **Export em qualidade web**: imagens comprimidas/redimensionadas para o PDF ficarem **leves** o suficiente para WhatsApp e e-mail, mantendo leitura nítida na tela.

### Arquitetura (MVP)

- **Front-end apenas**: formulário, preview e geração de PDF podem rodar **no navegador**; as fotos não precisam ir a um servidor se não houver login, salvamento na nuvem ou link compartilhável.
- **Back-end** entra depois, se precisarmos de contas, projetos salvos, links ou processamento que não dependa só do dispositivo do usuário.

### Cuidados de UX (regras de produto)

1. **Descrição longa**: na prévia, **altura máxima** com tratamento claro (por exemplo reticências ou área com scroll) para o layout não “quebrar”. No PDF, **área reservada** para o texto ou aviso se passar do limite — o moodboard não deve ser empurrado para fora da página sem o usuário perceber.
2. **Moodboard uniforme**: todas as células em **proporção 1:1** (crop centralizado / *object-fit: cover*), para a grade ficar consistente independentemente da foto ser horizontal ou vertical.

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como bundler e dev server

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Próximos passos de implementação

- Formulário completo e grade 3×3 com upload e reordenação.
- Geração do PDF de uma página (biblioteca a definir: ex. `pdf-lib`, `jspdf`, ou render + print).
- Validações: tipos de arquivo, tamanho máximo, exatamente 9 imagens antes de exportar (ou placeholders nos vazios, se permitirem export incompleto).

---

Documento alinhado às conversas de definição do produto; ajuste este README conforme o escopo evoluir.
