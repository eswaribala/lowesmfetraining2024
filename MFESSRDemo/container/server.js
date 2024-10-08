import express from 'express';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from './src/App';

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
    const statsFile = path.resolve(__dirname, 'dist/loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile });

    const { pipe } = renderToPipeableStream(extractor.collectChunks(<App />), {
        onShellReady() {
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            pipe(res);
        },
    });
});

app.listen(3004, () => console.log('SSR server running on http://localhost:3004'));


