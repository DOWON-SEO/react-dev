export function imageFileReaderP(file: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (event: ProgressEvent<FileReader>) => {
            const result = event.target?.result;

            if (result && typeof result === "string") resolve(result);
            else reject(new Error(`imageFileReaderP: can't read image file`));
        };
        fileReader.readAsDataURL(file);
    });
}
