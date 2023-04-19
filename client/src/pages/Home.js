// // Functional component rendering other components.
// // Loading component will allow for the Homepage content & API data to load behind the scenes. 
// // `useEffect` hook will fetch the project data from the API when this component mounts. 
// // Contact component when rendered will float on top of the homepage to prevent re-loading of assets. 

// import Homepage from "./Homepage";
// import Contact from "./Contact";
// // import Loading from "../components/Loading";

// const Home = () => {
//   // Conditionally render Homepage, Contact, or Loading based on loading state
//   // const getData = true; // Replace with actual loading state from API

//   // Update isLoading state based on actual API loading state
//   // For example, you can use a state variable or a prop from parent component
//   // to determine the loading state from the API
//   // const [isLoading, setIsLoading] = useState(true);
//   // ... other code ...
//   // setIsLoading(false); // set to false when API loading is complete

//   // if (getData) {
//   //   return <Loading />;
//   // } else {
//     return (
//       <>
//         <Homepage />
//         <Contact />
//       </>
//     );
//   }

// export default Home;

