import { Music2, HelpCircle, RotateCcw, MapIcon } from "lucide-react";

import Button from "../ui/Button";

const InformationControls = () => {
    return (
        <div className="mt-3 p-2">
            <div className="flex gap-2 justify-between">
                <Button
                    variant="secondary"
                    size="sm"
                    className="w-12 h-12 p-0 rounded-lg flex items-center justify-center"
                    onClick={() => {}}
                >
                    <HelpCircle size={20} />
                </Button>

                <Button
                    variant="secondary"
                    size="sm"
                    className="w-12 h-12 p-0 rounded-lg flex items-center justify-center"
                    onClick={() => {}}
                >
                    <RotateCcw size={20} />
                </Button>

                <Button
                    variant="secondary"
                    size="sm"
                    className="w-12 h-12 p-0 rounded-lg flex items-center justify-center"
                    onClick={() => {}}
                >
                    <Music2 size={20} />
                </Button>

                <Button variant="warning" size="md" className="px-3">
                    <span className="flex items-center gap-2">
                        <MapIcon size={20} /> Naar de kaart
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default InformationControls;
