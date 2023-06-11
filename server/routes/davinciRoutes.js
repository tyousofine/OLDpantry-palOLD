import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


router.route('/').get((req, res) => {
    res.send('hello from davinci route!')
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        console.log('PROMPT FROM SERVER SIDE:', prompt)

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a numbered step by step recipe based on these ingredients:${prompt}. The content should be formatted in HTML.
            in addition to using HTML, your response should be limited to using the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, li, ol, ul, i`,
            temperature: 0.3,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        const recipe = response.data.choices[0].text
        console.log(recipe)
        res.status(200).json({ recipe });

    } catch (e) {
        console.log("ERROR GENERATING RECIPE: ", e);
        res.status(500).send(e);

    }
})

export default router;