import { Common, CommonFilePicker, MediaFilepickerOptions } from './mediafilepicker.common';
export declare class MediafilepickerDelegate extends NSObject {
    static ObjCProtocols: any[];
    private _owner;
    static initWithOwner(owner: Mediafilepicker): MediafilepickerDelegate;
    imagePickerControllerDidFinishPickingMediaWithInfo(picker: any, assetDict: NSDictionary<any, any>): void;
    assetsPickerControllerDidFinishPickingAssets(picker: any, assetArray: NSArray<any>): void;
}
export declare class Mediafilepicker extends Common implements CommonFilePicker {
    output: string;
    private delegate;
    startFilePicker(params: MediaFilepickerOptions): void;
    getFiles(assetArray: NSArray<any>): void;
    handleJob(assetArray: NSArray<any>): Promise<{}>;
    copyImageFiles(rawData: PHAsset, fileName: string): Promise<{}>;
    copyVideoFiles(url: NSURL, fileName: any): Promise<{}>;
}
export declare let invokeOnRunLoop: (func: any) => void;
