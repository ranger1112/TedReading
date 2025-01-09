import {
    Button,
} from "@material-tailwind/react";
import React from "react";
import {AlertIcon} from "../components/common/alert/iconAlert";
import { useAutoCloseAlert } from "../components/common/useAutoCloseAlert";



export default function History() {

    const {showAlert, showAlertWithTimeout, setShowAlert} = useAutoCloseAlert();

    return <div>
        <Button onClick={showAlertWithTimeout}>Button</Button>

        {showAlert && <AlertIcon message={ "hello" } setShowAlert={setShowAlert}></AlertIcon>}
    </div>
}