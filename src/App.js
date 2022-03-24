import './App.css';
import { AdminHomePage } from "./pages/AdminHomePage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage/index.jsx";
import { CreateTripPage } from "./pages/CreateTripPage";
import { HomePage } from "./pages/Homepage";
import { ListTripPages } from "./pages/ListTripPages";
import { LoginPage } from "./pages/LoginPage";
import { TripDetailsPage } from "./pages/TripDetailsPage";
import { BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element ={<HomePage />} />
              <Route path="/listtrippages" element ={  <ListTripPages />} />
              <Route path="/applicationformpage" element ={<ApplicationFormPage />} />
              <Route path="/loginpage" element ={<LoginPage />} />
              <Route path="/adminhomepage" element ={<AdminHomePage />} />
              <Route path="/tripdetailspage/:id" element ={<TripDetailsPage />} />
              <Route path="/createtrippage" element ={<CreateTripPage />} /> 

        </Routes>
    </BrowserRouter>
  );
}


