import express from 'express';
import cors from 'cors'; 

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

// endpoint HTTP GET recebendo o CEP como parametro de rota
app.get('/api/cep/:cep', async (req, res) => {
    let { cep } = req.params;

    // tira qualquer caracter que não for numero
    cep = cep.replace(/\D/g, '');

    if (cep.length !== 8) {
        return res.status(400).json({ 
            erro: 'Formato inválido. O CEP deve conter exatamente 8 dígitos numéricos.' 
        });
    }

    try {
        // API pública do ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        // tratamento de erro: ViaCEP retorna { "erro": true } para CEPs que não existe
        if (data.erro) {
            return res.status(404).json({ 
                erro: 'CEP não encontrado na base de dados.' 
            });
        }

        return res.status(200).json({
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade, 
            estado: data.uf
        });

    } catch (error) {
        // tratamento de erro: Falha na comunicação com a API externa
        console.error('Erro ao buscar o CEP:', error);
        return res.status(500).json({ 
            erro: 'Erro interno no servidor ao tentar consultar o CEP.' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});