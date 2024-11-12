/* eslint-disable react/jsx-no-undef */
import { useRef, useState, useEffect } from 'react';
import { MdComputer } from "react-icons/md";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Input from "./components/Input";
import Button from "./components/Button";
import Home from "./components/Home";

const App = () => {
  const ref = useRef(null);
  const otpRefs = useRef([]); // Create an array of refs for OTP inputs
  const [currentStep, setCurrentStep] = useState(1);
  const [disable, setDisable] = useState(false);
  const [typingValue, setTypingValue] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typingValue) {
        localStorage.setItem("userBirthYear", typingValue);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [typingValue]);

  const handleContinue = () => {
    setDisable(!disable);
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // On OTP submit, navigate to Home
      navigate('/home');
    }
  };

  const handleInputChange = (event) => {
    setTypingValue(event.target.value);
  };

  const handleOtpChange = (element, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = element.value;
    setOtp(updatedOtp);

    if (element.value && index < 5) {
      // Focus the next input using the ref
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpBackspace = (index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = "";
    setOtp(updatedOtp);

    if (index > 0) {
      // Focus the previous input using the ref
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="h-screen bg-black px-12 flex flex-col justify-end py-2">
      <div className="h-5/6 bg-blue_700 mb-5 flex flex-col items-center">
        <div className="text-white flex flex-col gap-16 pt-20">
          <span className="flex items-center gap-2">
            <MdComputer />
            <h2 className="text-xl text-green">Webinar<span className="text-white">.gg</span></h2>
          </span>
          {currentStep === 1 && <h2 className="text-2xl tracking-tight">Verify Your Age</h2>}
          {currentStep === 2 && <h2 className="text-2xl tracking-tight">Enter Your Email</h2>}
          {currentStep === 3 && <h2 className="text-2xl tracking-tight">Enter OTP</h2>}
        </div>
        <div className="flex flex-col items-center gap-4 pt-12">
          {currentStep === 1 && (
            <>
              <p className="text-sm text-white/45">Please confirm your birth year. This is just a demo.</p>
              <Input
                ref={ref}
                onChange={handleInputChange}
                placeholder="Your Birth date"
                value={typingValue}
                className="bg-blue_300 pl-3 font-medium w-full py-1.5 rounded-xl text-white"
              />
            </>
          )}
          {currentStep === 2 && (
            <>
              <p className="text-sm text-white/45">Please enter your email address.</p>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                value={email}
                className="bg-blue_300 pl-3 font-medium w-full py-1.5 rounded-xl text-white"
              />
            </>
          )}
          {currentStep === 3 && (
            <>
              <p className="text-sm text-white/45">Enter the 6-digit code sent to your email.</p>
              <div className="flex gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => otpRefs.current[index] = el} // Assign ref to each input
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && otp[index] === "") {
                        handleOtpBackspace(index);
                      }
                    }}
                    className="w-10 h-10 text-center font-medium rounded border border-gray-300 text-black bg-white"
                  />
                ))}
              </div>
            </>
          )}
          <Button handleClick={handleContinue} disabled={disable}>
            {currentStep < 3 ? "Continue" : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default MainApp;
