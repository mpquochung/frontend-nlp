'use client';
import React, { createContext, useContext, useState } from 'react';

const null_user ={
  login:false,
  information:{
      email:"null@null.null",
      name:"demo",
      institution:"null",
      access_token:"0123",
      refresh_token:"0123",
      role:"dev"
  }
}

interface UserContextType {
  userId: any | null;
  useUserId: React.Dispatch<React.SetStateAction<any | null>>;
}

interface UserProviderProps {
  children:any;
}



const UserContext = createContext<UserContextType>({
  userId: null,
  useUserId: () => null,
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userId, useUserId] = useState<any>(null_user);

  return (
    <UserContext.Provider value={{ userId, useUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => useContext(UserContext);



