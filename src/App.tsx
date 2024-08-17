import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoutes } from "routes/private.routes";
import { PublicRoutes } from "routes/public.routes";
import NotFoundPage from "@pages/public/404";

function App() {
  /* -------------------------------------------------------------------------- */
  /*                               Hooks Section                                */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */
  // useEffect(() => {
  //   console.log(params);
  //   let path = window.location.pathname;
  //   let orgID = path.split("/")[1];
  //   const pusher = new Pusher("b999d44ea855263e20a6", {
  //     cluster: "ap2",
  //   });
  //   const channel = pusher.subscribe(`whats-app-${orgID}`);
  //   channel.bind("whats-app-message-notification", (data: any) => {
  //     // Method to be dispatched on trigger.
  //     console.log("NEW EVENT RECEIVED ::: ", {
  //       data: data,
  //     });
  //   });

  //   // Unsubscribe from the channel on component unmount
  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {PublicRoutes.map((item, key) => {
            // eslint-disable-next-line
            const Element: any = item.component;
            return (
              <Route
                key={key}
                path={item.path}
                element={
                  !localStorage.getItem("accessToken") ? (
                    <Element />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
            );
          })}
          {PrivateRoutes.map((item: any, key) => {
            // eslint-disable-next-line
            const Element: any = item.component;
            return (
              <Route
                key={key}
                path={item.path}
                element={
                  localStorage.getItem("accessToken") ? (
                    <Element />
                  ) : (
                    <>
                      <Navigate to="/login" />
                    </>
                  )
                }
              />
            );
          })}
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
