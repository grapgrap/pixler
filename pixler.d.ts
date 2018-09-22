declare class pixler {
    pixelate(source: File | Blob | string, size: number, callback: (result: string) => void): Promise<void>;
}
declare const _default: pixler;
export default _default;
