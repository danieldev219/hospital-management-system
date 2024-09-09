import { ReactNode } from "react";

export type NavLinkType = {
   label: string;
   href: string;
   icon?:string;
};

export type AnimatedCardProps = {
   image: string;
   heading: string;
   text?: string;
   key: string | number;
   link?: string;
   linkText?: string;
   className?: string;
   imageClassName?: string;
   children?: ReactNode;
};

export interface IPatient {
   _id?: string;
   name?: string;
   email?: string;
   password?: string;
   phone?: string;
   bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
   dob?: Date;
   isSubscribed?: boolean;
   isBlocked?: boolean;
   address?: string;
   profile?: string;
   occupation?: string;
   gender?: "Male" | "Female" | "Other";
}

export interface ErrorResponse {
   message?: string;
   stack?: string;
}

export interface MessageResponse  {
   message: string;
};


export interface PaginatedResult<T> {
   items: T[];
   totalItems: number;
   currentPage: number;
   totalPages: number;
   hasNextPage: boolean;
   hasPreviousPage: boolean;
}

export interface IDoctor {
   _id?: string;
   name?: string;
   phone?: string;
   password?:string;
   qualifications?: string[];
   isBlocked?: boolean;
   image?: string;
   email?: string;
   updatedAt?: string;
   createdAt?: string;
   isVerified?:boolean;
}
