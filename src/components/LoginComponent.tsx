import { LoginMachineContext } from "../machines/login.machine";
import { useSelector } from "@xstate/react";

export const LoginComponent = () => {
  const machineActorRef = LoginMachineContext.useActorRef();
  const { state, isChecking } = useSelector(machineActorRef, (state) => ({
    state,
    isChecking: state.hasTag("state-loading"),
  }));

  console.log("Login machine state:-", state.toJSON());

  return (
    <button
      className="border-t-cyan-50 bg-red-500 text-red-50 rounded-sm p-2"
      onClick={() => {
        machineActorRef.send({ type: "Check User State" });
        console.log("Login tapped");
      }}
    >
      {isChecking ? "Checking..." : "Check"}
    </button>
  );

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     setError("Both fields are required");
  //     return;
  //   }

  //   // Handle actual login logic here (e.g., API call)
  //   console.log("Login Successful:", { email, password });

  //   // Clear error and form after successful submission
  //   setError("");
  //   setEmail("");
  //   setPassword("");
  // };

  // return (
  //   <div className="flex justify-center items-center h-screen bg-gray-100">
  //     <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
  //       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
  //         Login
  //       </h2>
  //       {error && <p className="text-red-500 text-center mb-4">{error}</p>}

  //       <form onSubmit={handleSubmit}>
  //         <div className="mb-4">
  //           <label
  //             htmlFor="email"
  //             className="block text-sm font-medium text-gray-700"
  //           >
  //             Email
  //           </label>
  //           <input
  //             type="email"
  //             id="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             placeholder="Enter your email"
  //           />
  //         </div>

  //         <div className="mb-6">
  //           <label
  //             htmlFor="password"
  //             className="block text-sm font-medium text-gray-700"
  //           >
  //             Password
  //           </label>
  //           <input
  //             type="password"
  //             id="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             placeholder="Enter your password"
  //           />
  //         </div>

  //         <button
  //           type="submit"
  //           className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  //         >
  //           Login
  //         </button>
  //       </form>

  //       <div className="mt-4 text-center">
  //         <a href="#" className="text-sm text-blue-500 hover:underline">
  //           Forgot Password?
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
};
