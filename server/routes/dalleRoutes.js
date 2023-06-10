import express from 'express';
import * as dotent from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotent.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


router.route('/').get((req, res) => {
    res.send('hello from dalle route!')
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt: `create a realistic and professional photo of plate of prepared food. The photo should have the surface of a table in the back ground. The food is cooked using a recipe with the following ingredients: ${prompt}. The photo should be of kind that is used in recipe magazines or recipe blogs.`,
            n: 1,
            size: "512x512",
            response_format: "b64_json"
        })

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ image });
    } catch (e) {
        console.log("ERROR CREATING IMAGE: ", e)
        res.status(500).send(error?.response.data.error.message);

    }
})

export default router;