import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, Database, Server, GitBranch, Activity, Box, Repeat, Cloud, ShieldCheck, Monitor, Terminal } from 'lucide-react';
import Mermaid from '../components/Mermaid';

const architectureDiagram = `
graph LR
    subgraph "Version Control & CI/CD"
        Git[Git / GitHub] -->|Push Code| GHA[GitHub Actions]
        DVC[DVC] -->|Push Data| S3_Data[(AWS S3 - Data)]
    end

    subgraph "Model Training & Registry"
        Train[Training Pipeline] -->|Log Metrics/Artifacts| MLflow[MLflow Server]
        MLflow -->|Register Model| Registry[(Model Registry)]
    end

    subgraph "Containerization & Deployment"
        GHA -->|Build & Push| ECR[AWS ECR]
        ECR -->|Pull Image| EKS[AWS EKS Cluster]
        CF[CloudFormation] -->|Provision| EKS
    end

    subgraph "Kubernetes (EKS) & Observability"
        EKS --> Pods[Model API Pods]
        Pods --> Prom[Prometheus]
        Prom --> Grafana[Grafana Dashboards]
    end

    Git --> Train
`;

export default function MLOpsProject() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-50 selection:text-indigo-900 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
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
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <a href="https://github.com/Rupeshbhardwaj002/Mlops-Capstone-Project-II" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors">
            <Github className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">View Repository</span>
          </a>
        </div>
      </nav>

      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-blue-700 font-mono text-sm mb-6">
            <Activity className="w-4 h-4" />
            Capstone Project
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            End-to-End MLOps Pipeline
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            A comprehensive, industry-standard Machine Learning Operations (MLOps) project demonstrating a fully automated pipeline. This project covers everything from data versioning and model training to cloud deployment, distributed orchestration, and real-time observability.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'AWS', 'Kubernetes', 'Docker', 'MLflow', 'DVC', 'GitHub Actions', 'Prometheus', 'Grafana'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Interactive Architecture Diagram */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">System Architecture</h2>
          
          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-200 w-full overflow-x-auto">
            <div className="min-w-[600px] flex justify-center">
              <Mermaid chart={architectureDiagram} />
            </div>
          </div>
        </section>

        {/* Pipeline Components */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Pipeline Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Data Versioning (DVC + AWS S3)</h3>
              <p className="text-slate-600 leading-relaxed">
                Instead of storing large datasets in GitHub, <strong>DVC</strong> is used to version data. The actual data files are pushed to an <strong>AWS S3 bucket</strong>, while lightweight <code>.dvc</code> pointer files are committed to Git. This ensures exact reproducibility of experiments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Experiment Tracking (MLflow)</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>MLflow</strong> is integrated into the training script. It automatically logs hyperparameters, metrics (RMSE, Accuracy), and artifacts (serialized models). The best performing model is transitioned to the Production stage in the MLflow Model Registry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. CI/CD Pipeline (GitHub Actions)</h3>
              <p className="text-slate-600 leading-relaxed">
                On every push to the main branch, GitHub Actions triggers a workflow that lints the code, runs unit tests via pytest, builds a Docker image, authenticates with AWS IAM, and pushes the image to <strong>Amazon ECR</strong>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Infrastructure & Orchestration</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>AWS CloudFormation</strong> provisions the underlying infrastructure (VPCs, Subnets, EC2 nodes). The Dockerized application is deployed to <strong>Amazon EKS</strong>, ensuring high availability, load balancing, and automatic restarts of failed pods.
              </p>
            </div>

          </div>
        </section>

        {/* API & Monitoring */}
        <section className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Terminal className="w-6 h-6 mr-3 text-indigo-600" />
                API Usage
              </h3>
              <p className="text-slate-700 mb-6">
                Once deployed, you can send predictions to the model via REST API.
              </p>
              <div className="bg-white rounded-xl p-4 font-mono text-sm overflow-x-auto border border-slate-200">
                <div className="text-slate-600 mb-2"># Example Request</div>
                <div className="text-emerald-400">curl -X POST http://&lt;K8S-IP&gt;/predict \</div>
                <div className="text-emerald-400">     -H "Content-Type: application/json" \</div>
                <div className="text-emerald-400">     -d '&#123;"features": [5.1, 3.5, 1.4, 0.2]&#125;'</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Monitor className="w-6 h-6 mr-3 text-indigo-600" />
                Monitoring & Observability
              </h3>
              <p className="text-slate-700 mb-6">
                To ensure the model performs well in production, we use <strong>Prometheus</strong> and <strong>Grafana</strong>.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 shrink-0"></div>
                  <span><strong>Prometheus:</strong> Scrapes metrics from the /metrics endpoint. Tracks system metrics (CPU, Memory), application metrics (latency, errors), and model metrics (data drift).</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 shrink-0"></div>
                  <span><strong>Grafana:</strong> Connects to Prometheus to visualize these metrics on real-time dashboards.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
