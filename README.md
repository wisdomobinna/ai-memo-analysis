# AI Memorandum Analysis Tool & Exhibition Platform

## Overview
A comprehensive platform for analyzing and visualizing the implementation of the 2024 US National Security Memorandum on AI. This project combines a juried art exhibition platform with analytical tools to explore perceptions of AI-generated art and inform policy recommendations.

## 🎯 Key Features

- **MARCO AI System**
  - Tracks prompt development and image generation processes
  - Monitors creative workflow across multiple AI platforms
  - Generates comprehensive documentation for copyright claims

- **Exhibition Platform**
  - Virtual and physical exhibition capabilities
  - Evaluation system for both general users and expert panels
  - Interactive multimedia feature stories

- **Analysis Dashboard**
  - Real-time visualization of implementation progress
  - Department-specific tracking
  - Timeline management
  - Dependency mapping

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- MongoDB
- Redis

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-memo-analysis.git
cd ai-memo-analysis
```

2. Install backend dependencies
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

## 🔧 Configuration

Key configuration options in `.env`:

```env
DALLE_API_KEY=your_dalle_api_key
MIDJOURNEY_API_KEY=your_midjourney_api_key
MONGODB_URI=your_mongodb_uri
REDIS_URL=your_redis_url
```

## 📊 Project Structure

```
ai-memo-analysis/
├── backend/
│   ├── api/
│   ├── models/
│   └── services/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   └── public/
└── docs/
```

## 🎨 Exhibition Setup

### For Creators
1. Register and select "Creator" role
2. Access MARCO through the platform
3. Begin creating with integrated AI tools
4. Document your creative process
5. Submit final works with process documentation

### For Evaluators
1. Register and select "Evaluator" role
2. Review assigned submissions
3. Complete evaluation forms
4. Provide detailed feedback

## 📈 Analysis Tools

### Timeline Visualization
- Track implementation progress
- Monitor department-specific tasks
- View dependency relationships

### Network Analysis
- Department interconnections
- Resource allocation
- Implementation dependencies

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Documentation

Detailed documentation is available in the [docs](./docs) directory.

- [API Documentation](./docs/api.md)
- [Frontend Guide](./docs/frontend.md)
- [Backend Setup](./docs/backend.md)
- [Exhibition Guide](./docs/exhibition.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- US Copyright Office for public consultation data
- Participating universities and research institutions
- Contributing artists and evaluators
- Open source community and contributors

## 📞 Contact

Project Lead - [Wisdom Obinna](mailto:wisdom.k.obinna@gmail.com)

Project Link: [https://github.com/wisdomobinna/ai-memo-analysis](https://github.com/wisdomobinna/ai-memo-analysis)
