import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const LoaderComponent = () => {
    return (
        <div className="loader-container">
            <Loader
                type="ThreeDots"
                color="#a0a0a0"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>

    )
}

export default LoaderComponent