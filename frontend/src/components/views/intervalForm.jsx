import { useState,useEffect } from "react";

function IntervalForm() {
	// States variables
	const [timer, setTimer] = useState(0);
	const [interval, setInterval] = useState(0);
	const [internal, setInternal] = useState(false);

	const handleTimer = () => { // Function to set the timer
		setTimer(interval * 60);
		setInternal(true);
	}

	useEffect(() => { // Function to countdown the timer
		let countdown;
		if (internal && timer > 0) {
			countdown = setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		}
		return () => clearTimeout(countdown);
	}, [timer,internal]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-lg mb-4">Enter the interval in minutes</p>
      <input className="border border-gray-300 rounded-md p-2 mb-4" type="number" value={interval} onChange={(e) => setInterval(e.target.value)} />
      <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition" onClick={handleTimer}>Set Interval</button>
			{internal && (
				<p className="text-white mt-4">Your transactions will be refreshed in {timer} seconds</p>
			)}
    </div>
	)
}

export default IntervalForm;