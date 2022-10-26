import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import { Blog, Blogs, CourseDetails, Courses, FAQ, Home, Login, SignUp } from "../../pages";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/home",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signup",
            element: <SignUp />,
         },
         {
            path: "/faq",
            element: <FAQ />,
         },
         {
            path: "/courses",
            element: <Courses />,
            loader: async () => fetch("http://localhost:5000/courses"),
         },
         {
            path: "/course/:courseId",
            element: <CourseDetails />,
         },
         {
            path: "/blogs",
            element: <Blogs />,
         },
         {
            path: "/blog/:blogId",
            element: <Blog />,
         },
      ],
   },
]);
