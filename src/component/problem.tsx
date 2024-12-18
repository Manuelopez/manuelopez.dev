import { useState } from 'react';
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

  const [ideas, setIdeas] = useState<
    {
      title: string;
      steps: string;
      timeComplexity: string;
      spaceComplexity: string;
    }[]
  >([
    {
      title: 'test1',
      steps: 'test steps',
      timeComplexity: 'N',
      spaceComplexity: 'LogN',
    },
  ]);

  const [currentTab, setCurrentTab] = useState(0);

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
              <div
                style={{
                  borderTop: '2px solid black',
                  borderBottom: '2px solid black',
                  borderLeft: '2px solid black',
                }}
              >
                <h2>Ideas</h2>

                <hr
                  style={{ padding: 'none', marginTop: 0, marginBottom: 0 }}
                />
                {ideas.map((i, idx) => {
                  return (
                    <div key={`idea-${idx}`} style={{ width: '100%' }}>
                      <input
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          display: 'inline',
                          padding: 'none',
                        }}
                        value={i.title}
                      ></input>
                      <div style={{ display: 'flex' }}>
                        <textarea style={{ width: '50%' }} value={i.steps} />
                        <div style={{ width: '50%' }}>
                          <div>{`O(${i.timeComplexity})`}</div>
                          <hr
                            style={{
                              width: '',
                              padding: 'none',
                              marginTop: 0,
                              marginBottom: 0,
                            }}
                          />
                          <div>{`O(${i.spaceComplexity})`}</div>
                        </div>
                      </div>
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
                    <button onClick={() => {}}>Runnn the thing init</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          id='code'
          style={{
            width: '60%',
            border: '2px solid black',
          }}
        >
          <h2>Code</h2>
        </div>
      </div>
    </div>
  );
}
