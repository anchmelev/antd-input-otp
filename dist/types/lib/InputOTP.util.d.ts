import type { FormInstance } from 'antd';
import type { TGetSibling, TIsNotTheCharacter } from './InputOTP.type';
export declare const getSibling: ({ currentTarget, }: React.FormEvent<HTMLInputElement>) => TGetSibling;
export declare const getCurrentInput: (event: React.FormEvent<HTMLInputElement>) => Element[];
export declare const getCurrentIndex: (event: React.FormEvent<HTMLInputElement>) => number;
export declare const isNotTheCharacter: TIsNotTheCharacter;
export declare const makeLength: (length: number) => number;
export declare const isFormInstance: (data: FormInstance | (() => void) | undefined) => data is FormInstance<any>;
