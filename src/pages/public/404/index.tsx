import * as React from "react";
import "./index.scss";
// import NotFoundJson from "./404.json";
// import HeaderOnlyLayout from "@layouts/HeaderOnlyLayout/HeaderOnlyLayout";
// import Lottie from 'react-lottie'
// import NotfoundLayout from '@layouts/NotFoundLayout';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INotFoundPageProps {}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: NotFoundJson,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="w-100">
      <div className="loading-wrapper__details">
        {/* <Link to={`/`}>
					<p
						style={{
							position: "absolute",
							top: "75%",
							left: "46%",
							cursor: "pointer",
							padding: "10px",
							backgroundColor: "rgb(43, 119, 112)",
              width:'100px',
              textAlign:'center',
              borderRadius:'5px',
              color:'white'
						}}
					>
						Home
					</p>
          </Link> */}
      </div>
    </div>
  );
};

export default NotFoundPage;
