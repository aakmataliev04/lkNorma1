import React from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import file from './excelDocs/IMPORT_TNVED_6201.xlsx'

const Docs = () => {

    let fileHandler = (event) => {
        let fileObj = event.target.files[0];

//just pass the fileObj as parameter
        const {file} = document.querySelector('.file');

        ExcelRenderer(fileObj, (err, resp) => {
            if(err){
                console.log(err);
            }
            else{
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });

    }


    return (
        <div>
            docs
        </div>
    );
};

export default Docs;