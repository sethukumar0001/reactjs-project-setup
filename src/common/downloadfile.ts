import {saveAs} from 'file-saver';
export const handleDownloadOnClick = (url:string,name:string) => {
    // var link = document.createElement("a");
    // link.target = "_blank";
    // link.download = name;
    // link.name =name
    // link.href =url
    // link.click();
    saveAs(url,name)
}