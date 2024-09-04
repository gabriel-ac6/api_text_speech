import express from 'express';
import gTTS from 'gtts';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurações para usar __dirname com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configuração do multer para lidar com form-data
const upload = multer();

// Middleware para interpretar o corpo da requisição como JSON
app.use(express.json());

// Endpoint para converter texto em áudio e retornar como arquivo
app.post('/text-to-speech', upload.none(), (req, res) => {
    const text = req.body.text;

    if (!text) {
        return res.status(400).json({ error: 'Texto é necessário' });
    }

    // Definindo a língua como português
    const language = 'pt';
    const gtts = new gTTS(text, language);

    // Nome do arquivo de saída temporário
    const outputFile = path.join(__dirname, 'audio.mp3');

    // Salvar o áudio no arquivo temporário
    gtts.save(outputFile, (err) => {
        if (err) {
            console.error('Erro ao salvar o arquivo de áudio:', err);
            return res.status(500).json({ error: 'Erro ao salvar o arquivo de áudio' });
        }

        // Enviar o arquivo de áudio como download
        res.download(outputFile, 'audio.mp3', (err) => {
            if (err) {
                console.error('Erro ao enviar o arquivo:', err);
                res.status(500).json({ error: 'Erro ao enviar o arquivo' });
            }

            // Remover o arquivo temporário após o envio
            fs.unlink(outputFile, (unlinkErr) => {
                if (unlinkErr) {
                    console.error('Erro ao remover o arquivo temporário:', unlinkErr);
                }
            });
        });
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
