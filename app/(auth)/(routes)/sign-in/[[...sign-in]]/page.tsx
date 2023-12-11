//The double brackets [[...sign-up]] are used for catch-all routes, 
//which means this route will match paths like /sign-up/anything/here. 
//The content of the anything part will be available as a parameter, 
//which can be accessed in your page component.
//This allows for flexible routing and handling of different sign-up scenarios or additional parameters.
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn />;
}