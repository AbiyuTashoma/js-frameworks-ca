import { Spinner } from "react-bootstrap";

function Loading () {
    return (
        <div class="text-center">
            <Spinner animation="border" className="border-dotted"/>
        </div>
    );
};

export default Loading;