import React from 'react';
import { Timer, Clock, WatchIcon as StopwatchIcon, ExternalLink } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';
import CustomTimer from './components/CustomTimer';
import PresetTimer from './components/PresetTimer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-white animate-pulse" />
                <span className="ml-2 text-xl font-bold text-white">TimerApp</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md flex items-center transition-colors duration-200">
                  <StopwatchIcon className="h-5 w-5 mr-1" />
                  Stopwatch
                </Link>
                <Link to="/timer" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md flex items-center transition-colors duration-200">
                  <Timer className="h-5 w-5 mr-1" />
                  Custom Timer
                </Link>
                <a 
                  href="https://10timer.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-indigo-200 px-3 py-2 rounded-md flex items-center transition-colors duration-200"
                >
                  10Timer <ExternalLink className="h-4 w-4 ml-1" />
                </a>
                <a 
                  href="https://10timer.com/15-minute-timer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-indigo-200 px-3 py-2 rounded-md flex items-center transition-colors duration-200"
                >
                  15 Min Timer <ExternalLink className="h-4 w-4 ml-1" />
                </a>
                <a 
                  href="https://10timer.com/30-minute-timer" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-indigo-200 px-3 py-2 rounded-md flex items-center transition-colors duration-200"
                >
                  30 Min Timer <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Professional Time Management Tools</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Enhance your productivity with our suite of time management tools. Whether you need a precise stopwatch or a customizable timer, we've got you covered.
            </p>
          </div>

          <Routes>
            <Route path="/" element={<Stopwatch />} />
            <Route path="/timer" element={<CustomTimer />} />
            <Route path="/15-minute-timer" element={<PresetTimer minutes={15} />} />
            <Route path="/30-minute-timer" element={<PresetTimer minutes={30} />} />
          </Routes>

          <footer className="mt-16 text-center text-white/60">
            <p className="mb-2">© 2024 TimerApp. All rights reserved.</p>
            <p>A professional time management solution for everyone.</p>
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;