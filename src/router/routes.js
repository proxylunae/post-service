import About from "../pages/About";
import Posts from "../pages/Posts";
import notFound from "../pages/NotFound";
import Post from "../pages/Post";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/posts', element: Posts},
    {path: '/posts/:id', element: Post},
    {path: '/login', element: Posts},
    {path: '*', element: notFound},
    {path: '/', element: Posts},
]

export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '*', element: Login},
    {path: '/', element: Login},

]