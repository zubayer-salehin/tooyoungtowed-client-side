import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Issue from "../pages/Main/Issue/Issue";
import Home from "../pages/Main/Home/Home";
import AboutUs from "../pages/Main/AboutUs/AboutUs";
import Impact from "../pages/Main/Impact/Impact";
import Team from "../pages/Main/Team/Team";
import Cryptocurrency from "../pages/Main/Cryptocurrency/Cryptocurrency";
import Afghanistan from "../pages/Main/Afghanistan/Afghanistan";
import Kenya from "../pages/Main/Kenya/Kenya";
import Stories from "../pages/Main/Stories/Stories";
import OriginalReporting from "../pages/Main/OriginalReporting/OriginalReporting";
import Advocacy from "../pages/Main/Advocacy/Advocacy";
import Education from "../pages/Main/Education/Education";
import EmergencyFund from "../pages/Main/EmergencyFund/EmergencyFund";
import Covid19Relief from "../pages/Main/Covid19Relief/Covid19Relief";
import UsProgramming from "../pages/Main/UsProgramming/UsProgramming";
import StephaniFreid from "../pages/Main/StephaniFreid/StephaniFreid";
import UsGirlsChoice from "../pages/Main/UsGirlsChoice/UsGirlsChoice";
import Carrer from "../pages/Main/Carrer/Carrer";
import Contact from "../pages/Main/Contact/Contact";
import LatestNews from "../pages/Main/LatestNews/LatestNews";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<div>Error Page</div>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/the_issue",
                element: <Issue />,
            },
            {
                path: "/about_us",
                element: <AboutUs />,
            },
            {
                path: "/our_impact",
                element: <Impact />,
            },
            {
                path: "/our_team",
                element: <Team />,
            },
            {
                path: "/cryptocurrency",
                element: <Cryptocurrency />,
            },
            {
                path: "/afghanistan",
                element: <Afghanistan />,
            },
            {
                path: "/kenya",
                element: <Kenya />,
            },
            {
                path: "/stories",
                element: <Stories />,
            },
            {
                path: "/original_reporting",
                element: <OriginalReporting />,
            },
            {
                path: "/advocacy",
                element: <Advocacy />,
            },
            {
                path: "/education",
                element: <Education />,
            },
            {
                path: "/emergency_fund",
                element: <EmergencyFund />,
            },
            {
                path: "/covid_19Relief",
                element: <Covid19Relief />,
            },
            {
                path: "/us_programming",
                element: <UsProgramming />,
            },
            {
                path: "/stephani_freid",
                element: <StephaniFreid />,
            },
            {
                path: "/us_girls_choice",
                element: <UsGirlsChoice />,
            },
            {
                path: "/carrer",
                element: <Carrer />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/latest_news",
                element: <LatestNews />,
            }
        ],
    },
])

export default routes;