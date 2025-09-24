import Timer from "../ui/Timer";
import ProgressBar from "../ui/ProgressBar";
import userCircle from "../../assets/user-circle.png";
import bannerRectangle from "../../assets/banner-rectangle.png";

const InformationBanner = () => {
    return (
        <div className="relative">
            <div className="h-40 relative rounded-t-lg overflow-hidden">
                <img
                    src={bannerRectangle}
                    alt="banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-600 opacity-60"></div>

                <div className="absolute top-2 left-2 right-2 flex items-center gap-2">
                    <div className="bg-blue-500 bg-opacity-80 px-3 py-1 rounded text-sm">
                        <Timer timeRemaining={1260} className="text-white" />
                    </div>

                    <div className="flex-1 bg-blue-500 bg-opacity-80 p-2 rounded">
                        <ProgressBar current={2} total={8} className="w-full" />
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg flex items-center justify-center">
                    <img
                        src={userCircle}
                        alt="avatar"
                        className="w-24 h-24 rounded-full object-cover translate-y-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default InformationBanner;
