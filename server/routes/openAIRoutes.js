import express from 'express';
import * as dotent from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotent.config();

const router = express.Router();