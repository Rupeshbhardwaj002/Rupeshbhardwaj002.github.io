import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, Database, Settings, Activity, Cloud, ArrowRight, ArrowDown, Layers, Zap, ShieldCheck, Server, GitBranch, TrendingUp, LineChart, Cpu } from 'lucide-react';

export default function TcsStockProject() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // ScrollToTop is now handled globally in App.tsx
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.key !== 'default') {
                e.preventDefault();
                navigate(-1);
              }
            }}
            className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
          <a 
            href="https://github.com/Rupeshbhardwaj002/TCS_Stock_Price_Prediction_app_using_LSTM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            View Repository
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 pt-16 pb-16">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide">Deep Learning</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold tracking-wide">Time Series Analysis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            TCS Stock Price Prediction App
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-5xl mb-8">
            A machine learning web application that predicts the future stock prices of Tata Consultancy Services (TCS) using Long Short-Term Memory (LSTM) neural networks. Features an interactive interface to visualize historical data, moving averages, and future price predictions.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Python', 'TensorFlow / Keras', 'Streamlit', 'Pandas', 'NumPy', 'yfinance', 'Plotly'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-[#FAFAFA] border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Architecture & Data Flow Diagram */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Layers className="w-6 h-6 text-indigo-600 mr-3" />
            Architecture & Data Flow
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Data Source</h3>
                <p className="text-xs text-slate-600 mt-1">Yahoo Finance API</p>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Preprocessing</h3>
                <p className="text-xs text-slate-600 mt-1">Scaling & Sequences</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">LSTM Model</h3>
                <p className="text-xs text-slate-600 mt-1">Deep Learning Training</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <LineChart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Streamlit App</h3>
                <p className="text-xs text-slate-600 mt-1">Interactive UI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Zap className="w-5 h-5 text-indigo-600 mr-3" />
              Key Features
            </h2>
            <ul className="space-y-6 text-slate-600">
              <li>
                <strong className="text-slate-900 block mb-1">Historical Data Visualization</strong>
                View interactive charts of TCS stock prices over time.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">Moving Averages Analysis</strong>
                Analyze trends with 100-day and 200-day Moving Averages (MA).
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">LSTM Prediction</strong>
                Get highly accurate stock price predictions using a deep learning LSTM model trained on historical data.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">Interactive UI</strong>
                Built with Streamlit for a seamless and responsive user experience, allowing users to navigate through raw data, moving averages, and predictions.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">Real-time Data Fetching</strong>
                Integrates with <code>yfinance</code> to fetch the latest market data directly from Yahoo Finance API.
              </li>
            </ul>
          </section>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 text-indigo-600 mr-3" />
                Results & Performance
              </h2>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p className="mb-4">
                  The LSTM model has been trained on historical TCS stock data and demonstrates a strong capability to capture the underlying trend of the stock's movement.
                </p>
                <p className="italic text-slate-600 text-xs mt-4">
                  *Note: Stock market predictions are highly volatile and this tool is for educational purposes only.
                </p>
              </div>
            </section>

            <section className="bg-[#FAFAFA] rounded-2xl p-8 shadow-sm border border-slate-800 text-slate-700">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mr-3" />
                Project Structure
              </h2>
              <ul className="space-y-3 font-mono text-sm">
                <li><span className="text-indigo-600">app.py</span> - Main Streamlit app script</li>
                <li><span className="text-indigo-600">TCS_model.h5</span> - Pre-trained LSTM model</li>
                <li><span className="text-indigo-600">TCS_Stock_Prediction.ipynb</span> - EDA & Training</li>
                <li><span className="text-indigo-600">requirements.txt</span> - Dependencies</li>
              </ul>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}
