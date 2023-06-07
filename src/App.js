// import { 
//   createBrowserRouter,
//   Routes, 
//   Route, 
//   NavLink, 
//   createRoutesFromElements,
//   RouterProvider
// } from "react-router-dom";


import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


//pages
import Home from './Pages/Home'
import Individuals from './Pages/Individuals'
import Enterprise from './Pages/Enterprise'
import Teams from "./Pages/Teams";


//layout
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout";
import CalenderManagement from "./Pages/help/CalenderManagement";
import Appointment from "./Pages/help/Appointment";
import Reminder from "./Pages/help/Reminder"
import NotFound from "./Pages/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} /> 
      <Route path="Individuals" element={<Individuals/>} />
      <Route path="Enterprise" element={<Enterprise/>} />
      <Route path="Teams" element={<Teams/>} />
      <Route path="help" element={<HelpLayout/>} >
        <Route path="calenderManagement" element={<CalenderManagement/>} />
        <Route path="appointment" element={<Appointment/>} />
        <Route path="reminder" element={<Reminder/>} />
      </Route>

      <Route path="*" element={<NotFound/>} />

  </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;


// {/* function App() { */}
//   {/* return (
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1 style={{color: 'blue'}} >Calendly</h1>
    //       <NavLink to="/" >Home</NavLink>
    //       <NavLink to="individuals" > Individuals</NavLink>
    //       <NavLink to="enterprise" > Enterprise</NavLink>
    //       <NavLink to="services" > Services</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<Home/>} /> 
    //       <Route path="Individuals" element={<Individuals/>} />
    //       <Route path="Enterprise" element={<Enterprise/>} />
    //       <Route path="Services" element={<Services/>} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
//path for home can be replaced by index alone without colons
  // );
// } */}

// {/* export default App;   */}
