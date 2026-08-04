// function Container({ children, className = "" }) {
//   return (
//     <div
//       className={`mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// export default Container;

// function Container({ children }) {
//   return (
//     <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
//       {children}
//     </div>
//   );
// }

// export default Container;

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;