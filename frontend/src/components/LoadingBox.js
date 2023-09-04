// import Spinner from 'react-bootstrap/Spinner';
import { BeatLoader } from "react-spinners";

export default function LoadingBox() {
  return (
    // <BeatLoader color="#36d7b7" />
    <div className="w-screen h-full flex align-middle justify-center pt-14 pb-14">
      <BeatLoader color="#075159" size={20} />
    </div>
  );
}
