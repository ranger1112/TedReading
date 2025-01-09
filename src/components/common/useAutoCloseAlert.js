import {useState} from "react";

export const useAutoCloseAlert = (timeout = 3000) => {
    const [showAlert, setShowAlert] = useState(false);

    const showAlertWithTimeout = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, timeout);
    };

    return {showAlert, showAlertWithTimeout, setShowAlert}
}