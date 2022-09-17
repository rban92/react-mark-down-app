import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

const App = () => {

    const [markdown, setMarkdown] = useState('## Hello World');
    return (
        <>
            <header>
                <h1>React Markdown</h1>
            </header>
            <main>
                <section className="markdown">
                    <textarea className='input' value={markdown} onChange={e => setMarkdown(e.target.value)}></textarea>
                </section>

                <section className="result">
                    <h1 className='header-title'>Preview</h1>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </section>
            </main>
        </>

    )
}

export default App