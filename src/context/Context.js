import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [gender, setGender] = useState("")
    //StorageData
    const [storageUserData, setStorageUserData] = useState();

    //FormUpdate
    const [isUpdate, setIsUpdate] = useState(false)

    //UserData
    const [userData, setUserData] = useState([])

    return (
        <Context.Provider
        value={{
            userName,
            setUserName,
            phoneNumber,
            setPhoneNumber,
            gender,
            setGender,
            userData,
            setUserData,
            isUpdate,
            setIsUpdate
        }}
        >
            {children}
        </Context.Provider>
    )
};









