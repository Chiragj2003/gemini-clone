"use client";

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CheckIcon, CopyIcon } from 'lucide-react';


export const CodeHighlighter = ({
    language,
    code
}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='code-highlighter-container'>
            <div className='code-header'>
                <span className='code-language'>{language}</span>
                <button
                    className='code-copy-button'
                    onClick={handleCopy}
                    title={copied ? 'Copied!' : 'Copy code'}
                >
                    {copied ? <CheckIcon className='icon' /> : <CopyIcon className='icon' />}
                    <span className='copy-text'>{copied ? 'Copied!' : 'Copy code'}</span>
                </button>
            </div>
            <div className='code-content'>
                <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={language}
                    PreTag="div"
                    customStyle={{
                        margin: 0,
                        padding: '16px',
                        fontSize: '14px',
                        borderRadius: '0 0 8px 8px',
                        background: '#1e1e1e',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
            <style jsx>{`
                .code-highlighter-container {
                    margin: 16px 0;
                    border-radius: var(--radius-sm);
                    overflow: hidden;
                    border: 1px solid var(--border-color);
                    background: #1e1e1e;
                }

                .code-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8px 16px;
                    background: #2d2d2d;
                    border-bottom: 1px solid #3d3d3d;
                }

                .code-language {
                    font-size: 12px;
                    font-weight: 500;
                    color: #9cdcfe;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .code-copy-button {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 12px;
                    background: transparent;
                    border: 1px solid #4d4d4d;
                    border-radius: 4px;
                    color: #cccccc;
                    font-size: 12px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .code-copy-button:hover {
                    background: #3d3d3d;
                    border-color: #6d6d6d;
                }

                .code-copy-button .icon {
                    width: 14px;
                    height: 14px;
                }

                .copy-text {
                    font-weight: 500;
                }

                .code-content {
                    overflow-x: auto;
                }

                .code-content::-webkit-scrollbar {
                    height: 8px;
                }

                .code-content::-webkit-scrollbar-track {
                    background: #1e1e1e;
                }

                .code-content::-webkit-scrollbar-thumb {
                    background: #4d4d4d;
                    border-radius: 4px;
                }

                .code-content::-webkit-scrollbar-thumb:hover {
                    background: #6d6d6d;
                }
            `}</style>
        </div>
    )
}