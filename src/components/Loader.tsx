// import React from "react";

// interface Props {
//   message: string;
// }
// const Loader = ({message}:Props) => {
//   return (
//     <div className="center">
//       <p>{message}...</p>
//       <span className="loader"></span>
//     </div>
//   );
// };

// export default Loader;

import React from "react";

interface Props {
  message: string;
}

const Loader = ({ message }: Props) => {
  return (
    <div className="center">
      <p>{message}</p>

      <div className="progress-loader">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Loader;
