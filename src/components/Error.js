import { useRouteError } from "react-router-dom";

// useRouterError is a hook, it gives you more information about the error
const Error = () => {
  const error = useRouteError();
  console.log("this is more informative error : ", error);
  return (
    <div>
      <h1> Hey something went wrong</h1>
    </div>
  );
};

export default Error;
