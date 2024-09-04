
# Projeto Node.js de Text-to-Speech

Este é um projeto Node.js simples que permite converter texto em fala (Text-to-Speech) usando a biblioteca "say". Você pode inserir o texto diretamente no terminal ou ler um arquivo de texto para realizar a conversão de texto em áudio.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação

1. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/faeltwister/text-to-speech
```

2. Navegue até o diretório do projeto:

```bash
cd text-to-speech
```

3. Instale as dependências do projeto usando o npm:

```bash
npm install
```

## Uso

Para usar este projeto, siga as instruções abaixo:

1. Execute o aplicativo:

```bash
npm start
```

2. Você será apresentado com uma escolha para inserir o texto pelo terminal ou por arquivo.

- Se você escolher inserir o texto pelo terminal, insira o texto quando solicitado.
- Se você escolher inserir o texto por arquivo, insira o caminho do arquivo quando solicitado.

3. O texto será convertido em áudio e salvo em um arquivo de áudio no diretório "audios". O texto original também será salvo em um arquivo no diretório "texts".

4. O arquivo de áudio gerado será no formato WAV e estará disponível no diretório "audios".

## Configuração de Voz

Você pode configurar a voz usada para a conversão de texto em fala editando a variável `voices` no arquivo `index.js`. Atualmente, a voz está configurada como "Microsoft Zira Desktop", mas você pode alterá-la para outras vozes suportadas.

## Estrutura do Projeto

- `index.js`: O código principal do projeto.
- `texts/`: Diretório para armazenar os arquivos de texto inseridos.
- `audios/`: Diretório para armazenar os arquivos de áudio gerados.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Autor

[Rafael](https://github.com/faeltwister)

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

---

Divirta-se usando este projeto Node.js de Text-to-Speech!
