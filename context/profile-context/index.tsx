import Profile from "@/components/profile";
import { ReactNode, createContext, useContext, useState } from "react";

type userDataType = {
  userName: string;
  name: string;
  lastName: string;
  nationalID: string;
  phoneNo: string;
  birthDate: string;
  email: string;
  myTravels: any;
};

type ProfileContextType = {
  userDetails: userDataType;
  setUserDetails: React.Dispatch<React.SetStateAction<userDataType>>;
};

const ProfileContext = createContext({} as ProfileContextType);

export function useProfileContext() {
  return useContext(ProfileContext);
}

export default function ProfileProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    name: "",
    lastName: "",
    nationalID: "",
    phoneNo: "",
    birthDate: "",
    email: "",
    myTravels: "",
  } as userDataType);
  return (
    <ProfileContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </ProfileContext.Provider>
  );
}
