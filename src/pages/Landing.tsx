import { useAppStore } from "@/store/store";

const Landing = () => {
	const { counter, incrementCounter } = useAppStore((state) => ({
		counter: state.counter,
		incrementCounter: state.incrementCounter,
	}));
	return (
		<main className="container h-screen flex flex-col justify-center items-center gap-8">
			<div className="flex flex-col gap-3 items-center">
			<h1 className="text-3xl font-bold text-slate-800">Clicks Counter</h1>
				<h3 className="text-2xl font-bold text-slate-600">{counter}</h3>
			</div>
			<button onClick={() => incrementCounter()} className="bg-blue-500 px-8 py-2 rounded-lg">Increment</button>
		</main>
	);
};

export default Landing;
