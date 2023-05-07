import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
export const Home = () => {
         const welcomeAnimation = useSpring({
           from: { opacity: 0, transform: "translateY(-50px)" },
           to: { opacity: 1, transform: "translateY(0)" },
           delay: 500,
         });
       
         const buttonAnimation = useSpring({
           from: { opacity: 0, transform: "translateY(50px)" },
           to: { opacity: 1, transform: "translateY(0)" },
           delay: 1000,
         });
       
         const imageAnimation = useSpring({
           from: { opacity: 0, transform: "scale(0.8)" },
           to: { opacity: 1, transform: "scale(1)" },
           config: { tension: 200, friction: 10 },
         });
       
         return (
           <div className="container my-5">
             <animated.h1 style={welcomeAnimation} className="text-center mb-5">
             The right watches for the right customers
             </animated.h1>
             <div className="row justify-content-center align-items-center">
               <animated.div style={imageAnimation} className="col-md-6">
                 <img
                   src="https://i.pinimg.com/736x/8b/e5/0e/8be50e4dec064fff0bfb21c0dfb8fcd9.jpg"
                   className="img-fluid rounded"
                   alt="Product"
                 />
               </animated.div>
               <animated.div style={buttonAnimation} className="col-md-6">
                 <h2>Explore Our Collection</h2>
                 <p className="my-4">
    

"Experience timeless elegance with our premium timepieces that are designed to elevate your style.
 Make every moment count and seize the day with confidence, 
 knowing that you have the perfect accessory wrapped around your wrist.
  Don't just watch time, own it, with our exquisite collection of watches."
                 </p>
                 <div className="text-center">
                   <Link to="/store">
                     <button className="btn btn-primary btn-lg">Shop Now</button>
                   </Link>
                 </div>
               </animated.div>
             </div>
           </div>
         );
       };
       
       export default Home;
        
        
        
        
        
        
        