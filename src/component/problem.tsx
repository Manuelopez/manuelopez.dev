import { useState } from 'react';
import { List } from './list';
import { useParams } from 'react-router';
import { dsAlgoData } from '../data';

export function Problem() {
  const params = useParams() as { ds: 'array'; pId: string };

  const currData = dsAlgoData[params.ds];
  const [title] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].title,
  );
  const [description] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].description,
  );
  const [constraints] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].constraints,
  );
  const [tests] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].tests,
  );
  const [ideas] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].ideas,
  );
  const [tInstance] = useState(
    currData.problems[
      params.pId as keyof typeof currData.problems
    ].tester.generaator(tests[0].inputVal),
  );
  const [code] = useState(
    currData.problems[params.pId as keyof typeof currData.problems].code
      .toString()
      .split('\n'),
  );

  const [currentTab, setCurrentTab] = useState(0);

  const [linesToolTip, setLinesToolTip] = useState(
    Array.from({ length: code.length }, () => ({ text: '', display: 'none' })),
  );

  let linesSpace = 0;

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <h1>{title}</h1>
      <div>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '20%',
            listStyle: 'none',
            padding: 0,
            justifyContent: 'space-between',
          }}
        >
          <li
            onClick={() => {
              setCurrentTab(0);
            }}
          >
            Description
          </li>
          <li
            onClick={() => {
              setCurrentTab(1);
            }}
          >
            Canvas
          </li>
          <li
            onClick={() => {
              setCurrentTab(2);
            }}
          >
            Tests
          </li>
        </ul>
      </div>
      <div
        id='parent'
        style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
      >
        <div id='left' style={{ width: '40%' }}>
          {currentTab === 0 && (
            <>
              <p>{description}</p>
            </>
          )}
          {currentTab === 1 && (
            <>
              <div>
                <h2>Constraints</h2>
                <ul>
                  {constraints.map((c, i) => {
                    return <li key={`constrains-${i}`}>{c}</li>;
                  })}
                </ul>
              </div>
              <div>
                <h2>Ideas</h2>
                {ideas.map((i, idx) => {
                  return (
                    <div key={`ideas-${idx}`}>
                      <p>
                        {i.title} Time: {i.timeComplexity} Space:{' '}
                        {i.spaceComplexity}
                        <List list={i.steps} />
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {currentTab === 2 && (
            <div>
              {tests.map((t, i) => {
                return (
                  <div key={`test-${i}`}>
                    <h2>Test {i + 1}</h2>
                    <p>
                      <strong>Input</strong> {t.input}
                    </p>
                    <p>
                      <strong> Output</strong> {t.output}
                    </p>
                    <button
                      onClick={() => {
                        let values = tInstance.next().value as any;
                        let emptyTooltip = Array.from(
                          { length: code.length },
                          () => ({ text: '', display: 'none' }),
                        );
                        emptyTooltip[values[1]].text = values[0];
                        emptyTooltip[values[1]].display = 'block';
                        setLinesToolTip(emptyTooltip);
                      }}
                    >
                      Runnn the thing init
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div id='code' style={{ width: '60%' }}>
          <h2>Code</h2>
          {code.map((c, i) => {
            if (c[0] === '}') {
              linesSpace--;
            }
            let val = (
              <div key={`line-${i}`} id={'line-' + (i + 1).toString()}>
                <pre style={{ paddingLeft: 50 * linesSpace }}>{c}</pre>
                <div
                  id={`tooltip-line-${i}`}
                  style={{ display: linesToolTip[i].display }}
                >
                  {linesToolTip[i].text}
                </div>
              </div>
            );
            if (c[c.length - 1] === '{') {
              linesSpace++;
            }
            return val;
          })}
        </div>
      </div>
    </div>
  );
}
