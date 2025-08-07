// server.js - 已修复 Pandoc 公式解析问题
const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// 中间件
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 定义API端点
app.post('/download-word-pandoc', (req, res) => {
    const { sourceText } = req.body;

    if (!sourceText) {
        return res.status(400).send('请求体中缺少sourceText');
    }

    // 【关键修改】
    // 在输入格式 'markdown' 后添加扩展，以支持多种数学公式分隔符
    // +tex_math_single_backslash: 支持 \(...\) 和 \[...\]
    // +tex_math_dollars: 支持 $...$ 和 $$...$$
    const pandoc = spawn('pandoc', [
        '-f',
        'markdown+tex_math_single_backslash+tex_math_dollars',
        '-t',
        'docx',
        '-o',
        '-'
    ]);
    
    const filename = '原生公式文档.docx';
    
    // 设置响应头
    res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
    res.setHeader(
        'Content-Disposition',
        `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`
    );

    // 将Pandoc的输出流直接管道到响应流
    pandoc.stdout.pipe(res);

    pandoc.stderr.on('data', (data) => {
        console.error(`Pandoc Stderr: ${data}`);
    });

    pandoc.on('error', (err) => {
        console.error('无法启动Pandoc进程。请确保Pandoc已安装并位于系统的PATH中。', err);
        if (!res.headersSent) {
            res.status(500).send('服务器错误：无法执行Pandoc。请检查服务器配置。');
        }
    });

    pandoc.on('close', (code) => {
        if (code !== 0) {
            console.log(`Pandoc进程已退出，代码 ${code}`);
        }
    });

    pandoc.stdin.write(sourceText);
    pandoc.stdin.end();
});

app.listen(port, () => {
    console.log(`服务器(Pandoc版)正在 http://localhost:${port} 上运行`);
    console.log('请确保您已在系统上正确安装了 Pandoc！');
    console.log('现在，请用浏览器打开您本地的 index.html 文件。');
});
