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
            loader: async () => fetch("https://brain-tech-server.vercel.app/faq"),
         },
         {
            path: "/checkout",
            element: <Checkout />,
         },
         {
            path: "/courses",
            element: <Courses />,
            loader: async () => fetch("https://brain-tech-server.vercel.app/courses"),
         },
         {
            path: "/course/:courseId",
            element: <CourseDetails />,
            loader: async ({ params }) =>
               fetch(`https://brain-tech-server.vercel.app/course/${params.courseId}`),
         },
         {
            path: "/blogs",
            element: <Blogs />,
            loader: async () => fetch("https://brain-tech-server.vercel.app/blogs"),
         },
         {
            path: "/blog/:blogId",
            element: <Blog />,
            loader: async ({ params }) =>
               fetch(`https://brain-tech-server.vercel.app/blog/${params.blogId}`),
         },
      ],
      errorElement: <ErrorPage />,
   },
]);
