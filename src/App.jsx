import MyHeading from "./components/MyHeading";
import { MyHeadingLittle3} from "./components/MyHeading";
import {MyHeadingLittle2 as MeracustomeName} from "./components/MyHeading";

//MyHeadingLittle2 ko import as karke import karna hota hai but
//jo export deafault hai uske kisi bhi naam se import kar sakte hai
//Example ke tor pe-> import MyHeading from "./components/MyHeading"; ko import Aise  from "./components/MyHeading"; bhi likh sakte hai.

const a="ds32rfd";
function App()
{
    return(
    <>
        <div>
            <MyHeading name="Aditya" text="Nice one" price={999} />
            <MeracustomeName />
            <MyHeadingLittle3 />
            
            <h1>Welcome to react {a}</h1>
            <p>paragraph</p>
        </div>
        <div>asda</div>
    </>
    );
}
export default App;