export declare const successResponse: (data: unknown) => {
    success: boolean;
    data: unknown;
};
export declare const errorResponse: (message: string) => {
    success: boolean;
    message: string;
};
