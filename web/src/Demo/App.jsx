import { useState } from 'react';

 import { checks } from '../../../src/data/checks.js';
import Brand from './components/Brand.jsx';
import Navigation from './components/Navigation.jsx';
 import LastScan from './components/LastScan.jsx';
import Analysis from './components/Analysis.jsx';
import Result from './components/Result.jsx';
import CommandPanel from './components/CommandPanel.jsx';
import PageHeader from './components/PageHeader.jsx';

import '../../../src/css/styles.css';

function App() {

    const [selectedCheck, setSelectedCheck] = useState(checks[0]);
    const [result, setResult] = useState(null);

    function runCheck() {
        setResult({
            status: 'success',
            message: 'Check completed successfully.',
            output: `Command:\n${selectedCheck.command}\n\nNo scan has been connected yet.`
        });
    }

    return (
        <div className="app">
            <aside className="sidebar">

    <Brand />

           <Navigation
    checks={checks}
    selectedCheck={selectedCheck}
    onSelect={(check) => {
        setSelectedCheck(check);
        setResult(null);
    }}
/>

           <LastScan />
            </aside>

            <main className="main-content">

<PageHeader selectedCheck={selectedCheck} />

          <CommandPanel
    selectedCheck={selectedCheck}
    onRun={runCheck}
/>

         <Result result={result} />
<Analysis result={result} />

            </main>
        </div>
    );
}

export default App;