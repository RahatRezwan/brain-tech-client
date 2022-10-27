import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import {
   Blog,
   Blogs,
   Checkout,
   CourseDetails,
   Courses,
   FAQ,
   Home,
   Login,
   SignUp,
} from "../../pages";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

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
            loader: async () => fetch("http://localhost:5000/faq"),
         },
         {
            path: "/checkout",
            element: <Checkout />,
         },
         {
            path: "/courses",
            element: <Courses />,
            loader: async () => fetch("http://localhost:5000/courses"),
         },
         {
            path: "/course/:courseId",
            element: <CourseDetails />,
            loader: async ({ params }) => fetch(`http://localhost:5000/course/${params.courseId}`),
         },
         {
            path: "/blogs",
            element: <Blogs />,
            loader: async () => fetch("http://localhost:5000/blogs"),
         },
         {
            path: "/blog/:blogId",
            element: <Blog />,
            loader: async ({ params }) => fetch(`http://localhost:5000/blog/${params.blogId}`),
         },
      ],
      errorElement: <ErrorPage />,
   },
]);
