import { useState } from 'react';
const variables: any = {};

function ListItem({ listItem }: { listItem: string | string[] }) {
  return (
    <>
      {Array.isArray(listItem) ? (
        <List list={listItem} />
      ) : (
        <li>
          <p>{listItem}</p>
        </li>
      )}
    </>
  );
}

function List({ list }: { list: (string | string[])[] }) {
  return (
    <ul>
      {list.map((listItem, i) => (
        <ListItem key={`$list-${i}`} listItem={listItem} />
      ))}
    </ul>
  );
}
export default function ContainsDuplice({
  title,
  description,
  constraints,
  tests,
  ideas,
  tester,
  variables,
  code,
}: {
  title: string;
  description: string;
  constraints: string[];
  variables: any;
  tester: any;
  code: string[];
  ideas: {
    title: string;
    timeComplexity: string;
    spaceComplexity: string;
    steps: (string | string[])[];
  }[];
  tests: {
    input: string;
    output: string;
    explanation: string;
    inputVal: any;
    outputVal: any;
  }[];
}) {
  const [currentTab, setCurrentTab] = useState(0);

  const [tInstance, setTestInstance] = useState(tester());
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
                        console.log(tInstance.next());
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
            </div>
          );
          if (c[c.length - 1] === '{') {
            linesSpace++;
          }
          return val;
        })}
      </div>
    </div>
    </div >
  );
}
