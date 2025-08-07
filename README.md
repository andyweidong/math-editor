# Math Editor - 数学公式编辑器

一个基于Web的数学公式编辑器，支持LaTeX语法编写数学公式，并能够将公式导出为Word文档，在Word中保持可编辑的原生公式格式。

## ✨ 功能特性

- **实时预览**: 支持LaTeX语法，实时渲染数学公式
- **Word导出**: 使用Pandoc将LaTeX公式转换为Word原生公式对象
- **可编辑公式**: 导出的Word文档中的公式可以在Word中双击编辑
- **现代化界面**: 简洁美观的双栏布局，左侧编辑，右侧预览
- **响应式设计**: 适配不同屏幕尺寸

## 🚀 快速开始

### 环境要求

- Node.js (推荐 v14 或更高版本)
- Pandoc (用于Word文档生成)

### 安装步骤

1. **安装Pandoc**
   ```bash
   # macOS (使用Homebrew)
   brew install pandoc
   
   # Windows (使用Chocolatey)
   choco install pandoc
   
   # Linux
   sudo apt-get install pandoc
   ```

2. **安装项目依赖**
   ```bash
   cd math-editor
   npm install
   ```

3. **启动服务器**
   ```bash
   node server.js
   ```

4. **打开编辑器**
   在浏览器中打开 `index.html` 文件

## 📝 使用方法

### 编写数学公式

在左侧编辑区域使用LaTeX语法编写数学公式：

```latex
# 基础数学公式
$$ E = mc^2 $$

# 复杂公式示例
$$ \lim_{x \to \infty} \frac{1}{x} = 0 $$

# 矩阵
$$ \begin{pmatrix} a & b \\ c & d \end{pmatrix} $$

# 积分
$$ \int_{0}^{\infty} e^{-x} dx = 1 $$
```

### 导出Word文档

1. 在编辑区域编写包含数学公式的Markdown内容
2. 点击右上角的"下载为Word文档"按钮
3. 系统将自动生成包含原生公式的Word文档

## 🔧 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Node.js, Express.js
- **数学公式渲染**: MathJax
- **文档转换**: Pandoc
- **样式**: 原生CSS，响应式设计

## 📁 项目结构

```
math-editor/
├── index.html          # 主页面文件
├── server.js           # Express服务器
├── package.json        # 项目依赖配置
└── README.md          # 项目说明文档
```

## 🎯 支持的LaTeX语法

- 基础数学符号: `+`, `-`, `×`, `÷`, `±`, `∞`
- 希腊字母: `α`, `β`, `γ`, `δ`, `π`, `σ`, `μ`
- 上下标: `x^2`, `x_i`, `x_{i,j}`
- 分数: `\frac{a}{b}`
- 根号: `\sqrt{x}`, `\sqrt[n]{x}`
- 积分: `\int`, `\int_{a}^{b}`
- 求和: `\sum_{i=1}^{n}`
- 矩阵: `\begin{pmatrix} ... \end{pmatrix}`
- 行列式: `\begin{vmatrix} ... \end{vmatrix}`

## 🔍 常见问题

**Q: 导出的Word文档中公式无法编辑？**
A: 请确保已正确安装Pandoc，并且服务器正在运行。

**Q: 公式显示不正确？**
A: 请检查LaTeX语法是否正确，MathJax会实时显示渲染错误。

**Q: 服务器启动失败？**
A: 请检查端口3000是否被占用，或修改server.js中的端口号。

## 📄 许可证

ISC License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**注意**: 使用前请确保已安装Pandoc，这是生成Word文档的必要工具。
