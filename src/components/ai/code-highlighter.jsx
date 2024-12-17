"use client";

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CheckIcon, CopyIcon } from 'lucide-react';


export const CodeHighlighter = ({
    language,
    code
} ) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className='relative py-6'>
            <div className='overflow-x-auto'>
                <SyntaxHighlighter
                    style={dracula}
                    language={language}
                    PreTag="div"
                >
                    {code}
                </SyntaxHighlighter>
            </div>
            <button
                className='absolute top-11 right-3 p-2 h-8'
                onClick={handleCopy}
            >
                {
                    copied ? <CheckIcon className='size-4'/> : <CopyIcon className='size-4'/>
                }
            </button>
        </div>
    )
}