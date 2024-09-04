import express from 'express';
import gTTS from 'gtts';
import multer from 'multer';

// Configurações do Express
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

    // Usar um buffer para capturar o áudio sem salvar em arquivo
    gtts.stream().pipe(res);

    // Definir o tipo de conteúdo para áudio MP3
    res.set({
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'attachment; filename="audio.mp3"'
    });

    // Tratar erros de streaming
    gtts.stream().on('error', (err) => {
        console.error('Erro ao gerar o áudio:', err);
        res.status(500).json({ error: 'Erro ao gerar o áudio' });
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
