"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { CodeHighlighter } from './code-highlighter';


export const ChatResponse = ({ response }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='chat-response-container'>
            <ReactMarkdown 
                className='chat-response-text'
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <CodeHighlighter
                                language={match[1]}
                                code={String(children).replace(/\n$/, '')}
                            />
                        ) : (
                            <code className={`inline-code ${className}`} {...props}>
                                {children}
                            </code>
                        );
                    },
                    p({ children }) {
                        return <p className="markdown-paragraph">{children}</p>;
                    },
                    h1({ children }) {
                        return <h1 className="markdown-h1">{children}</h1>;
                    },
                    h2({ children }) {
                        return <h2 className="markdown-h2">{children}</h2>;
                    },
                    h3({ children }) {
                        return <h3 className="markdown-h3">{children}</h3>;
                    },
                    ul({ children }) {
                        return <ul className="markdown-list">{children}</ul>;
                    },
                    ol({ children }) {
                        return <ol className="markdown-list ordered">{children}</ol>;
                    },
                    li({ children }) {
                        return <li className="markdown-list-item">{children}</li>;
                    },
                }}
            >
                {response}
            </ReactMarkdown>
            <button
                className='copy-button'
                onClick={() => handleCopy(response)}
                title={copied ? 'Copied!' : 'Copy response'}
            >
                {copied ? <CheckIcon className='icon' /> : <CopyIcon className='icon' />}
            </button>
            <style jsx>{`
                .chat-response-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    width: 100%;
                }

                .chat-response-text {
                    color: var(--text-primary);
                    font-size: 16px;
                    line-height: 1.7;
                    font-weight: 400;
                }

                .markdown-paragraph {
                    margin: 12px 0;
                    line-height: 1.7;
                }

                .markdown-h1, .markdown-h2, .markdown-h3 {
                    font-weight: 500;
                    margin: 24px 0 12px;
                    color: var(--text-primary);
                }

                .markdown-h1 {
                    font-size: 24px;
                }

                .markdown-h2 {
                    font-size: 20px;
                }

                .markdown-h3 {
                    font-size: 18px;
                }

                .markdown-list {
                    margin: 12px 0;
                    padding-left: 24px;
                }

                .markdown-list.ordered {
                    list-style-type: decimal;
                }

                .markdown-list-item {
                    margin: 6px 0;
                    line-height: 1.6;
                }

                .inline-code {
                    background-color: var(--surface);
                    color: #d73a49;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 0.9em;
                    font-family: 'Courier New', monospace;
                    border: 1px solid var(--border-color);
                }

                .copy-button {
                    align-self: flex-start;
                    padding: 8px;
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-sm);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                }

                .copy-button:hover {
                    background-color: var(--surface-hover);
                    border-color: var(--text-secondary);
                }

                .copy-button .icon {
                    width: 18px;
                    height: 18px;
                }
            `}</style>
        </div>
    )
}