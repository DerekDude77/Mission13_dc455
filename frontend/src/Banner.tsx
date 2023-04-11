// import React from 'react';
// import styles from './Banner.module.css';

// function TopBanner(props: any) {
//   return (
//     <>
//       <div className="row">
//         <div className="col align-self-center">
//           <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton Headshot" />
//         </div>
//         <div className="col align-self-center text-start">
//           <h1 className={styles.h1}>{props.title}</h1>
//         </div>
//         <br /> <br />
//         <h3>This site is a collection of movies for Joel Hilton.</h3>
//       </div>
//     </>
//   );
// }

// export default TopBanner;

import React from 'react';
import styles from './Banner.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className={`${styles.row} ${styles.banner}`}>
        <div className={`${styles.col} ${styles.alignSelfCenter}`}>
          <img
            className={styles.headshot}
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton Headshot"
          />
        </div>
        <div
          className={`${styles.col} ${styles.alignSelfCenter} ${styles.textStart}`}
        >
          <h1 className={styles.title}>{props.title}</h1>
          <h3 className={styles.subtitle}>
            This site is a collection of movies for Joel Hilton.
          </h3>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
