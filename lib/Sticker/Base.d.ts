/// <reference types="node" />
import { IConfig, IProcessOptions } from '../typings';
export default class {
    /**
     * Supported MimeTypes
     */
    supportedTypes: string[];
    /**
     * Buffer of the image/video provided
     */
    data?: Buffer | string;
    /**
     * Webpmux binary
     */
    webpmux: string;
    /**
     * cwebp binary
     */
    cwebp: string;
    /**
     *
     */
    gif2webp: string;
    /**
     * Sticker Config
     */
    config?: IConfig;
    /**
     * path of the file
     */
    path: string;
    /**
     * Processoptions to pass to ffmpeg
     */
    processOptions: IProcessOptions;
    final: string;
    /**
     * MimeType of the buffer provided
     */
    mime: string;
    /**
     * Output options for FFMpeg
     */
    outputOptions: string[];
}
//# sourceMappingURL=Base.d.ts.map