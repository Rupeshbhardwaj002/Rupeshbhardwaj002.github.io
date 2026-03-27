import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Github, Video, Cpu, Users, Activity, AlertTriangle, TrendingUp, Crosshair, ArrowDownUp, MonitorPlay, ArrowRight, ArrowDown } from 'lucide-react';

export default function FootfallCounter() {
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
            href="https://github.com/Rupeshbhardwaj002/footfall_couter_project" 
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
            <span className="px-3 py-1 bg-indigo-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide">Computer Vision</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold tracking-wide">Object Tracking</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Footfall Counter using Computer Vision
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-5xl mb-8">
            A robust and efficient Computer Vision project designed to count the number of people entering and exiting a specific area. Leverages object detection and tracking algorithms to monitor human movement across a defined virtual line.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {['Python 3.8+', 'OpenCV 4.x', 'Jupyter Notebook', 'YOLO / Haar Cascades', 'SORT / DeepSORT'].map((tech) => (
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
            <Activity className="w-6 h-6 text-indigo-600 mr-3" />
            Architecture & Logical Flow
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Video Source</h3>
                <p className="text-xs text-slate-600 mt-1">Live feed or pre-recorded</p>
              </div>
              
              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Object Detection</h3>
                <p className="text-xs text-slate-600 mt-1">YOLO / Haar Cascades</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Object Tracking</h3>
                <p className="text-xs text-slate-600 mt-1">Assign Unique IDs</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <ArrowDownUp className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Line Crossing</h3>
                <p className="text-xs text-slate-600 mt-1">Centroid calculation</p>
              </div>

              <ArrowRight className="hidden md:block w-6 h-6 text-slate-700 flex-shrink-0" />
              <ArrowDown className="block md:hidden w-6 h-6 text-slate-700 flex-shrink-0" />

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center w-full md:w-1/5">
                <div className="w-16 h-16 bg-slate-50 text-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100">
                  <MonitorPlay className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Update Display</h3>
                <p className="text-xs text-slate-600 mt-1">Increment IN/OUT</p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach & Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Crosshair className="w-5 h-5 text-indigo-600 mr-3" />
              Project Approach
            </h2>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-50 text-indigo-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                <p><strong>Detection:</strong> A pre-trained object detection model identifies people in the current video frame and draws bounding boxes around them.</p>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-50 text-indigo-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                <p><strong>Tracking:</strong> A tracking algorithm assigns a unique ID to every detected person and tracks their movement across consecutive frames.</p>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-50 text-indigo-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                <p><strong>Line Crossing:</strong> A virtual reference line is drawn on the frame. The system calculates the centroid (center point) of each person's bounding box.</p>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-50 text-indigo-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">4</span>
                <p><strong>Directional Counting:</strong> By comparing the centroid's previous and current coordinates relative to the virtual line, the system determines the direction of movement (IN vs. OUT).</p>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <ArrowDownUp className="w-5 h-5 text-indigo-600 mr-3" />
              Counting Logic
            </h2>
            <div className="prose prose-slate prose-sm">
              <p className="text-slate-600 mb-4">The counting logic relies on coordinate geometry:</p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>A virtual line is defined by two points: <code>(x1, y1)</code> and <code>(x2, y2)</code>.</li>
                <li>As a tracked person moves, their bounding box centroid <code>(Cx, Cy)</code> is recorded.</li>
                <li>If the centroid's <code>y</code>-coordinate transitions from <em>above</em> the line to <em>below</em> the line between frames, the <strong>IN</strong> counter is incremented.</li>
                <li>If the centroid transitions from <em>below</em> the line to <em>above</em> the line, the <strong>OUT</strong> counter is incremented.</li>
                <li>A buffer/margin is often used to prevent double-counting caused by bounding box jitter.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Limitations & Future Scope */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <AlertTriangle className="w-5 h-5 text-indigo-600 mr-3" />
              Drawbacks & Limitations
            </h2>
            <ul className="space-y-4 text-slate-600">
              <li>
                <strong className="text-slate-900 block mb-1">Overlapping People (Occlusion)</strong>
                When multiple people walk closely together, the detection model may merge them into a single bounding box or lose track of individuals, leading to undercounting.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">Dependence on Video Angle</strong>
                The accuracy of the virtual line crossing logic is highly sensitive to the camera angle. Extreme angles can distort centroid calculations. An overhead view is strongly recommended.
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">Limited Real-Time Performance</strong>
                Depending on the complexity of the detection model and hardware (lack of GPU), the system may experience frame drops, reducing real-time processing capabilities.
              </li>
            </ul>
          </section>

          <section className="bg-[#FAFAFA] rounded-2xl p-8 shadow-sm border border-slate-800 text-slate-700">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 text-indigo-600 mr-3" />
              Future Improvements
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></div>
                <p>Implement a more robust tracking algorithm (like <strong>DeepSORT</strong> or <strong>ByteTrack</strong>) to handle occlusions better.</p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></div>
                <p>Optimize the model using <strong>TensorRT</strong> or <strong>ONNX</strong> for faster, real-time edge deployment.</p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></div>
                <p>Add a web dashboard to visualize footfall analytics over time.</p>
              </li>
            </ul>
          </section>
        </div>

      </main>
    </div>
  );
}
