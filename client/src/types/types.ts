import { ApolloQueryResult } from "@apollo/client";

export interface Book_Basic {
  id: number;
  name: string;
  img: string;
}
export interface Book_MainData{
  name: string;
  img: string;
  year: number;
  genre: string;
  author: string;
  description: string;
  editors?: string;
  language?: string;
  paperback?: string;
}

export interface Book_FullData extends Book_MainData{
  id: number;
}
// admin interface
export interface onEditF {
  (value: React.SetStateAction<Book_FullData | null>): void
}

export interface onFinishEditF{
  ():void
}

export interface refetchBook{
  (): Promise<ApolloQueryResult<unknown>>
}

export type adminFormProps = {
  initName?: string,
  initYear?: number,
  initGenre?: string,
  initAuthor?: string,
  initDesc?: string,
  initEditors?: string | undefined,
  initLanguage?: string | undefined,
  initPaperback?: string | undefined,
  disabled: boolean,
  onSubmit: (item: Book_MainData) => void
}

// Auth interface
export interface ILogin {
  email: string;
  password: string;
}

export interface IReg extends ILogin {
  login: string;
}

