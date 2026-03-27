import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, Database, Settings, Activity, Cloud, ArrowRight, ArrowDown, Layers, Zap, ShieldCheck, Server, GitBranch } from 'lucide-react';

export default function VehicleInsuranceProject() {
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
            href="https://github.com/Rupeshbhardwaj002/Vehicle-insurance-" 
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
            <span className="px-3 py-1 bg-indigo-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide">Machine Learning</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold tracking-wide">MLOps Pipeline</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Vehicle Insurance Prediction System
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-5xl mb-8">
            An enterprise-grade, end-to-end Machine Learning solution to predict whether a customer is likely to purchase vehicle insurance. Built with a focus on scalability and automation, demonstrating a complete MLOps lifecycle from data ingestion to cloud deployment.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Python 3.8+', 'FastAPI', 'Docker', 'AWS (ECR/S3)', 'GitHub Actions', 'XGBoost', 'MongoDB'].map((tech) => (
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
            System Architecture & Data Flow
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Data Pipeline</h3>
                <p className="text-xs text-slate-600 mt-1">MongoDB Ingestion & Validation</p>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Transformation</h3>
                <p className="text-xs text-slate-600 mt-1">SMOTE & Feature Eng.</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Model Training</h3>
                <p className="text-xs text-slate-600 mt-1">XGBoost Optimization</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Cloud className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Model Pusher</h3>
                <p className="text-xs text-slate-600 mt-1">AWS S3 Artifacts</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Serving</h3>
                <p className="text-xs text-slate-600 mt-1">FastAPI Prediction API</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Zap className="w-5 h-5 text-indigo-600 mr-3" />
              Pipeline Components
            </h2>
            <ul className="space-y-6 text-slate-600">
              <li>
                <strong className="text-slate-900 block mb-1">1. Data Ingestion</strong>
                Extracts raw data from MongoDB, splits it into train/test sets, and stores it in the feature store using PyMongo and Pandas.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">2. Data Validation</strong>
                Enforces data schema, detects anomalies, and handles missing values using Scipy and custom validation scripts.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">3. Data Transformation</strong>
                Performs feature engineering, handles class imbalance using SMOTE, and applies scaling and encoding via Scikit-Learn and Imbalanced-Learn.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">4. Training & Evaluation</strong>
                Conducts hyperparameter tuning and model training using XGBoost. Compares the new model against the currently deployed one, deploying only if performance improves.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">5. Model Pusher</strong>
                Uploads the validated model artifacts (<code>model.pkl</code>, <code>preprocessor.pkl</code>) to AWS S3 cloud storage using Boto3.
              </li>
            </ul>
          </section>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <GitBranch className="w-5 h-5 text-indigo-600 mr-3" />
                CI/CD Workflow
              </h2>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p className="mb-4">Continuous Integration and Continuous Deployment (CI/CD) are fully automated using <strong>GitHub Actions</strong>, ensuring that every code change is tested, containerized, and deployed seamlessly to AWS.</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li><strong>Push to Main:</strong> Developer pushes code to the main branch.</li>
                  <li><strong>Continuous Integration:</strong> GitHub Actions triggers unit tests and linting.</li>
                  <li><strong>Containerization:</strong> Builds and pushes the Docker image to AWS ECR.</li>
                  <li><strong>Artifact Sync:</strong> Syncs model artifacts to AWS S3.</li>
                  <li><strong>Continuous Deployment:</strong> Production server pulls the latest Docker image from ECR and downloads the latest model from S3.</li>
                </ul>
              </div>
            </section>

            <section className="bg-[#FAFAFA] rounded-2xl p-8 shadow-sm border border-slate-800 text-slate-700">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mr-3" />
                Business Impact
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Insurance companies invest heavily in customer acquisition. This project allows businesses to predict whether a customer is likely to purchase vehicle insurance.
              </p>
              <p className="text-sm leading-relaxed">
                By identifying high-probability prospects, businesses can optimize marketing spend, personalize outreach, and significantly improve conversion rates.
              </p>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}
