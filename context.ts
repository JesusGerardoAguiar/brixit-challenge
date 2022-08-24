import { createContext } from 'react'

export interface UserInfoInterface {
    id: string;
	avatar: string;
	age: number;
	email: string;
	name: string;
	role: string;
  	surname: string;
  }
  

export const UserInfoContext = createContext({} as UserInfoInterface);