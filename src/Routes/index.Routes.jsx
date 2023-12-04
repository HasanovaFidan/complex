import Add from "../Page/Admin/Add/Add";
import AdminRoot from "../Page/Admin/AdminRoot";
import AdminDetail from "../Page/Admin/Detail/AdminDetail";
import Edit from "../Page/Admin/EDit/Edit";
import HomeAdmin from "../Page/Admin/HomeAdmin/HomeAdmin";
import Home from "../Page/Site/Home/Home";
import SiteRoot from "../Page/Site/SiteRoot";
import Detail from "../Page/Site/detail/Detail";
const ROOT = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: ":id", 
        element: <Detail />
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "addproducts",
        element: <Add />,
      },
      {
        path: "",
        element: <HomeAdmin />
      },
      {
        path: "edit/:id",
        element: <Edit />
      },
      {
        path: "detail/:id", 
        element: <AdminDetail />
      },
    ],
  },
];

export default ROOT;

