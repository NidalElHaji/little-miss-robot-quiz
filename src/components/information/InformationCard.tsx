import Card from "../ui/Card";
import InformationBanner from "./InformationBanner";
import InformationDescription from "./InformationDescription";
import InformationControls from "./InformationControls";

const InformationCard = () => {
    return (
        <Card className="flex flex-col h-full">
            <InformationBanner />
            <InformationDescription />
            <InformationControls />
        </Card>
    );
};

export default InformationCard;
