import { useState } from "react";
import "./App.css";
import Workouts from "./components/Workouts";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BodyMeasurementsForm from "./components/BodyMeasurementsForm";
import Routines from "./components/WorkoutRoutines";
import WorkoutRoutines from "./components/WorkoutRoutines";
import IndexPage from "./pages/index";
import { workoutLoader } from "./loaders/workoutLoader";

const exercises = ["Push-ups", "Sit-ups", "Squats", "Lunges", "Burpees"];

function App() {
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleExerciseSelect = (exercise: string) => {
    setSelectedExercise(exercise);
  };

  //TODO Add typing
  //@ts-ignore
  const handleMeasurementsSubmit = (measurements: BodyMeasurements) => {
    // Handle the submitted measurements, e.g., send them to an API or update the app's state.
    console.log(measurements);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <div>This page doesn't exist</div>,
      children: [
        {
          path: "/profile/:userId",
          element: <Profile />,
        },
        {
          path: "/workouts",
          element: <Workouts/>,
          loader: workoutLoader
        },
        { path: "/measurements", element: <div>Body mesasurements</div> },
        { path: "/routines", element: <Routines /> },
      ],
    },
  ]);

  // /profile/:profileId => /profile/mark, /profile/bob

  return (
    <>
      <RouterProvider router={router} />
      {/* <div>
      <Workouts exercises={exercises} onSelect={handleExerciseSelect} selectedExercise={selectedExercise} />
      <Profile></Profile>
      <Navbar></Navbar>
      <BodyMeasurementsForm onSubmit={handleMeasurementsSubmit} />
      <Routines></Routines>
    </div> */}
    </>
  );
}

// return (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/profile/123">Profile</Link>
//           </li>
//           <li>
//             <Link href="/workouts">Workouts</Link>
//           </li>
//           <li>
//             <Link href="/measurements">Measurements</Link>
//           </li>
//           <li>
//             <Link href="/routines">Routines</Link>
//           </li>
//         </ul>
//       </nav>

//       <Route path="/">
//         <IndexPage />
//       </Route>

//       <Route path="/profile/:userId">
//         <Profile />
//       </Route>

//       <Route path="/workouts">
//         <Workouts />
//       </Route>

//       <Route path="/measurements">
//         <div>Body Measurements</div>
//       </Route>

//       <Route path="/routines">
//         <Routines />
//       </Route>
//     </div>
//   </Router>
// );
// };


export default App;
