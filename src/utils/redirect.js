import { Router } from "../configs/routes";

export default (context, target, params = {}) => {
  // Server
  if (context && context.res) {
    // 303: "See Other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // Local
    Router.pushRoute(target, params);
  }
};

// // redirect helper function to be used in getInitialProps
// export default (res, url) => {
//     // res is only available if server-side
//     if (res) {
//       res.writeHead(302, { location: url })
//       res.end()
//     } else {
//       Router.push(url)
//     }
//   };
