import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, Database, Search, Cpu, MessageSquare, ArrowRight, ArrowDown, Layers, Zap, Target, BarChart3, CheckCircle2, Circle } from 'lucide-react';

export default function HybridRAGProject() {
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
            href="https://github.com/Rupeshbhardwaj002/Hybrid-RAG-Qwen-FAISS-XGBoost" 
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
            <span className="px-3 py-1 bg-indigo-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide">Generative AI</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold tracking-wide">Hybrid RAG</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Hybrid RAG Pipeline with Qwen, FAISS & XGBoost
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-5xl mb-8">
            An advanced, production-ready Hybrid Retrieval-Augmented Generation (RAG) pipeline. This architecture bridges the gap between semantic understanding and exact keyword matching by leveraging Qwen LLM for generation, FAISS for high-speed dense vector search, BM25 for sparse retrieval, and XGBoost for intelligent Learning-to-Rank (LTR) re-ranking.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Python 3.8+', 'Qwen LLM', 'FAISS', 'BM25', 'XGBoost', 'Learning-to-Rank', 'Vector Search'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-[#FAFAFA] border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Architecture & Flow Diagram */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Layers className="w-6 h-6 text-indigo-600 mr-3" />
            System Architecture
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Dual Retrieval</h3>
                <p className="text-xs text-slate-600 mt-1">FAISS (Dense) + BM25 (Sparse)</p>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Merge Candidates</h3>
                <p className="text-xs text-slate-600 mt-1">Deduplicate Top-K</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">LTR Re-ranking</h3>
                <p className="text-xs text-slate-600 mt-1">XGBoost Model</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Generation</h3>
                <p className="text-xs text-slate-600 mt-1">Qwen LLM</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Final Output</h3>
                <p className="text-xs text-slate-600 mt-1">Accurate Response</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Zap className="w-5 h-5 text-indigo-600 mr-3" />
              Core Components
            </h2>
            <ul className="space-y-6 text-slate-600">
              <li>
                <strong className="text-slate-900 block mb-1">1. Dense Retrieval (FAISS)</strong>
                Utilizes <code>IndexHNSWFlat</code> for sub-millisecond approximate nearest neighbor (ANN) search. Embeddings generated via HuggingFace BGE-m3 or SentenceTransformers.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">2. Sparse Retrieval (BM25)</strong>
                Standard BM25 implementation for robust exact-match capabilities. Highly effective for domain-specific terminology and out-of-vocabulary (OOV) terms.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">3. Learning-to-Rank (XGBoost)</strong>
                Acts as a cross-encoder alternative that is significantly faster and less compute-intensive. Features used: Dense score, Sparse score, Query length, Document length, Keyword overlap percentage.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">4. Generation (Qwen)</strong>
                Integrated with Qwen-1.5 (7B/14B) for state-of-the-art instruction following and context synthesis.
              </li>
            </ul>
          </section>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 text-indigo-600 mr-3" />
                Performance Benchmarks
              </h2>
              <div className="prose prose-slate prose-sm mb-4">
                <p className="text-slate-600 italic text-xs">Evaluated on the MS MARCO dataset (subset).</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-slate-700 uppercase bg-[#FAFAFA]">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-lg">Metric</th>
                      <th className="px-4 py-3">FAISS Only</th>
                      <th className="px-4 py-3">BM25 Only</th>
                      <th className="px-4 py-3 bg-slate-50 text-blue-700 rounded-tr-lg">Hybrid + XGBoost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-900">Recall@10</td>
                      <td className="px-4 py-3">0.82</td>
                      <td className="px-4 py-3">0.75</td>
                      <td className="px-4 py-3 bg-slate-50 font-bold text-blue-700">0.94</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-4 py-3 font-medium text-slate-900">NDCG@10</td>
                      <td className="px-4 py-3">0.68</td>
                      <td className="px-4 py-3">0.61</td>
                      <td className="px-4 py-3 bg-slate-50 font-bold text-blue-700">0.85</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900 rounded-bl-lg">Latency</td>
                      <td className="px-4 py-3">~15ms</td>
                      <td className="px-4 py-3">~10ms</td>
                      <td className="px-4 py-3 bg-slate-50 font-bold text-blue-700 rounded-br-lg">~45ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-[#FAFAFA] rounded-2xl p-8 shadow-sm border border-slate-800 text-slate-700">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Target className="w-5 h-5 text-indigo-600 mr-3" />
                Project Roadmap
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Implement FAISS Dense Retrieval</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Implement BM25 Sparse Retrieval</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Integrate XGBoost LTR Re-ranking</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Integrate Qwen LLM</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <Circle className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Add support for vLLM for faster Qwen inference</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <Circle className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Create a FastAPI backend and React frontend UI</span>
                </li>
                <li className="flex items-center text-slate-600">
                  <Circle className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Add support for Multi-modal RAG (Images + Text)</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}
