# TENG Machine Learning Platform

**Predict Triboelectric Nanogenerator Performance Without Experiments**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://yourusername.github.io/teng-ml-platform/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Overview

This platform enables researchers to predict TENG (Triboelectric Nanogenerator) performance using machine learning trained on comprehensive material and device descriptors. By adjusting material properties and device parameters, you can explore the design space and optimize TENG performance before synthesis.

### Key Features

- ⚡ **Performance Predictor**: Real-time TENG performance prediction
- 📊 **Material Database**: 14 materials with complete characterization
- 🔬 **CAMX Research**: Integration with waste-derived CA-MXene composites
- 🤖 **ML Models**: Trained on 81 descriptors (60 RDKit + 21 material/device properties)

## 🚀 Live Demo

Visit the live platform: **[https://yourusername.github.io/teng-ml-platform/](https://yourusername.github.io/teng-ml-platform/)**

## 📊 Current Database

- **Materials**: 14 (expandable to 100+)
- **Descriptors**: 81 (expandable to 200+)
- **Polymer types**: CA, PTFE, PVDF, PI, PC, PP, PVC, PDMS
- **Nanofillers**: MXene, Ag, Al, F
- **Performance range**: 0.18-2.0 W/m²

## 🤖 ML Model Performance

| Model | Current R² | Status |
|-------|------------|--------|
| Isc | 0.90 | ✅ Excellent |
| Power | 0.64 | Good |
| Voc | 0.07 | Improving |
| Energy | 0.40 | Improving |

**Note**: Predictions will improve significantly when database expands to 50+ materials (target R² > 0.90)

## 🔬 CAMX Research Integration

This platform integrates research on waste-derived CA-MXene composites:

- **Novel Approach**: Covalently-bonded CA-MXene composites
- **Waste Valorization**: CA extracted from cigarette filters
- **Performance**: Up to 1.6 W/m² (240 V, 14 μA)
- **4.6× improvement** vs pristine CA

## 📦 Repository Structure

```
teng-ml-platform/
├── index.html          # Main HTML page
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/teng-ml-platform.git
cd teng-ml-platform
```

2. Open in browser:
```bash
# Using Python
python3 -m http.server 8080

# Or simply open index.html in your browser
```

3. Navigate to `http://localhost:8080`

## 🌐 GitHub Pages Deployment

### Option 1: Automatic Deployment

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select `main` branch
3. Click **Save**
4. Your site will be published at `https://yourusername.github.io/teng-ml-platform/`

### Option 2: Manual Deployment

```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## 📚 How to Use

### 1. Performance Predictor

- Adjust material properties (polymer type, nanofiller, loading, thickness, etc.)
- Set device parameters (frequency, force, contact area)
- Click **"Predict Performance"** to see results
- Use **"Load CAMX Data"** to load preset values from our research

### 2. Material Database

- Browse 14 TENG materials with complete characterization
- Click on any material to view details
- Compare performance across different materials

### 3. CAMX Research

- Learn about waste-derived CA-MXene composites
- View performance data and key advantages
- Understand the synthesis approach

### 4. About

- Platform purpose and methodology
- ML model details
- Research team information
- Future development plans

## 🎓 Research Team

**Burhan Beycan**  
PhD Candidate  
Materials Engineering, METU

**Prof. Husnu Emrah Unalan**  
Supervisor  
Metallurgical and Materials Engineering, METU

## 📖 Key References

1. Xu et al., Nano Energy 2025 (GNN-based TENG optimization)
2. Doganay & Ünalan, Nano Energy 2025 (TENG review)
3. Doganay et al., Nano Energy 2021 (Fabric TENG, 1.25 W/m²)
4. Beycan & Ünalan, 2025 (CAMX composites, in preparation)

## 🚀 Future Development

- [ ] Expand database to 50-100 materials
- [ ] Add 120+ descriptors (reach 200+ total)
- [ ] Achieve R² > 0.95 for all targets
- [ ] Integrate experimental validation
- [ ] Add feature importance adjuster
- [ ] Implement optimization tool
- [ ] Deploy as community tool

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Burhan Beycan**  
METU Materials Engineering  
Email: [your.email@metu.edu.tr](mailto:your.email@metu.edu.tr)

**Prof. Emrah Ünalan**  
Email: [unalan@metu.edu.tr](mailto:unalan@metu.edu.tr)

## 🙏 Acknowledgments

- Middle East Technical University (METU)
- Department of Metallurgical and Materials Engineering
- All researchers who contributed data to the database

## 📊 Citation

If you use this platform in your research, please cite:

```bibtex
@misc{beycan2025tengml,
  title={TENG Machine Learning Platform: Predicting Triboelectric Nanogenerator Performance},
  author={Beycan, Burhan and Unalan, Husnu Emrah},
  year={2025},
  publisher={GitHub},
  url={https://github.com/yourusername/teng-ml-platform}
}
```

---

**For research and educational purposes | Manuscript in preparation for Nano Energy**

© 2025 TENG ML Platform | METU Materials Engineering | Burhan Beycan & Prof. Emrah Ünalan
