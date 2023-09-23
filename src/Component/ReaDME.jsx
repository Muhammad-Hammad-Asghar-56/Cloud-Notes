import React, { useEffect, useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css'; // Import CSS for react-mde
import { getData, updateDataItem } from '../Firebase/data';
const ReaDME = (props) => {
    const { item,setNotesData } = props
    const [selectedTab, setSelectedTab] = useState('write');
    const [markdown, setMarkdown] = useState(""); // State to hold the Markdown content
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });
    
    const handleMarkdownChange = (newMarkdown) => {
        setMarkdown(newMarkdown);
        updateDataItem(item,newMarkdown);
        setNotesData(getData())
    };

    useEffect(()=>{
        item ? setMarkdown(item.body):setMarkdown("");
    },[item]);
    
    return (
        <div className="ReaDMe flex-row centerItem justifyCenter">
            <section className='w-full editorSection'>
                <ReactMde
                    value={markdown}
                    onChange={handleMarkdownChange}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
                    minEditorHeight={80}
                    maxEditorHeight={80}
                    initialEditorHeight={80}
                    heightUnits="vh"
                />
            </section>
        </div>
    );
};

export default ReaDME;