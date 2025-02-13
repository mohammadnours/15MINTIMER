import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

function CustomTimer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputHours, setInputHours] = useState('0');
  const [inputMinutes, setInputMinutes] = useState('0');
  const [inputSeconds, setInputSeconds] = useState('0');

  useEffect(() => {
    let intervalId: number;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsRunning(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    const totalSeconds = 
      parseInt(inputHours) * 3600 + 
      parseInt(inputMinutes) * 60 + 
      parseInt(inputSeconds);
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">Custom Timer</h2>
        <p className="text-white/80">Set your own countdown duration with hours, minutes, and seconds.</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-xl transition-transform hover:scale-[1.02]">
        {!isRunning && timeLeft === 0 ? (
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="0"
                value={inputHours}
                onChange={(e) => setInputHours(e.target.value)}
                className="w-20 px-3 py-2 bg-white/20 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Hours"
              />
              <label className="text-white/60 text-sm mt-1">Hours</label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="0"
                max="59"
                value={inputMinutes}
                onChange={(e) => setInputMinutes(e.target.value)}
                className="w-20 px-3 py-2 bg-white/20 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Minutes"
              />
              <label className="text-white/60 text-sm mt-1">Minutes</label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="number"
                min="0"
                max="59"
                value={inputSeconds}
                onChange={(e) => setInputSeconds(e.target.value)}
                className="w-20 px-3 py-2 bg-white/20 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Seconds"
              />
              <label className="text-white/60 text-sm mt-1">Seconds</label>
            </div>
          </div>
        ) : (
          <div className="text-6xl font-mono text-white text-center mb-8 font-bold tracking-wider">
            {formatTime(timeLeft)}
          </div>
        )}
        <div className="flex justify-center space-x-4">
          {!isRunning && timeLeft === 0 ? (
            <button
              onClick={startTimer}
              className="flex items-center px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-105"
            >
              <Play className="h-5 w-5 mr-2" />
              Start
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="flex items-center px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-105"
              >
                {isRunning ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                {isRunning ? 'Pause' : 'Resume'}
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(0);
                }}
                className="flex items-center px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-105"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomTimer;